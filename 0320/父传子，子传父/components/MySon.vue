<template>
  <div style="border:3px solid #000; margin: 10px;">
    <!-- 3.渲染使用 -->
    我是Son组件{{ title }}

    <!-- 子传父 -->
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  // 2.通过props进行接收
  props:['title'],
  methods:{
    changeFn(){
      // 子传父 1.通过$emit，向父组件发送消息通知
      this.$emit('changeTitle','传智教育')
    }
  }
}
</script>

<style>

</style>