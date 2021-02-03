<template>
  <div class="container">
    <BlockHeader />
    <BlockMain />
    <ComponentFooter />
  </div>
</template>

<script>
import BlockHeader from 'components/BlockHeader';
import BlockMain from 'components/BlockMain';
import ComponentFooter from 'components/ComponentFooter';

export default {
  components: {
    BlockHeader,
    BlockMain,
    ComponentFooter,
  },
}
</script>

<style lang="sass">
@use 'styles'
</style>
