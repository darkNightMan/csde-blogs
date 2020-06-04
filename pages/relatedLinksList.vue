<template>
  <div>
     <mu-container>
       <div class="csde-related-hd">
         <h3>链接申请说明</h3>
         <p>交换友链可在留言板留言，同时请将本站加入友链  本站友链信息如下：</p>
         <div class="csde-related-info">
            <p>名称 : darkNightMan</p>
            <p>网址: http://www.baidu.com</p>
            <p>图标: https://uploadfile.huiyi8.com/up/25/70/a1/2570a194efbc9fcd2ac7f94530dfe482.jpg</p>
            <p>描述: 假如生活欺骗了你不要悲伤不要心急</p>
         </div>
       </div>
       <div class="csde-related-container clearfix">
          <div class="csde-related-list" v-for="(item, index) in relatedList" :key="index">
            <a :href="item.url">
                <div class="csde-related-link-item">
                    <div class="csde-hd-img">
                      <img :src="item.icon" alt="">
                    </div>
                    <h4>{{item.nick_name}}</h4>
                    <p class="csde-desc">{{item.description}}</p>
                </div>
            </a>
          </div>
       </div>
     </mu-container>
  </div>
</template>

<script>
export default {
   fetch ({app}) {
  },
  async asyncData ({ app }) {
    const res = await app.$axios.get('/api/relatedLink/allList')
    return {
      relatedList: res.data.data
    }
  },
  data () {
    return {
      relatedList: [],
    };
  }
}
</script>

<style lang="less" scoped>
  .csde-related-hd{
    padding: 20px;
    margin: 20px;
    background: #fff;
    .csde-related-info{
      border-left: 3px solid #90caf9;
      background-color: #eee;
      padding: 20px;
      margin: 20px 0;
      p {
        padding: 6px;
        color: #2196f3;
      }
    }
  }
  .csde-related-container{
    .csde-related-list{
      padding: 0 15px;
      margin: 15px 0;
      float: left;
      .csde-related-link-item{
        text-align: center;
        width: 250px;
        border: 1px solid #eee;
        padding: 20px;
        background: #fff;
        &:hover{
          box-shadow: 10px 10px 10px #eee;
        }
        .csde-hd-img{
          display: inline-block;
          width: 45px;
          height: 45px;
          overflow: hidden;
          border-radius: 50%;
          img{
            width: 100%;
          }
        }
        h4 {
          padding: 4px 0;
          font-size: 16px;
          color: #333;
        }
        p {
            padding: 4px 0;
            font-size: 12px;
            color: #999;
        }
        .csde-desc{
          height: 20px;
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          transition: all .3s;
          height: 24px;
        }
      }
    }
  }
</style>