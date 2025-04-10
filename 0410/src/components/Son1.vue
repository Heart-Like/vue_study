<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <!-- <button @click="addFive">值 + 5</button> -->
    <button @click="changeFn">修改标题</button>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    handleAdd (n) {
    //   this.$store.state.count++
    //   console.log(this.$store.state.count)
      // this.$store.commit('addCount')
      // console.log(n)
      this.$store.commit('addCount', n)
    },
    addFive () {
      this.$store.commit('addFive')
    },
    changeFn () {
      this.$store.commit('changeTitle', '黑马程序员')
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}

h2 {
  margin-top: 10px;
}
</style>
