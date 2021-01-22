<template>
  <main class="main">
    <div class="calculate-form">
      <ComponentOperationForm v-for="(operation) of operations"
        :key="operation.id"
        :id="operation.id"
      />
      <button v-if="isMobile" class="button_add-operation" @click="addNewOperation">Добавить</button>
    </div>
    <div class="total">
      <span class="total_text">Итого:</span>
      <span class="total_number">{{ totalCost }}</span>
      <span v-show="isValid" class="total_error">Расценка и количество должны быть числами.</span>
      <span v-show="isValid" class="total_error">Дробная часть разделяется точкой.</span>
      <button v-if="!isMobile" class="button_add-operation" @click="addNewOperation">Добавить</button>
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
  data() {
    return {
      isMobile: true,
    };
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
    handleResize() {
      window.innerWidth > 767 ? this.isMobile = false : this.isMobile = true;
    },
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>
