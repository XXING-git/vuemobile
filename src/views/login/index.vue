<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="QQ" />

    <!-- 登录表单 -->
    <van-cell-group>
      <van-field left-icon="contact" placeholder="请输入用户名" />

      <van-field placeholder="请输入验证码" left-icon="contact" />
    </van-cell-group>

    <!-- 登录按钮 -->
    <div class="login-btn-wrap">
      <van-button type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}
</script>

<style scoped lang="less">
.login-container {
  .login-btn-wrap {
    padding: 27px 16px;
    .van-button {
      width: 100%;
      background: #6db4fb;
    }
  }
}

</style>
