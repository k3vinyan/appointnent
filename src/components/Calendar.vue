<template>
  <div class="calendar">
     <div>
         <span>Prev</span>
         <h1>{{currentMonth}} {{currentYear}}</h1>
         <span>Next</span>
     </div>
     <table>
         <tr>
             <th>SUN</th>
             <th>MON</th>
             <th>TUE</th>
             <th>WED</th>
             <th>THUR</th>
             <th>FRI</th>
             <th>SAT</th>
         </tr>
         <template v-for="month in calendar">
            <tr v-for="(row, index) in month"
                :key="index"
            >
            <template  v-for="(day, index) in row">
            <td v-if="day.date === currentDate && day.type === 'current'"
                :key="index"
                :class="day.type"
                class="today date"
                @click="selectDate(this)"
            >
                {{day.date}}                     
            </td>
            <td v-else-if="day.date < currentDate || day.type === 'previous'"
                :key="index"
                :class="day.type"
                class="past date"
                @click="selectDate"
            >
                {{day.date}}
             </td>
            <td v-else
                :key="index"
                :class="day.type"
                class="future date"
                @click="selectDate"
            >
                {{day.date}}
            </td>
            </template>
            
        </tr>

         </template>
        
     </table> 
  </div>
</template>

<script>

import CalendarDates from 'calendar-dates';
import calendar from '../js/calendar.js';

console.log(calendar)

const calendarDates = new CalendarDates();
const today = new Date();
const date = today.getDate();


const test = new calendar

const months = {
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

export default {
    name: 'Calendar',
    data: function(){
        return {
            calendar: {
                currentMonth: null,
                nextMonth: null
            },
            currentMonth: months[today.getMonth()],
            currentYear: today.getFullYear(),
            currentDate: date,
            selectedService: null,
            selectedStylist: null,
            selectedDate: null
        }
    },
    methods: {
        selectDate: function(data) {
            console.log(data.target)
        }
    },
    beforeCreate: function() {
        
        // calendarDates.getDates(today)
        //     .then( (data)=> {
        //         let temp = [];
        //         let arr = [];
        //         for(let i = 0; i < data.length; i++) {
        //             if(temp.length !== 7) {
        //                 temp.push(data[i])
        //             } else {
        //                 arr.push(temp)
        //                 temp = []
        //             }
        //         }
        //         this.calendar.currentMonth = arr;
        //     })
    }
}
</script>

<style>
    .today {
        background: #0099CC;
    }
    .past {
        color: #DCDCDC;
    }
    .date {

    }
    .date:hover {
        cursor: pointer;
        background:gray;
        border-radius: 100px;

    }
</style>