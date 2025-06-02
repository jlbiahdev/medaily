import './entensions.date.js';
import './entensions.string.js';
import * as calendar from './calendar.js';
import * as tasksdb from '../data/rdvs.js';

var tasksarray = [];
$(document).ready(() => {

    // console.log(JSON.stringify(tasksdb.tasks))
    var now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    $('.search i').on('click', function () { searchbuttonclicked(); });
    $('#currentday-box div').html(`${new Date().getDate()}<div class="backtop"></div><div class="backbottom"></div>`);
    $('#currentday-box').on('click', function () { nowbuttonclicked(); });
    $('#search-text').on('change', function () { searchtextchanged(this.value); })
    initcalendar(month, year).then(() => {
        $('#left-button').on('click', function () { leftbuttonclicked(); });
        $('#right-button').on('click', function () { rightbuttonclicked(); });
        $('.menus .month').on('click', function () { selectedmonthclicked(); });
    });
});

const searchtextchanged = (keywords) => {
    var tasks = tasksdb.tasks.filter(textincludeskeywords(keywords));
    var popups = '';
    $(`#list`).empty();
    tasks.forEach(task => {
        $(`#list`).append(gettaskitemcard(task)); popups += draw_popup(task);
    });
    $('#list').append(popups);
    $('.list-task').on("click", function () { callpopup(this) })
}

const gettaskitemcard = (task) => {
    var now = new Date();
    return taskitemcard.replace('{passed_task}', task.date.datefull > now ? 'passed-task' : '')
        .replace('{id}', task.date.cardid)
        .replace('{subject}', task.subject)
        .replace('{date}', new Date(task.date.datefull).tolocaledatestring('fr-fr', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' }))
        .replace('{status}', getstatusclass(task.status));
}

const textincludeskeywords = (keywords) => {
    return function (task) {
        var result = keywords.touppercase().split(' ').filter(k => task.subject.touppercase().includes(k) || task.comment.touppercase().includes(k));
        // console.log(result);
        return result && result.length;
    }
}
const hidecalendar = () => {
    $('.days-container').addClass('hide');
    $('.days-container').empty();
    $('.task-card').remove();
    $('#calendar').css('visibility', 'hidden');
    $('#calendar').detach().insertAfter('#list');
}

const showcalendar = () => {
    $('.days-container').removeClass('hide');
    $('#calendar').css('visibility', 'visible');
    $('#calendar').detach().insertBefore('#list');
}

const iscalendarhidden = () => $('.days-container').hasClass('hide');

const togglecalendar = () => {
    if ($('.days-container').hasClass('hide')) {
        showcalendar(); $('#list').css('visibility', 'hidden');
        return true;
    } else {
        hidecalendar();
        $('#list').css('visibility', 'visible');
        return false;
    }
}

const searchbuttonclicked = () => {
    if (togglecalendar()) {
        var mnth = Number($('#calendar').attr('data-month'));
        var yr = Number($('#calendar').attr('data-year'));
        var date = calendar.getDayone(mnth - 1, yr);
        console.log(`${mnth} ${yr }`);              

        initcalendar(date.getMonth() + 1, date.getFullYear());
        $('#search-text').removeClass('show');
    } else {
        $('#search-text').addClass('show');
        $('#search-text').val('');
    }
}
const nowbuttonclicked = () => {
    var now = new Date();
    if (iscalendarhidden()) {
        togglecalendar();
    }
    initcalendar(now.getMonth() + 1, now.getFullYear());
}

const selectedmonthclicked = () => {
    togglemonth();
    var items = calendar.getMonthsuntilnow();
    var br_periods = '';

    items.forEach(item => {
        // console.log(item);         
        br_periods += (item.month === 1 ? `<div data-month="${item.month}" data-year="${item.year}" class="period period-year">${item.year}</div>` : '') +
            `<div data-month="${item.month}" data-year="${item.year}" class="period ${item.itsme ? 'period-actual' : ''}">${item.monthtext.truncate(3, '.')}</div>`;
    });

    $('#periods-bar').html(br_periods);
    $('.period').on('click', function () { periodbuttonclicked(this); })
}

const periodbuttonclicked = (e) => {     
    // console.log(e);      
    var month = Number($(e).attr('data-month'));     
    var year = Number($(e).attr('data-year'));          
    initcalendar(month, year);
}

const leftbuttonclicked = () => {
    var mnth = Number($('#calendar').attr('data-month'));
    var yr = Number($('#calendar').attr('data-year'));

    // console.log(`${mnth} ${yr}`);      
    if (iscalendarhidden()) { togglecalendar(); }

    var date = calendar.getDayone(mnth - 1, yr).getpreviousmonth();
    initcalendar(date.getMonth() + 1, date.getFullYear()).then(() => { hideperiodsbar() });
}

const rightbuttonclicked = () => {
    var mnth = Number($('#calendar').attr('data-month'));
    var yr = Number($('#calendar').attr('data-year'));
    // console.log(`${mnth} ${yr}`);      

    if (iscalendarhidden()) { togglecalendar(); }

    var date = calendar.getDayone(mnth, yr).getnextmonth();
    // console.log(date);    
    initcalendar(date.getMonth(), date.getFullYear()).then(() => { hideperiodsbar(); });
}

const setweeks = (month, year) => {
    if (year < 2023 || (year === 2023 && month === 1)) { return; }
    var br_dates = '';
    var dates = calendar.getDaysinmonth(month, year);

    $('.days-container').empty(); dates.forEach(d => {
        // console.log(d);         
        br_dates += `<div id="${d.year}${d.month}${d.day}" data-today=${d.itsme} class="day"><div class="day-box${d.itsme ? ' today' : ''}">${d.day}</div><div class="tasks-box"></div></div>`;
    });

    $('#calendar .days-container').append(br_dates);
}

const initcalendar = (month, year) => {
    if (year < 2023 || (year === 2023 && month === 1)) { return; }

    setweeks(month, year);
    // console.log(`${month} ${year}`);    

    return gettasks(month, year).then(tasks => {
        var popups = '';
        tasksarray = tasks;

        tasks.forEach(t => {
            $(`#${t.date.dateid} .tasks-box`).append(`<div class="task-block"><i class="fa-solid ${getstatusclass(t.status)}"></i><div id='${t.date.cardid}' class="task popup">${t.subject}</div></div>`);
            popups += draw_popup(t);
        });
        // console.log(popups);         
        $('#calendar').append(popups);
        $('.task').on("click", function () { callpopup(this) })
        $(document).on("click", function (e) { if (!e.target.classList.contains('popup')) { clearpopus(); } });
        $('#calendar').attr('data-month', month);
        $('#calendar').attr('data-year', year);
        $('.menus .month span').html(getselectedmonth(month, year));
    });
}
const getselectedmonth = (month, year) => {
    var period = calendar.getDayone(month - 1, year);
    var result = period.toLocaleString('fr-fr', { month: 'long' });

    if (period.getFullYear() !== new Date().getFullYear()) {
        result = result.truncate(3, '.') + period.getFullYear();
    }

    return result;

}
const showperiodsbar = () => { $('#periods-bar').addClass('show'); $('#periods-bar').detach().insertAfter('#command-bar'); }

const hideperiodsbar = () => { $('#periods-bar').removeClass('show'); $('#periods-bar').detach().insertAfter('#list'); }

const togglemonth = () => {
    if ($('.menus .month i').hasClass('fa-caret-up')) {
        $('.menus .month i').removeClass('fa-caret-up');
        $('.menus .month i').addClass('fa-caret-down ');
        hideperiodsbar();
    } else {
        $('.menus .month i').removeClass('fa-caret-down');
        $('.menus .month i').addClass('fa-caret-up'); showperiodsbar();
    }
}
const gettasks = (month, year) => {
    return new Promise((res, rej) => {
        // console.log(`${year}, ${month}`);          
        var days = tasksdb.tasks.filter(d => d.date.year === year && d.date.month === month).sort((a, b) => a.id > b.id); res(days);
    });
}

const getstatusclass = (status) => {
    switch (status) {
        case 1: return 'fa-circle canceled';
        case 2: return 'fa-circle notdone';
        case 3: return 'fa-circle done';
        case 4: return 'fa-circle holiday';
        default: return 'fa-circle-dot todo';
    }
}
const clearpopus = () => {
    $('.task-card').each(function () { $(this).removeClass("show"); });
}

function callpopup(e) {
    var id = `#${e.id}-po`; console.log(id)
    clearpopus();
    $(id).addClass("show");
}
const draw_popup = (task) => {     // console.log(task);     
    return taskcard.replace('{task_id}', task.date.cardid)
        .replace('{task_date}', task.date.year)
        .replace('{task_status}', getstatusclass(task.status))
        .replace('{task_subject}', task.subject)
        .replace('{task_comment}', task.comment);
}
const taskcard = `<div id="{task_id}-po" class="task-card"> <div class="task-date {task_status}">{task_date}</div> <div class="task-subject">{task_subject}</div> <div class="task-comment">{task_comment}</div> </div>`;
const taskitemcard = ` <div id='{id}' class="list-task {passed_task}"> <div class="task-date">{date}</div> <div class="task-icon"><i class="fa-solid {status}"></i></div> <div class="task-title">{subject}</div> </div> `;