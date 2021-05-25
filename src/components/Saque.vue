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
        <b-form-group
          label="Numero da conta:"
          label-for="numero-conta"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="numero-conta">
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Valor a ser depositado:"
          label-for="deposito"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="deposito"></b-form-input>
        </b-form-group>
        <b-button pill variant="primary">Sacar</b-button>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Saque"
}
</script>

<style scoped>

</style>
