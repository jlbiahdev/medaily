Object.defineProperty(Date.prototype, "toobject", {
    value: function toobject() {
        let day = this.getDate();
        let month = this.getMonth() + 1;
        let year = this.getFullYear();
        return {
            id: `${year}${month}${day}`,
            datefull: new Date(this),
            day: day,
            month: month,
            year: year,
            itsme: false,
            dayofweek: this.getDay()
        }
    },
    writable: true,
    configurable: true,
});

Object.defineProperty(Date.prototype, "adddays", {
    value: function adddays(value) {
        this.setDate(this.getDate() + value);
    },
    writable: true,
    configurable: true,
});

Object.defineProperty(Date.prototype, "getnextmonth", {
    value: function getnextmonth() {
        if (this.getMonth() == 11) {
            return new Date(this.getFullYear() + 1, 0, 1);
        } else {
            return new Date(this.getFullYear(), this.getMonth() + 1, 1);
        }
    },
    writable: true,
    configurable: true,
});

Object.defineProperty(Date.prototype, "getpreviousmonth", {
    value: function getpreviousmonth() {
        if (this.getMonth() == 0) {
            return new Date(this.getFullYear() - 1, 11, 1);
        } else {
            return new Date(this.getFullYear(), this.getMonth() - 1, 1);
        }
    },
    writable: true,
    configurable: true,
});