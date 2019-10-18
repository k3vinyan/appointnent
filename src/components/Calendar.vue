<template>
  <div class="calendar">
     <div>
         <span>Prev</span>
         <h1>{{calendar.currentMonth}} {{calendar.currentYear}}</h1>
         <span>Next</span>
     </div>
     <table>
         <tr>
             <th>{{calendar.WEEKENDNAME.SUN.ABV}}</th>
             <th>{{calendar.WEEKENDNAME.MON.ABV}}</th>
             <th>{{calendar.WEEKENDNAME.TUE.ABV}}</th>
             <th>{{calendar.WEEKENDNAME.WED.ABV}}</th>
             <th>{{calendar.WEEKENDNAME.THUR.ABV}}</th>
             <th>{{calendar.WEEKENDNAME.FRI.ABV}}</th>
             <th>{{calendar.WEEKENDNAME.SAT.ABV}}</th>
         </tr>
            <tr v-for="(week, index) in calendar.month"
                :key="index"
            >
                <td v-for="(day, index) in week"
                    :key="index"
                    :class="setDateClass(day.type)"
                >
                    {{day.date}}
                </td>
            </tr>
          
     </table> 
  </div>
</template>

<script>

import calendar from '../js/calendar.js';

console.log(calendar.WEEKENDNAME)
console.log(calendar)

export default {
    name: 'Calendar',
    data: function(){
        return {
            calendar: calendar
        }
    },
    methods: {
        selectDate: function(data) {
            console.log(data.target)
        },
        setDateClass: function(type) {
            switch(type) {
                case 'previous':
                    return "past-date"
              
                case 'current':
                    return "current-date"
                case 'next':
                    return "future-date"
                default:
                    return;
            }
        }
    }
}
</script>

<style>
    .today {
        background: #0099CC;
    }
    .past-date, .future-date {
        color: #DCDCDC;
    }
    .date:hover {
        cursor: pointer;
        background:gray;
        border-radius: 100px;

    }
</style>