<template>
  <div id="app">
    <img src="./assets/logo.png">
    <b-nav tabs fill>
      <b-nav-item active href="#/">Saldo conta corrente</b-nav-item>
      <b-nav-item href="#/deposito">Deposito em conta corrente</b-nav-item>
      <b-nav-item href="#/saque">Saque em conta corrente</b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
