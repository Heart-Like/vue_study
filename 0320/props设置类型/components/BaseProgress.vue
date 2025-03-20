<template>
  <div class="base-progress">
    <div 
    class="inner"
    :style="{width:w+'%'}">
    <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['w']
}
</script>

<style scoped>
.base-progress{
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border:3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
</style>