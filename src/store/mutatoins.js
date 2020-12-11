
export default {
  addCounter: (context, payload) => {
    return setTimeout(() => {
      context.commit('addCounter')
    }, 2000)
  },
  subCounter: (context, payload) => {
    return setTimeout(() => {
      context.commit('subCounter')
    }, 2000)
  }
}
