<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    首页
    <van-button type="success">主要按钮</van-button>



    <van-tabs v-model:active="active" sticky>
      <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>
        <p>内容 {{ index }}</p>

      </van-tab>
    </van-tabs>

    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>
    <p>ccv</p>

  </div>
</template>

<script>

import { Button, Tab, Tabs  } from 'vant';



export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style lang="scss" scoped>

/*
	设计稿750 
	padding-right: px2rem750(20px);
*/
@function px2rem750($px, $base-font-size: 37.5px) {
    @return ($px / $base-font-size / 2) * 1rem;
}

p {
  font-size: px2rem750(50px);
}

</style>