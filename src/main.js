import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载验证插件的初始配置
import './utils/validation'

import './utils/register-vant.js' // 组件
import 'normalize.css' // 样式
import 'amfe-flexible' // REM适配: 动态设置 html 标签字体大小

// 按需注册 Vant 组件 自动按需加载
import {
  Button,
  Cell,
  CellGroup
} from 'vant'

// 加载全局样式
// 把自己的样式引到第三方组件样式后面
import './styles/index.less'

Vue
  .use(Button)
  .use(Cell)
  .use(CellGroup)

Vue.config.productionTip = false

// 注意：所有初始化的起码都应该在 new Vue 根实例之前
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
