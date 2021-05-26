<template>
  <div id="app">
    <img src="./assets/logo.png">
    <b-nav fill tabs>
      <b-nav-item :active="tab === 'saldo'" @click="tab = 'saldo'" href="#/">Saldo conta corrente</b-nav-item>
      <b-nav-item :active="tab === 'depo'" @click="tab = 'depo'" href="#/deposito">Deposito em conta corrente</b-nav-item>
      <b-nav-item :active="tab === 'saq'" @click="tab = 'saq'" href="#/saque">Saque em conta corrente</b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      tab: 'saldo'
    }
  }
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
