<template>
  <div class="main">
    <div v-if="modal==='success'">
      <h2>Success</h2>
      <button class="back" v-on:click="$router.push('/')">Go Back</button>
    </div>
    <div class="regbox" v-else>
      <h1>Register</h1>
      <input v-model="name" placeholder="user st john"/>
      <input v-model="phone" placeholder="**********" />
      <input v-model="email" placeholder="user@gmail.com" />
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
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 60px);
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
  .back {
    text-align: center;
    margin-left: 33%;
    width: 33%;
    margin-top: 10%;
  }
  input {
    grid-column-start: 2;
    grid-column-end: 10;
  }
  button {
    grid-column-start: 2;
    grid-column-end: 10;
  }
</style>
