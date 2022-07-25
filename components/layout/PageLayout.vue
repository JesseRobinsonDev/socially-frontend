<template>
  <div class="page-layout">
    <PageHeader />
    <div class="page-children"><slot /></div>
  </div>
</template>

<script>
import PageHeader from './PageHeader.vue'
export default {
  name: 'PageLayout',
  components: { PageHeader },
}
</script>

<style>
.page-layout {
}

.page-children {
  padding-left: 4rem;
  padding-right: 4rem;
}
</style>
