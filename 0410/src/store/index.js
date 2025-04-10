// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({
  // 严格模式 有利于初学者，检测不规范的代码
  strict: true,
  // 通过 state可以提供数据
  state: {
    title: '仓库大标题',
    count: 100
  },

  // 2.通过 mutations 可以提供修改数据的方法
  mutations: {
    // 所有mutations函数，第一个参数，都是state
    addCount (state) {
      state.count++
    },
    addFive (state) {
      state.count += 5
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    }
  }
})

// 导出仓库
export default store
