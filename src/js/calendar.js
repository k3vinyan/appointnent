import calendarDates from 'calendar-dates';

class Calendar {
    constructor() {
        this.calendar = null;
    }

    init() {
        this.createCalendar();
    }

    createCalendar() {
        const todayDate = new Date();
        const currentMonth = new Date(todayDate.getFullYear(), todayDate.getMonth());
        const nextMonth = new Date(todayDate.getFullYear() + 1, todayDate.getMonth() + 1);
        const thirdMonth = new Date(todayDate.getFullYear() + 2, todayDate.getMonth() + 2);

        const calendarHelper = new calendarDates();
        const currentMonthPromise = calendarHelper.getDates(currentMonth);
        const nextMonthPromise = calendarHelper.getDates(nextMonth);
        const thirdMonthPromise = calendarHelper.getDates(thirdMonth);

        currentMonthPromise.then( (data)=> {
            let temp = [];
            let arr = [];

            for(let i = 0; i < data.length; i++) {
                if(temp.length !== 7) {
                    temp.push(data)
                } else {
                    arr.push(temp)
                    temp = [];
                }
            }
            this.calendar = arr;
        })

        nextMonthPromise.then( (data)=> {
            let temp = [];
            let arr = [];

            for(let i = 0; i < data.length; i++) {
                if(temp.length !== 7) {
                    temp.push(data)
                } else {
                    arr.push(temp)
                    temp = [];
                }
            }
            this.calendar = arr;
        })

        thirdMonthPromise.then( (data)=> {
            let temp = [];
            let arr = [];

            for(let i = 0; i < data.length; i++) {
                if(temp.length !== 7) {
                    temp.push(data)
                } else {
                    arr.push(temp)
                    temp = [];
                }
            }
            this.calendar = arr;
        })


        
    }

    getCalendar() {
        return this.calendar;
    }

    getTodayDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        return today;
    }

    getUI() {
        return this.UI;
    }
}

const calendar = new Calendar().init();
console.log(calendar)

export default { "calendar": calendar };

const test = new Calendar();
test.createCalendar()

setTimeout(function(){
    console.log(test.getCalendar())
}, 300)