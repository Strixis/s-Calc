<template>
  <header class="header">
    <a href="#"><img :src="logo" alt="logo" class="logo"></a>
    <button class="button_header-navigation">M</button>
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
