<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <LoginComp class="center" msg="Welcome to the crypto-wallet Aglo"/>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
  <h2>Hola Cryptoteam!</h2>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LoginComp from './components/LoginComponent.vue'
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  name: 'App',
  components: {
    LoginComp,
    ButtonCounter
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
