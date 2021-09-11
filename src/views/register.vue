<template>
  <div class="lgin">
    <div>
      <h2>SUSTECH STORE REGISTER</h2>
    </div>

    <v-row>
      <v-col
          cols="12"
          sm="6"
      >
        <v-text-field
            v-model="Username"
            label="Username"
            clearable
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          cols="12"
          sm="6"
      >
        <v-text-field
            v-model="Password"
            label="Password"
            clearable
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          cols="12"
          sm="6"
      >
        <v-text-field
            v-model="Phonenumber"
            label="Phonenumber"
            clearable
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          cols="12"
          sm="6"
      >
        <v-text-field
            v-model="Email_Address"
            label="Email_Address"
            clearable
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-btn @click="regist">register</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "register",
  data () {
    return {
      Username: '',
      Password: '',
      Phonenumber: '',
      Email_Address: '',
    }
  },
  methods: {
    regist(){
      alert('register')
    },
  },
}
</script>

<style scoped>

</style>
