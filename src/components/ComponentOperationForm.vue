<template>
  <div class="operation">
    <div class="fields">
      <label class="field field__name">
        <span class="field_title">Наименование:</span>
        <input class="field_input field_input__name"
          type="text"
          :value="name"
          @input="changeName($props.id, $event.target.value)"
        >
      </label>
      <label class="field field__price">
        <span class="field_title">Расценка:</span>
        <input class="field_input field_input__price"
          type="text"
          :value="price"
          @input="changePrice($props.id, $event.target.value)"
        >
      </label>
      <label class="field field__quantity">
        <span class="field_title field_title__quantity">Количество:</span>
        <div v-for="(quantity, index) of quantitys"
          :key="index"
          class="quantity"
        >
          <input class="field_input field_input__quantity"
            type="text"
            :value="quantity"
            @input="changeQuantity($props.id, $event.target.value, index)"
          >
          <button class="fields_button"
            @click="() => removeQuantity($props.id, index)"
          >
            -
          </button>
        </div>
        <button class="fields_button"
          @click="() => addQuantity($props.id)"
        >
          +
        </button>
      </label>
      <button class="fields_button fields_button__close"
        @click="() => removeOperation($props.id)"
      >
        X
      </button>
    </div>
    <div class="line"></div>
    <div class="data">
      <p class="data_text">Наименование: <span class="data_value">{{ name }}</span></p>
      <p class="data_text">Расценка: <span class="data_value">{{ price }}</span></p>
      <p class="data_text">Общее количество: <span class="data_value">{{ fullQuantity }}</span></p>
      <p class="data_text">Сумма: <span class="data_value">{{ cost }}</span></p>
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
      'changeTotalCost',
    ]),

    changeName(id, value) {
      this.changeOperationName({id, value});
    },
    changeQuantity(id, value, index) {
      this.changeOperationQuantity({id, value, index});
      this.changeOperationFullQuantity(id);
      this.changeOperationCost(id);
      this.changeTotalCost();
    },
    changePrice(id, value) {
      this.changeOperationPrice({id, value});
      this.changeOperationCost(id);
      this.changeTotalCost();
    },

    addQuantity(id) {
      this.addOperationQuantity(id);
    },
    removeQuantity(id, index) {
      if (this.quantitys.length > 1) {
        this.removeOperationQuantity({id, index});
        this.changeOperationFullQuantity(id);
        this.changeOperationCost(id);
        this.changeTotalCost();
      };
    },

    removeOperation(id) {
      if (this.operations.length > 1) this.$store.commit('removeOperation', id);
      this.changeTotalCost();
    },
  },
}
</script>
