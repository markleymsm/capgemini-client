<template>
  <div class="hello">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {conta: 40, dono_da_conta: 'Dickerson', saldo_em_conta: '400'},
        {conta: 21, dono_da_conta: 'Larsen', saldo_em_conta: '600'},
        {conta: 38, dono_da_conta: 'Jami', saldo_em_conta: '5.600'},
        {conta: 89, dono_da_conta: 'Geneva', saldo_em_conta: '4.500'}
      ]
    }
  },
  methods: {
    buscaSaldoContaCorrente() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
