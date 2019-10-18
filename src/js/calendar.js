import {currentMonthPromise, nextMonthPromise, thirdMonthPromise, MONTHNAME, WEEKENDNAME } from './calendarUtil.js';

class Calendar {
    constructor() {
        this.month = null;
        this.todayDate = null;
        this.currentMonth = null;
        this.currentYear = null;
        this.WEEKENDNAME = WEEKENDNAME;
    }

    init() {
        this.createCalendar();
        this.createTodayDate();
    }

    createCalendar() {
    
        currentMonthPromise.then( (data)=> {
            let temp = [];
            let arr = [];

            for(let i = 0; i < data.length; i++) {
                if(temp.length !== 7) {
                    temp.push(data[i])
                } else {
                    arr.push(temp)
                    temp = [];
                }
            }
            this.month = arr;
        })

        // nextMonthPromise.then( (data)=> {
        //     let temp = [];
        //     let arr = [];

        //     for(let i = 0; i < data.length; i++) {
        //         if(temp.length !== 7) {
        //             temp.push(data)
        //         } else {
        //             arr.push(temp)
        //             temp = [];
        //         }
        //     }
        //     this.calendar = arr;
        // })

        // thirdMonthPromise.then( (data)=> {
        //     let temp = [];
        //     let arr = [];

        //     for(let i = 0; i < data.length; i++) {
        //         if(temp.length !== 7) {
        //             temp.push(data)
        //         } else {
        //             arr.push(temp)
        //             temp = [];
        //         }
        //     }
        //     this.calendar = arr;
        // })


        
    }

    getCalendar() {
        return this.calendar;
    }

    createTodayDate() {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;


        this.currentYear = yyyy;
        this.currentMonth = MONTHNAME[mm - 1]; 
        this.todayDate = today;
    }

    getTodayDate() {
        return this.todayDate;
    }




    getUI() {
        return this.UI;
    }
}

const calendar = new Calendar();
calendar.init();


export default calendar;
