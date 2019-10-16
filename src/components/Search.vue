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
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </td>
        </tr>
  </table>

  <Calendar />
  </div>

</template>

<script>

import Calendar from './Calendar.vue';

console.log(Calendar)

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
                }
            }
            
    },
    
    
}
</script>

<style>
    table, th, td {
        border: 1px solid black;
    }
    .previous {
        background: lightgray;
    }
    
</style>