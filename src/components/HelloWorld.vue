<template>
  <div class="hello">
    <b-table  class="mt-3"
              outlined
              :items="contas"
              :fields="fields">
      <template #cell(saldo)="data">
        {{ data.item.saldo }} R$
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      fields: ['numero_conta', 'saldo'],
    }
  },
  methods: {

  },
  computed:{
    contas: function (){
      return this.$store.state.conta.contas
    }
  },
  mounted() {
    this.$store.dispatch('getAllContas')
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
