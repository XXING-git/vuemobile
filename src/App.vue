<template>
  <div id="app">
    <!-- 根路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ 是 src 目录的别名

export default {
  name: 'App'
}
</script>

<style lang="less">
// 注: 在 style 中使用 @ 别名 需要在前面加 ~
// @ 后面不许有 /
@import url("~@/styles/variables.less");

</style>
