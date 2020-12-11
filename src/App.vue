<template>
  <div id="app">
    Parent counter : {{ getCounter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <child></child>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Child from "./components/Child"

export default {
  components: { Child },
  comments: {
    chlid: Child
  },
  computed: {
    ...mapGetters([
      'getCounter'
    ])
  },

  methods: {
    // mutations로 값을 변경
    // ...mapMutations([
    //   'addCounter',
    //   'subCounter'
    // ])

    // actions로 값을 변경
    ...mapActions([
      'addCounter',
      'subCounter'
    ])
  }
}
</script>

<style>
</style>
