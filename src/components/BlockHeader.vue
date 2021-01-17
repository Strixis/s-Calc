<template>
  <header>
    <img :src="logo" alt="logo">
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
