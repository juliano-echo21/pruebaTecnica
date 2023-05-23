<template>
    <!-- <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6"> -->
        
        <v-card>
            <table
            fixed-header  
            width="100%"  
            text-align="center"        
            >
            <thead>
                <tr>
                    <th text-align="center"
                    width="25%" >
                        Name
                    </th>
                    <th class="text-center"
                    width="25%"
                    border-spacing="30px">
                        Surname
                    </th>
                    <th class="text-center"
                    width="25%"
                    >username</th>
                    <th class="text-center"
                    width="25%"
                    >creditBalance</th>
                </tr>
            </thead>
            <tbody
            text-align="center">
                <tr
                v-for="item in users"
                :key="item.name"
                >
                <td > {{ item.name }}</td>
                <td> {{ item.surname }}</td>
                <td> {{ item.username }}</td>
                <td> {{ item.creditBalance }}</td>

                </tr>
            </tbody>
            </table>

          <v-card-actions>
            <v-spacer />
            <!-- <v-btn
              color="primary"
              nuxt
              to="/inspire"
            >
              Continue
            </v-btn> -->
          </v-card-actions>
        </v-card>
      <!-- </v-col>
    </v-row> -->
  </template>
  
  <script>
import { ref,onMounted } from 'vue';

  const tab = ref()
  
  export default {
    data () {
      return {
        users: [],
      }
    },
    methods:{
        async asyncData(){
            try {
            const users = await this.$axios.$get(`http://localhost:10000/backend/v2/api/users`,{
               name : this.name,
               surname : this.surname,
               username : this.username,
               creditBalance : this.creditBalance
           })
           console.log(users)
           this.users = users
          } 
          catch (error) {
           console.log(error)
            
          }
        }
    },
    mounted(){
        this.asyncData()

    }
  }
</script>
  