import './entensions.date.js';
/**  * @param {int} the month Number, 0 based  
 * @param {int} the year, not zero based, required to account for leap years  
 * @return {date[]} list with date objects for each day of the month
 **/

export function getDaysinmonth(month, year) {
    var adjustedmonth = month === 0 ? 0 : month - 1;
    var date = new Date(year + (month === 0 ? 1 : 0), adjustedmonth, 1);
    var days = [];

    while (date.getMonth() === adjustedmonth) {
        days.push(date.toobject());
        date.adddays(1);
    }

    date = new Date(year, adjustedmonth, 1);
    while (days[0].dayofweek !== 0) {
        date.adddays(-1);
        days.unshift(date.toobject());
    }

    date = days[days.length - 1].datefull;
    while (days[days.length - 1].dayofweek < 6) {
        date.adddays(1);
        days.push(date.toobject());
    }

    var now = new Date();
    var today = days.find(d => d.year === now.getFullYear() && d.month === now.getMonth() + 1 && d.day === now.getDate());

    if (today) {
        today.itsme = true;
    }

    return days;
}

export function getDayone(month, year) {
    return new Date(year, month, 1);
}

export function getMonthsuntilnow() {
    var now = new Date();
    var startdate = new Date(2023, 0, 1);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var result = [];

    while ((startdate.getFullYear() < year) || (startdate.getFullYear() === year && startdate.getMonth() + 1 <= month)) {
        let itsme = (startdate.getFullYear() === year && startdate.getMonth() + 1 === month);
        console.log(`itsme ${itsme}`);

        result.push({
            month: startdate.getMonth() + 1,
            year: startdate.getFullYear(),
            itsme: itsme,
            monthtext: startdate.toLocaleString('fr-fr', { month: 'long' }),
        });

        startdate = startdate.getnextmonth();
    }
    return result;
}