

<template>
  <div >
    <div class="csde-banner-container">
      <div class="csde-mask-ct" style="background-image:url(http://bpic.588ku.com/back_pic/05/72/85/815bc165bd81787.jpg%2)"> </div>
      <mu-container>
        <div class="csde-bannder">
          <h2>优秀工程师的成长之路就是一条不断打怪升级之路</h2>
          <img src="http://bpic.588ku.com/back_pic/05/72/85/815bc165bd81787.jpg%21r850/fw/800" alt="优秀工程师的成长之路就是一条不断打怪升级之路">
        </div>
      </mu-container>
    </div>
    <div class="wrap-recommend">
        <mu-container>
          <div class="container-recommend">
            <h2>推荐文章</h2>
            <div class="recomend-article-list">   
              <nuxt-link :to="{name: 'articlesDetail', query: {article_id: item.article_id}}"  v-for="(item, index) in recommendaList" :key="index">
                <div class="csde-img-blog">
                  <img :src="item.cover_url"/>
                </div>
                <h4>{{item.title}}</h4>
                <mu-row>
                    <mu-col span="6"><span>分类 {{item.class_name}}</span></mu-col>
                    <mu-col span="6"><span> <span class="iconfont iconliulan"></span> {{item.read_count}}</span></mu-col>
                </mu-row>
              </nuxt-link>
            </div>
          </div>
       </mu-container>
    </div>
    <div class="warp-article-newlist">
        <mu-container>
          <div class="container-article-newlist">
            <h2>最新文章</h2>
            <ul>
              <li v-for="(item, index) in articlesNes" :key="index">
              <nuxt-link :to="{name: 'articlesDetail', query: {article_id: item.article_id}}">
                  <div class="csde-img-blog">
                    <img :src="item.cover_url"/>
                  </div>
                  <h4>{{item.title}}</h4>
                  <mu-row>
                      <mu-col span="6"><span>分类 {{item.class_name}}</span></mu-col>
                      <mu-col span="6"><span><span class="iconfont iconliulan"></span> {{item.read_count}}</span></mu-col>
                  </mu-row>
                </nuxt-link>
              </li>
            </ul>
          </div>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
  fetch ({app}) {
  },
  async asyncData ({ app }) {
    const res = await Promise.all([app.$axios.get('/api/articles/recommenda'),app.$axios.get('/api/articles/articlesNew')])
    return {
      recommendaList: res[0].data.data,
      articlesNes: res[1].data.data
    }
  },
  data () {
    return {
      recommendaList: [],
      articlesNes: []
    };
  }
}
</script>
<style lang="less" >
.csde-banner-container {
  position: relative;
  .csde-mask-ct{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background: crimson;
    filter: blur(90px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='90');
    overflow: hidden;
    height: 200px;
    opacity: 0.3;
    z-index: -1;
    img {
      width: 100%;
    }
  }
}
.csde-bannder{
  position: relative;
  border-radius: 10px;
  height: 400px;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  width: 100%;
  font-size: 32px;
  text-align: center;
  color: #fff;
  line-height: 400px;
	background: linear-gradient(135deg,rgba(82, 126, 248, 0.8) 0,rgba(9, 112, 230, 0.8) 100%);
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  img {
    width: 100%;
  }
  h2 {
    position: absolute;
    top: 15px;
    width: 100%;
    text-align: center;
    font-size: 32px;
  }
}
.wrap-recommend{
  background: #eee;
  padding: 20px 0;
  margin-top: 20px;
  .container-recommend{
    .recomend-article-list{
      margin: 10px 0px;
      display: flex;
      a{
        width: 100%;   
        display: block;
        margin: 10px 10px;
        &:hover{
          h4{
            color: #F20D0D !important;
          }
        }
        h4 {
          color: #07111B;
          font-size: 16px;
          font-weight: bold;
          line-height: 24px;
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          transition: all .3s;
          height: 24px;
        }
        .csde-img-blog{
          width: 100%;
          height: 110px;
          margin-bottom: 10px;
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 100%;
            border: none;
          }
        }
        span{
          font-size: 12px;
          color: #9199A1;
          line-height: 18px;
          margin-top: 4px;
          font-weight: 400;
        }
      }
    }
  }
}
.warp-article-newlist{
   padding: 20px 0;
  .container-article-newlist{
    ul{
      display: grid;
      grid-template-columns: 280px 280px 280px 280px;
      grid-template-rows: 250px 250px ;
      li{
        margin: 10px;
        a {
          width: 100%;   
          display: block;
        }
        &:hover{
          h4{
            color: #F20D0D !important;
          }
        }
        .csde-img-blog{
          margin-bottom: 10px;
          overflow: hidden;
          border-radius: 10px;
          height: 140px;
          img{
            width: 100%;
          }
        }
        span{
          font-size: 12px;
          color: #9199A1;
          line-height: 18px;
          margin-top: 4px;
          font-weight: 400;
        }
        h4 {
          color: #07111B;
          font-size: 16px;
          font-weight: bold;
          line-height: 24px;
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          transition: all .3s;
           height: 24px;
          &:hover{
            color: #F20D0D !important;
          }
        }
      }
    }
  }
}
</style>
