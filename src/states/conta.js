import router from '@/router'

export default {
  state: {
    contas: [],
    conta: {}
  },
  mutations: {
    updateContas(state, data) {
      state.contas = data
    },
    updateConta(state, data) {
      state.conta = data
    },
  },
  actions: {
    getAllContas(context) {
      return window
        .axios
        .get('/api/saldo')
        .then((response) => {
          context.commit('updateContas', response.data)
          return response
        })
    },
    depositoConta(context, data) {
      return window
        .axios
        .post('/api/deposito/', data)
        .then((response) => {
          if (response.data.status) {
            alert(response.data.massage)
          } else {
            context.commit('updateConta', {})

            router.push('/')
            return response
          }
        })
    },
    saqueConta(context, data) {
      return window
        .axios
        .post('/api/saque/', data)
        .then((response) => {
          if (response.data.status) {
            alert(response.data.massage)
          } else {
            router.push('/')
            context.commit('updateConta', {})
            return response
          }
        })
    }
  }

}
