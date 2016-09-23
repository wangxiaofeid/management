<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="mainContainer">
      <div class="pageContainer">
        <div class="pageLeft">
          <side-bar></side-bar>
        </div>
        <div class="pageContent">
          <div class="pageInner">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import navBar from './comment/navBar'
import sideBar from './comment/sideBar'
import footerBar from './comment/footerBar'
import store from './vuex/store'

export default {
  components: {
    navBar,
    sideBar,
    footerBar
  },
  store
}
</script>


<style lang="less" src="./less/index.less"></style>
<style lang="less">
  @import '~bootstrap/less/bootstrap.less';
</style>
<style lang="css">@import '~prismjs/themes/prism-coy.css'</style>
<style lang="scss">
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';
</style>
<style lang="less">
.mainContainer{
  padding-top: 86px;
  background: #F4F4F4;
  .pageContainer{
    width: 1200px;
    margin: 0 auto;
    min-height: 100%;
    background: white;
    padding-bottom: 20px;
    border-radius: 4px;
    min-height: 700px;
    .pageLeft{
      width: 220px;
      float: left;
      font-size: 14px;
      padding-top: 16px;
    }
    .pageContent{
      padding-top: 20px;
      margin-left: 220px;
      min-height: 700px;
    }
    .pageInner{
      border-left: 1px solid #f3f3f3;
      padding-left: 40px;
      padding-top: 0px;
      min-height: 700px;
    }
  }
}
</style>
