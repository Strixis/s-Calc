<template>
  <header>
    <img :src="logo" alt="logo">
    <span>This is header component</span>
    <button>M</button>
  </header>
</template>

<script>
import logo from 'img/logo-mini.svg';

export default {
  data() {
    return {
      logo,
    };
  },
}
</script>
