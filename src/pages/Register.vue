<template>
  <div class="main">
    <div v-if="modal==='success'">
      <h2>Success</h2>
      <button class="back" v-on:click="$router.push('/')">Go Back</button>
    </div>
    <div class="regbox" v-else>
      <h1>Register</h1>
      <h3>Name:</h3>
      <input v-model="name" placeholder="user st john"/>
      <h3>Phone Number:</h3>
      <input v-model="phone" placeholder="1231231122" />
      <h3>Email:</h3>
      <input v-model="email" placeholder="user@gmail.com" />
      <h3>Address:</h3>
      <input v-model="address" placeholder="1111 w user st" />
      <button v-on:click="registerProspect">Register</button>
      <button v-on:click="$router.push('/')">Go Back</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data: function () {
    return {
      modal: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      checkedIn: false,
      comment: ''
    }
  },
  methods: {
    registerProspect () {
      let vue = this
      axios.post('https://api.screenartstudios.com/prospects', {
        name: vue.name,
        phone: vue.phone,
        email: vue.email,
        address: vue.address,
        checkedIn: vue.checkedIn,
        comment: vue.comment
      })
        .then(response => {
          vue.modal = 'success'
        })
        .catch(response => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped lang="less">
  .regbox{
    margin-top: 140px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(12, 60px);
  }
  h1 {
    grid-row: 1;
    grid-column-start: 2;
    grid-column-end: 10;
    font-size: 2em;
    text-align: center;
  }
  h2 {
    text-align: center;
    margin-top: 30%;
  }
  h3 {
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 11;
  }
  .back {
    text-align: center;
    margin-left: 33%;
    width: 33%;
    margin-top: 10%;
  }
  input {
    margin-top: 20px;
    grid-column-start: 2;
    grid-column-end: 10;
    border: 1px black solid;
  }
  button {
    margin-top: 20px;
    grid-column-start: 2;
    grid-column-end: 10;
  }
  @media only screen and (min-width:750px) {
    .regbox{
      margin-top: 140px;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(12, 100px);
    }
    input {
      margin-top: 40px;
      grid-column-start: 2;
      grid-column-end: 10;
      border: 1px black solid;
    }
  }
</style>
