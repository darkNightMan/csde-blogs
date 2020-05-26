<template>
  <div class="csde-blogs-wrap">
     <mu-container class="csde-container-wrap">
       <div class="csde-left-box">
         <div class="search-content">
          文章总数（150）
        </div>
        <ul>
          <li>
            <a href="#">
              <img src="https://img4.sycdn.imooc.com/szimg/5a24c8840001af4405400300-240-180.jpg"/>
            </a>
            <div>
                <p>
                  <span class="csde-class">分类：</span> 
                    node
                    <span class="csde-time">时间 : 2017-10-10</span>
                  </p>
                <h2>nodejs 全栈开发你值得拥有3nodejs 全栈开发你值得拥有3</h2>
                <p>标签 mysql nodes java</p>
                <p>
                  <span>浏览 100 </span>
                  <span>评论100 </span>
                  <span>点赞 100</span>
                </p>
            </div>
          </li>
        </ul>
       </div>
       <div class="csde-right-box">

       </div>
     </mu-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.csde-blogs-wrap{
  margin-top: 80px;
  .csde-container-wrap{
    .csde-left-box{
      width: 800px;
      float: left;
      .search-content{
        padding: 15px 25px;
        background: #fff;
        border-bottom: 1px solid #f3f5f6;
      }
      ul {
        li {
          margin: 0 auto;
          background: #fff;
          padding: 16px;
          padding-bottom: 16px;
          box-sizing: border-box;
          position: relative;
          border-bottom: 1px solid rgba(43,51,59,.1);
          line-height: 1;
          width: 100%;
          display: flex;
          p {
            padding: 8px 0;
            color: #9199A1;
            font-size: 14px;
          }
          .csde-class{
            font-weight: 500;
            color: #b71ed7;
          }
          .csde-time{
            float: right;
            font-size: 12px;
          }
          h2 {
             color: #07111B;
            font-size: 18px;
            font-weight: bold;
            line-height: 20px;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            transition: all .3s;
            height: 20px;
          }
          a {
            display: block;
            img {
              width: 120px;
              height: 110px;
            }
          }
          div {
            padding: 0 0px 0 20px;
            width: 100%;
          }
        }
      }
    }
  }
  .csde-right-box{
      width: 300px;
      height: 800px;
      background: #eee;
      float: right;
    }
    &:after {
       content: '';
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
}
</style>