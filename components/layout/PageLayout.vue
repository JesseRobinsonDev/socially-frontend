<template>
  <div class="page-layout">
    <PageHeader v-if="header" />
    <div class="page-children"><slot /></div>
  </div>
</template>

<script>
import PageHeader from './PageHeader.vue'
export default {
  name: 'PageLayout',
  components: { PageHeader },
  props: {
    header: Boolean,
  },
}
</script>

<style scoped>
.page-layout {
  height: 100vh;
  background-color: rgb(20, 20, 20);
  color: white;
  display: flex;
  flex-direction: column;
}

.page-children {
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
}
</style>
