<template>

  <div id="app">
    <h3>{{ msg }}</h3>
    <br>
    
    <form @submit.prevent="login">
      <label for="idLogin">ID</label>
      <input :type="passwordFieldType" id="idLogin" v-model="idLogin" required>
      <button type="submit">Log in</button>
    </form>
  
    
    <div class="small-buttons">
      <button @click="recoverPassword">Recover Password</button>
      <button @click="createAccount">Create new account?</button>
      <button class="password-toggle-btn" @click="togglePasswordVisibility">{{ showPassword ? 'Hide ID' : 'Show ID' }}
      </button>     
    </div>
    <p v-if="isLoggedIn">Welcome!</p>
    <p v-if="error">{{ error }}</p>
  </div>
  
</template>

<script>

import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'LoginComponent',
  components: {
  },
  props: {
    msg: String
  },
  data() {
    return {
      idLogin: '',
      showPassword: false,
      showLoginError: false,
      showLoginErrorMaxLength: false
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
  methods: {
    login() {
      if (this.idLogin.length > 16) {
        this.showLoginErrorMaxLength = true;
      } else {
        this.showLoginErrorMaxLength = false;
      }

    },
    showModal() {
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    recoverPassword() {
      // recover password logic here
    },
    createAccount() {
      // create account logic here
    },
  },
}
</script>

<!-- "scoped" attribute limits CSS to this component only -->
<style scoped>

body {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #1f1f1f;
  color: #3c4666;
}

#app {
  background-color: #e5edfa;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 30px;
  max-width: 400px;
  width: 60%;
  text-align: center;
  margin-top: 2%;
  
  /* display: contents; */

}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 10px;
  font-size: 16px;
}

input {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #555;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  background-color: #eee;
}

button {
  background-color: #2ecc71;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

button:hover {
  background-color: #27ae60;
}

p {
  margin-top: 20px;
  color: #e74c3c;
  font-size: 14px;
}

p::first-letter {
  text-transform: uppercase;
}

.small-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.small-buttons button {
  background-color: #555;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  flex-grow: 1;
  margin: 0 5px;
  font-size: 14px;
}

.small-buttons button:hover {
  background-color: #444;
}

.password-toggle-btn {
  background-color: #e95c5c !important;
}
.password-toggle-btn:hover{
  background-color: #5da9e7 !important;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-content h2 {
  color: red;
}

.modal-content p {
  color: #666;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
