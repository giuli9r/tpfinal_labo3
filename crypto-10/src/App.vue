<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <LoginComponent class="center" msg="Welcome to AGLO"/>
    <Modal v-show="showModal" />
  <h1>Here is a child component!</h1>
  <ButtonCounter />
  <h2>The biggest Cryptoteam in ARG!</h2>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LoginComponent from './components/LoginComponent.vue'
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  name: 'App',
  components: {
    LoginComponent,
    ButtonCounter
  },
  computed: {
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.center{
  height: 75%;
  border-radius: 50%;
  background-color: rgb(224, 214, 214);
  margin: 0 auto;
}

</style>
