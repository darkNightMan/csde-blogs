

<template>
  <div>
    <Header></Header>
    <mu-container>
      <div class="csde-bannder">
          优秀工程师的成长之路就是一条不断打怪升级之路
      </div>
       
      <div class="container-recommend">
        <h2>推荐文章</h2>
        <div class="recomend-article-list">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>

      <div class="container-article-newlist">
        <h2>最新文章</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </mu-container>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  },
  data () {
    return {
      active: 0
    };
  }
}
</script>
<style lang="less">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
.icon-flex-wrap .mu-button {
  margin: 6px 8px;
}
.csde-bannder{
  border-radius: 10px;
  height: 400px;
  width: 100%;
  margin: 25px 0;
  // background: #2b333b;
  overflow: hidden;
  // background: url('../assets/images/banner.jpeg');
  background-size: cover;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}
.recomend-article-list{
  margin: 10px 0px;
  display: flex;
  a{
    width: 100%;
    height: 150px;
    border-radius: 10px;
    background: #999; // F3F5F3
    display: block;
    margin: 10px 10px;
  }
}
.container-article-newlist{
  margin: 10px 0;
  ul{
    display: grid;
    grid-template-columns: 280px 280px 280px 280px;
    grid-template-rows: 250px 250px ;
    li{
      background: #999;
      border-radius: 10px;
      margin: 10px;
    }
  }
}
</style>
