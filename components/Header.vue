<template>
    <mu-appbar style="width: 100%;" color="primary">
    <!-- <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button> -->
    <mu-row>
      <mu-col span="6">CSDE.W</mu-col>
      <mu-col span="5">
           <mu-row class="header-nav">
              <mu-col span="2">首页</mu-col>
              <mu-col span="2">博客</mu-col>
              <mu-col span="2">归档</mu-col>
              <mu-col span="2">关于</mu-col>
              <mu-col span="2">友链</mu-col>
              <mu-col span="2">留言</mu-col>
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