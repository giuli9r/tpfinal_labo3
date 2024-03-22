<template>
    <div class="cont-estabilidades">
      <div class="signup-connect">
        <h1>Purchase Crypto</h1>
        <FormCompra />
      </div>
  
    </div>
    <button v-on:click="log()" type="submit" class="btnHistorial">
      <b>Purchase Log</b>
    </button>
</template>

<script>

// import 
// import

export default {
    data() {
        return {}
    },
    methods: {
        log: function() {
      this.$router.push("/logs");
    },
    }

}
</script>