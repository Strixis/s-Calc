<template>
  <footer class="footer">
    <span class="footer_text">&copy;Strixis, 2020-{{ year }}. All rights reserved.</span>
  </footer>
</template>

<script>
export default {
  computed: {
    year: () => (new Date().getFullYear()),
  },
}
</script>
