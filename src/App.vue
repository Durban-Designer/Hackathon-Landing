<template>
  <div id="q-app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from './pages/elements/Navbar'

export default {
  name: 'App',
  components: {
    'navbar': Navbar
  }
}
</script>

<style>
</style>
