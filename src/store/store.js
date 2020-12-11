import Vue from "vue";
import Vuex from "vuex";
import Mutatoins from "./mutatoins";
import Actions from "./actions";
import Delivery from "../model/Delivery";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    delivery: Delivery
  },
  getters: {
    getCounter: (state) => {
      return state.counter;
    },
    getDelivery: (state) => {
      return state.delivery;
    }
  },
  // 동기 작업에 사용
  mutations: Mutatoins,
  // 비동기 작업에 사용
  actions: Actions,
});
