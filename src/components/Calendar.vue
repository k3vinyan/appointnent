<template>
  <div class="calendar">
     <div>
         <p>December 2019</p>
     </div>
     <table>
         <tr>
             <th  COLSPAN = 5>December</th>
             <th  COLSPAN = 2>2019</th>
         </tr>
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
            <td v-for="(day, index) in row"
                :key="index"
                :class="day.type"
            >
                {{day.date}}                     
            </td>
        </tr>

         </template>
        
     </table> 
  </div>
</template>

<script>

import CalendarDates from 'calendar-dates';

const calendarDates = new CalendarDates();
const may2018 = new Date(2018, 4);


export default {
    name: 'Calendar',
    data: function(){
        return {
            calendar: {
                may: null
            }
        }
    },
    beforeCreate: function() {
        
        calendarDates.getDates(may2018)
            .then( (data)=> {
                let temp = [];
                let arr = [];
                for(let i = 0; i < data.length; i++) {
                    if(temp.length !== 7) {
                        temp.push(data[i])
                    } else {
                        arr.push(temp)
                        temp = []
                    }
                }
                this.calendar.may = arr;
            })
    }
}
</script>

<style>

</style>