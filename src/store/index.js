import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // Отключить на продакшн!

  state: {
    operations: [
      {
        id: 0,
        name: 'Operation 1',
        price: 0,
        quantitys: [0],
        fullQuantity: 0,
        cost: 0,
      },
    ],
  },

  getters: {
    operation: state => id => state.operations.find((operation) => (operation.id ===id)),
  },

  mutations: {
    changeOperationName(state, payload) {
      this.getters.operation(payload.id).name = payload.value;
    },
    changeOperationPrice(state, payload) {
      this.getters.operation(payload.id).price = payload.value;
    },
    changeOperationQuantity(state, payload) {
      this.getters.operation(payload.id).quantitys[payload.index] = payload.value;
    },
    changeOperationFullQuantity(state, id) {
      const operation = this.getters.operation(id);
      const fullQuantity = operation.quantitys.reduce(
        (accumulator, currentValue) => (accumulator + +currentValue), 0
      );
      operation.fullQuantity = fullQuantity;
    },
    changeOperationCost(state, id) {
      const operation = this.getters.operation(id);
      operation.cost = operation.fullQuantity * operation.price;
    },

    addOperationQuantity(state, id) {
      const operation = this.getters.operation(id);
      const newQuantitys = [...operation.quantitys];
      newQuantitys.push(0);
      operation.quantitys = newQuantitys;
    },
  },
});
