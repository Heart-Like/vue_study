<template>
  <div class="app">
    <BaseSelect
      v-model="selectId"
    ></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '103',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style>
</style>