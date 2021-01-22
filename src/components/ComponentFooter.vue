<template>
  <footer class="footer">
    <span class="footer_text">&copy;Strixis, 2021<span v-if="year != 2021">-{{ year }}</span>. All rights reserved.</span>
  </footer>
</template>

<script>
export default {
  computed: {
    year: () => (new Date().getFullYear()),
  },
}
</script>
