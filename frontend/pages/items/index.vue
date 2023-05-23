<template>
  
    <v-form v-model="valid" @submit.prevent="asyncData">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="surname"
            :rules="surnameRules"
            :counter="10"
            label="surname"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="username"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="creditBalance"
            :rules="creditBalanceRules"
            :counter="20"
            label="Credit Balance"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    <v-row>
        <v-col
          cols="1"
          md="4"
          align-self="center"
          
        >
          <v-btn
          type="submit" 
          block class="mt-2"
          @click="submit"
          > Submit </v-btn>
        </v-col>
    </v-row>>
    </v-container>
  </v-form>
</template>

<script>

    export default {
      layout : 'default',
    data: () => ({
      valid: false,
      name: '',
      surname: '',
      surnameRules: [
        value => {
          if (value) return true

          return 'surname is required.'
        },
      ],
      nameRules: [
        value => {
          if (value) return true

          return 'Name is requred.'
        },
        value => {
          if (value?.length <= 20) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      username: '',
      usernameRules: [
        value => {
          if (value) return true

          return 'username is requred.'
        },
      ],
      creditBalance: null,
      creditBalanceRules : [
        value => {
            if ( value) return true

            return 'creditBalance is required'
        }
      ]

    }),

    methods :{
        async asyncData({$axios}){
          try {
            const res = await this.$axios.$post(`http://localhost:10000/backend/v2/api/users`,{
               name : this.name,
               surname : this.surname,
               username : this.username,
               creditBalance : this.creditBalance
           })
           console.log(res)
          } 
          catch (error) {
           console.log(error)
            
          }
        },
        submit(){
            console.log(this.name)
        }
    }
  }

</script>

<style  scoped>

</style>