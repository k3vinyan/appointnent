<template>
  <div>
  <table>
      <tr>
          <th>Service</th>
          <th>Stylist</th>
          <th>Date</th>
      </tr>
      <tr>
          <td>
              <select>
                    <option  
                        v-for="service in services" 
                        :value="service"
                        :key="service"
                    >
                        {{service}}
                    </option>
               </select>
            </td>
            <td>
                <select>
                    <option 
                        v-for="stylist in stylists"
                        :value="stylist"
                        :key="stylist"
                    >   
                        {{stylist}}
                    </option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </td>
            <td>
                <button @click="getCalendar">{{todayDate}}</button>
            </td>
        </tr>
  </table>

    <div class="modal" id="modal">
        <div class="modal-content">
            <Calendar />
        </div>
    </div>
  </div>

</template>

<script>

import Calendar from './Calendar.vue';
import calender from '../js/calendar.js';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


export default {
    name: 'SearchBar',
    components: {
        Calendar
    },
    data: function() {
            return {
                services: [
                    'Directors Cut',
                    'The Buzz',
                    'Beard Trim',
                    'Kids'
                ],
                stylists: [
                    'Kevin Yan',
                    'Harvey Ngo',
                    'Michael Jackson'
                ],
                calendar: {
                    may: null
                },
                todayDate: today
            }      
    },
    methods: {
        getCalendar: function() {
            const modal = document.getElementById("modal");
            modal.style.visibility = "visible";
        }
    },
    computed: {

    }
    
    
}
</script>

<style>
    table, th, td {
        border: 1px solid black;
    }
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0); 
        background-color: rgba(0,0,0,0.4); 
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: hidden;
    }
    .modal-content {
        border: 1px solid black;
        background: #ffffff;
        margin: 0 auto;
    }
    
    
</style>