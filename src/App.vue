<template>
  <div>
    <img :src="logo" alt="logo">
    <span class="test">Hello</span>
    <Test />
  </div>
</template>

<script>
import Test from 'components/Test';
import logo from 'img/logo-mini.svg';

export default {
  components: {
    Test
  },
  data() {
    return {
      logo
    }
  }
}
</script>

<style lang="sass">
@use 'styles'
.test
  color: red
</style>
