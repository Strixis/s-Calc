<template>
  <main class="main">
    <div class="calculate-form">
      <ComponentOperationForm />
      <button class="button_add-operation">Добавить</button>
    </div>
    <div class="total">
      <span class="total_text">Итого:</span>
      <span class="total_number">0123456789</span>
    </div>
  </main>
</template>

<script>
import ComponentOperationForm from 'components/ComponentOperationForm';

export default {
  components: {
    ComponentOperationForm,
  },
}
</script>
