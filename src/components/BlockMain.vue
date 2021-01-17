<template>
  <main>
    <span>This is block main</span>
    <ComponentOperationForm />
    <button>Add</button>
    <div>
      <span>Total</span>
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
