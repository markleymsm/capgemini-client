<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Dados para saque"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-input-group prepend="Numero da conta:">
          <input type="number"
                 aria-label="Text input with checkbox"
                 v-model="conta.numero_conta">
        </b-input-group>
        <b-input-group prepend="Valor a ser depositado:">
          <money v-model="conta.valor_saque"
                 v-bind="money"
                 class="form-input input-lg"></money>
        </b-input-group>
        <b-button pill variant="primary" @click="sacar">Sacar</b-button>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Saque",
  data() {
    return {
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      }
    }
  },
  computed: {
    conta: function () {
      return this.$store.state.conta.conta
    }
  },
  methods: {
    sacar: function () {
      this.$store.dispatch('saqueConta', this.conta).then(() => {
      })
    }
  }
}
</script>

<style scoped>

</style>
