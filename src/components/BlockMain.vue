<template>
  <main class="main">
    <div class="calculate-form">
      <ComponentOperationForm v-for="(operation) of operations"
        :key="operation.id"
        :id="operation.id"
      />
      <button class="button_add-operation" @click="addNewOperation">Добавить</button>
    </div>
    <div class="total">
      <span class="total_text">Итого:</span>
      <span class="total_number">{{ totalCost }}</span>
      <span v-show="isValid" class="total_error">Расценка и количество должны быть числами.</span>
      <span v-show="isValid" class="total_error">Дробная часть разделяется точкой.</span>
    </div>
  </main>
</template>

<script>
import ComponentOperationForm from 'components/ComponentOperationForm';

import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    ComponentOperationForm,
  },
  computed: {
    ...mapState({
      operations(state) {
        return state.operations;
      },
      totalCost(state) {
        return state.totalCost;
      },
    }),
   isValid() {
     return Number.isNaN(this.totalCost) ? true : false;
   },
  },
  methods: {
    ...mapMutations([
      'addNewOperation',
    ]),
  },
}
</script>
