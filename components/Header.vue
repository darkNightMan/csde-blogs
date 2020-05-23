<template>
    <mu-appbar style="width: 100%;" color="primary">
    <!-- <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button> -->
    <mu-row>
      <mu-col span="8">CSDE.W</mu-col>
      <mu-col span="4">
           <mu-row class="header-nav">
              <mu-col span="2"><mu-ripple color="#2d8cf0" :opacity="0.7" class="mu-ripple-menu">首页</mu-ripple></mu-col>
              <mu-col span="2"><mu-ripple color="#2d8cf0" :opacity="0.7" class="mu-ripple-menu">博客</mu-ripple></mu-col>
              <mu-col span="2"><mu-ripple color="#2d8cf0" :opacity="0.7" class="mu-ripple-menu">归档</mu-ripple></mu-col>
              <mu-col span="2"><mu-ripple color="#2d8cf0" :opacity="0.7" class="mu-ripple-menu">关于</mu-ripple></mu-col>
              <mu-col span="2"><mu-ripple color="#2d8cf0" :opacity="0.7" class="mu-ripple-menu">友链</mu-ripple></mu-col>
              <mu-col span="2"><mu-ripple color="#2d8cf0" :opacity="0.7" class="mu-ripple-menu">留言</mu-ripple></mu-col>
          </mu-row>
      </mu-col>
    </mu-row>
  </mu-appbar>

</template>

<script>
export default {

}
</script>

<style>
.header-nav{
  font-size: 14px;
  cursor: pointer;
  text-align: center;
}
</style>