import calendarDates from 'calendar-dates';

const todayDate = new Date();
const currentMonth = new Date(todayDate.getFullYear(), todayDate.getMonth());
const nextMonth = new Date(todayDate.getFullYear() + 1, todayDate.getMonth() + 1);
const thirdMonth = new Date(todayDate.getFullYear() + 2, todayDate.getMonth() + 2);

const calendarHelper = new calendarDates();
const currentMonthPromise = calendarHelper.getDates(currentMonth);
const nextMonthPromise = calendarHelper.getDates(nextMonth);
const thirdMonthPromise = calendarHelper.getDates(thirdMonth);

const MONTHNAME = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

const WEEKENDNAME = {
    SUN: {
        FULL: "Sunday",
        ABV: "SUN"
    },
    MON: {
        FULL: "Monday",
        ABV: "MON"
    },
    TUE: {
        FULL: "Tuesday",
        ABV: "TUE"
    },
    WED: {
        FULL: "Wednesday",
        ABV: "WED"
    },
    THUR: {
        FULL: "Thursday",
        ABV: "ThUR",
    },
    FRI: {
        FULL: "Friday",
        ABV: "FRI",
    },
    SAT: {
        FULL: "Saturday",
        ABV: "SAT"
    },
}



export {
    todayDate,
    currentMonth,
    nextMonth,
    thirdMonth,
    calendarHelper,
    currentMonthPromise,
    nextMonthPromise,
    thirdMonthPromise,
    MONTHNAME,
    WEEKENDNAME
}