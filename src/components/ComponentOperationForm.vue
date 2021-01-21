<template>
  <div>
    <div>
      <label>
        <span>Наименование:</span>
        <input type="text"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
        >
      </label>
      <label>
        <span>Расценка:</span>
        <input type="text"
          :value="price"
          @input="$emit('update:price', $event.target.value)"
        >
      </label>
      <label>
        <span>Количество:</span>
        <div v-for="(quantity, index) of quantitys"
          :key="index"
        >
          <input type="text"
            :value="quantity"
            @input="$emit('update:quantitys', 
              changeQuantity($event.target.value, quantitys, index)
            )"
          >
          <button>-</button>
        </div>
      </label>
      <button>+</button>
      <button>X</button>
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
export default {
  props: ['name', 'price', 'quantitys', 'cost'],
  methods: {
    changeQuantity(newValue, quantitys, index) {
      let newQuantitys = [...quantitys];
      newQuantitys[index] = newValue;
      return newQuantitys;
    },
  },
  computed: {
    fullQuantity: function() {
      return this.$props.quantitys.reduce(
        (accumulator, currentValue) => {
          return (
            +currentValue || currentValue == 0 ?
              (accumulator + +currentValue) :
              'Количество должно быть числом.'
          )
        }, 0);
    },
  },
}
</script>
