<template>
  <div>
    <div>
      <label>
        <span>Наименование:</span>
        <input type="text"
          :value="name"
          @input="changeName($props.id, $event.target.value)"
        >
      </label>
      <label>
        <span>Расценка:</span>
        <input type="text"
          :value="price"
          @input="changePrice($props.id, $event.target.value)"
        >
      </label>
      <label>
        <span>Количество:</span>
        <div v-for="(quantity, index) of quantitys"
          :key="index"
        >
          <input type="text"
            :value="quantity"
            @input="changeQuantity($props.id, $event.target.value, index)"
          >
          <button @click="() => removeQuantity($props.id, index)">-</button>
        </div>
      </label>
      <button @click="() => addQuantity($props.id)">+</button>
      <button @click="() => removeOperation($props.id)">X</button>
    </div>
    <div>
      <p>Наименование: <span>{{ name }}</span></p>
      <p>Расценка: <span>{{ price }}</span></p>
      <p>Общее количество: <span>{{ fullQuantity }}</span></p>
      <p>Сумма: <span>{{ cost }}</span></p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  props: ['id'],
  computed: {
    ...mapState({
      operations(state) {
        return state.operations;
      },
      name(state) {
        return state.operations.find((operation) => operation.id === this.$props.id).name;
      },
      price(state) {
        return state.operations.find((operation) => operation.id === this.$props.id).price;
      },
      quantitys(state) {
        return state.operations.find((operation) => operation.id === this.$props.id).quantitys;
      },
      fullQuantity(state) {
        return state.operations.find((operation) => operation.id === this.$props.id).fullQuantity;
      },
      cost(state) {
        return state.operations.find((operation) => operation.id === this.$props.id).cost;
      },
    }),
  },
  methods: {
    ...mapMutations([
      'changeOperationName',
      'changeOperationPrice',
      'changeOperationQuantity',
      'changeOperationFullQuantity',
      'changeOperationCost',
      'addOperationQuantity',
      'removeOperationQuantity',
    ]),

    changeName(id, value) {
      this.changeOperationName({id, value});
    },
    changeQuantity(id, value, index) {
      this.changeOperationQuantity({id, value, index});
      this.changeOperationFullQuantity(id);
      this.changeOperationCost(id);
    },
    changePrice(id, value) {
      this.changeOperationPrice({id, value});
      this.changeOperationCost(id);
    },

    addQuantity(id) {
      this.addOperationQuantity(id);
      this.changeOperationFullQuantity(id);
      this.changeOperationCost(id);
    },
    removeQuantity(id, index) {
      if (this.quantitys.length > 1) {
        this.removeOperationQuantity({id, index});
        this.changeOperationFullQuantity(id);
        this.changeOperationCost(id);
      };
    },

    removeOperation(id) {
      if (this.operations.length > 1) this.$store.commit('removeOperation', id);
    },
  },
}
</script>
