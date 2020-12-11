<template>
  <div id="app">
    <div class="top-cnt">
      <div >🤪</div>
      <div >I'm hate delivery food!</div>
    </div>

    <div class="middle-cnt">
      <div>
        <div class="cnt-top">
          <span>🙄</span>
          <span>Reson</span>
        </div>
      </div>
      <div class="cnt-list-item">
        <div>🤑</div>
        First, Spend a lot of money~
      </div>
      <div class="cnt-list-item">
        <div>😥</div>
        Second, Gain a lot of weight~~
      </div>
      <div class="cnt-list-item">
        <div>🤩</div>
        Important finally, The food is so delicious~~~
      </div>
    </div>

    <delivery></delivery>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Delivery from './components/Delivery'

export default {
  components: { Delivery },
  computed: {
  }
}
</script>

<style>
  body {
    background-color: aliceblue;
  }
  #app {
    max-width: 960px;
    margin: auto;
  }
  div {
    text-align: center;
  }
  .top-cnt, .middle-cnt {
    padding : 16px;
  }
  .top-cnt {
    font-size: 26px;
  }
  .middle-cnt {
    font-size: 20px;
  }

  .middle-cnt .cnt-top {
    padding-bottom: 16px;
  }

  .cnt-list-item {
    padding-bottom: 14px;
  }
</style>
