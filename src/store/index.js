import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  operations: [
    {
      id: 1,
      name: 'Operation 1',
      price: 0,
      quantitys: [0],
      fullQuantity: 0,
      cost: 0,
    },
  ],
  totalCost: 0,
};

const mutations = {
  changeOperationName(state, payload) {
    state.operations.find((operation) => (+operation.id === +payload.id)).name = payload.value;
  },
  changeOperationPrice(state, payload) {
    state.operations.find((operation) => (+operation.id === +payload.id)).price = payload.value;
  },
  changeOperationQuantitys(state, payload) {
    const operation = state.operations.find((operation) => (+operation.id === +payload.id));
    const newQuantitys = [...operation.quantitys];
    newQuantitys[payload.index] = payload.value;
    operation.quantitys = newQuantitys;
  },
  changeOperationFullQuantity(state, id) {
    const operation = state.operations.find((operation) => (+operation.id === +id));
    const fullQuantity = operation.quantitys.reduce(
      (accumulator, currentValue) => (accumulator + +currentValue), 0
    );
    operation.fullQuantity = fullQuantity;
  },
  changeOperationCost(state, id) {
    const operation = state.operations.find((operation) => (+operation.id === +id));
    operation.cost = +(operation.fullQuantity * operation.price).toFixed(3);
  },

  addOperationQuantity(state, id) {
    const operation = state.operations.find((operation) => (+operation.id === +id));
    const newQuantitys = [...operation.quantitys];
    newQuantitys.push(0);
    operation.quantitys = newQuantitys;
  },
  removeOperationQuantity(state, payload) {
    const operation = state.operations.find((operation) => (+operation.id === +payload.id));
    const newQuantitys = [...operation.quantitys];
    newQuantitys.splice(payload.index, 1);
    operation.quantitys = newQuantitys;
  },

  addNewOperation(state) {
    const newId = state.operations[state.operations.length - 1].id + 1;
    const newOperation = {
      id: newId,
      name: `Operation ${newId}`,
      price: 0,
      quantitys: [0],
      fullQuantity: 0,
      cost: 0,
    };
    const newOperations = [...state.operations];
    newOperations.push(newOperation);
    state.operations = newOperations;
  },
  removeOperation(state, id) {
    const newOperations = [...state.operations];
    const unnecessaryOperation = newOperations.find((operation) => operation.id === id);
    newOperations.splice(newOperations.indexOf(unnecessaryOperation), 1);
    state.operations = newOperations;
  },

  changeTotalCost(state) {
    state.totalCost = +(state.operations.reduce((accumulator, currentValue) => (
      accumulator + currentValue.cost
    ), 0)).toFixed(3);
  },
};

export default new Vuex.Store({
  strict: true, // Отключить на продакшн!

  state,
  mutations,
});

export { mutations };
