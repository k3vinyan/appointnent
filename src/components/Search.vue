<template>
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
                        :value="service.item"
                    >
                    {{service}}
                    </option>
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
</template>

<script>
export default {
    name: 'SearchBar',
    data: function() {
            return {
                services: [ "a", "b", "c"
                    // {item: 'Directors Cut'},
                    // {item: 'The Buzz'},
                    // {item: 'Beard Trim'},
                    // {item: 'Kids'}
                ]
            }
            
    }
}
</script>

<style>
    table, th, td {
        border: 1px solid black;
    }
</style>