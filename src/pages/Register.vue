<template>
  <div class="main">
    <div v-if="modal==='success'">
      <h2>Success</h2>
      <button v-on:click="$router.push('/')">Go Back</button>
    </div>
    <div v-else>
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
  .main {
  }
</style>
