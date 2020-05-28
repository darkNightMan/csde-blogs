<template>
  <div class="csde-blogs-wrap">
     <mu-container>
       <div class="csde-container-wrap">
          <div class="csde-left-box">
            <div class="search-content">
              <span class="iconfont icon24"></span> 文章总数 ({{blogList.totalCount}}) 
              <span class="csde-class-hdname" v-show="className">当前分类: {{className}}</span>
            </div>
            <ul>
              <li v-for="(item, index) in blogList.list" :key="index">
                <nuxt-link  :to="{name: 'articlesDetail', query: {article_id: item.article_id}}">
                  <img :src="item.cover_url"/>
                </nuxt-link>
                <div>
                    <p>
                      <span class="csde-class">分类：</span> 
                        {{item.article_class.class_name}}
                        <span class="csde-time">
                            <span class="iconfont iconshijian"></span>
                            {{ item.create_time}}
                        </span>
                      </p>
                    <h2> {{item.title}}</h2>
                    <p class="csde-tags-p"> 
                      <span class="iconfont icontag"></span>
                      <span class="tags-list" v-for="(it, index) in item.tagsArr" :key="index">
                        {{it.tags_name}}
                      </span>
                    </p>
                    <p class="csde-cloume-attr">
                      <span class="csde-icons"><span class="iconfont iconliulan"></span> {{item.read_count}} </span>
                      <span class="csde-icons"><span class="iconfont iconjianyi"></span>1500 </span>
                      <span class="csde-icons"><span class="iconfont iconz-like"></span>  {{item.poll_count}}</span>
                    </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="csde-right-box">
            <div class="csde-article-box">
              <div class="csde-article-class-hd"><span class="iconfont iconfenlei-"></span> 分类</div>
              <ul class="csde-class-list">
                <li v-for="(item, index) in blogClassList.list" :key="index" @click="getclassArticles(item)" :style="{ color: queryParam.class_id === item.id ?  'crimson': '' }">
                    {{item.class_name}}
                    <span class="csde-class-num">{{item.article.length}}</span>
                 </li>
              </ul>
            </div> 

             <div class="csde-article-box">
              <div class="csde-article-class-hd"><span class="iconfont icontag"></span> 标签</div>
              <div class="csde-tags-list">
                  <mu-chip v-for="(item, index) in blogTagsList.list"  :color="Chips[Math.floor(Math.random()*6+1)]" :key="index" class="csde-tags-chip"> 
                    {{item.tags_name}}  
                  </mu-chip>      
              </div>
            </div>   
          </div>   
       </div>  
        <div class="csde-pagination-box">
           <mu-pagination @change="changePage" class="csde-pagination" raised  circle :total="blogList.totalCount" :current.sync="blogList.currentPage"></mu-pagination>
        </div> 
     </mu-container>
  </div>
</template>

<script>
export default {
  async asyncData({app}) { 
    const res = await Promise.all([app.$axios.get('/api/articles/list'),app.$axios.get('/api/articlesClass/list'), app.$axios.get('/api/articlesTags/list')])
    let { data } = res
    return {
      blogList: res[0].data.data,
      blogClassList: res[1].data.data,
      blogTagsList: res[2].data.data,
      queryParam: {
        page: 1,
        pageSize: 10,
        class_id: '',
        currentPage: 1
      },
    }
  },
  data() {
    return {
      blogList: [],
      blogClassList:[] ,
      blogTagsList: [],
      className: '',
      Chips: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      current: 1
    }
  },
  methods: {
    async init () {
     this.$progress.start()
      let res = await this.$axios.get('/api/articles/list', { params: this.queryParam })
      let { data, code } = res
      if (data.code === 200) {
        this.blogList = data.data
      }
      this.$progress.done()
    },
    changePage (page) {
      this.queryParam.page = page
      this.init()
      this.backtop()
    },
    getclassArticles (row) {
      this.className = row.class_name
      this.queryParam.page = 1
      this.queryParam.class_id = row.id
      this.init()
      this.backtop()
    },
    showbtn(){
      let that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop
    },
    backtop (){
      let timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5); 
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if(osTop === 0){
          clearInterval(timer);
        }
      },30)
    }
  }
}
</script>

<style lang="less">
.csde-blogs-wrap{
  .csde-pagination-box{
    padding: 20px 20px 20px 0;
    width: 800px;
    .csde-pagination{
      margin: 0 auto;
    }
  }
  .csde-container-wrap{
     &:after {
      content: '';
      height: 0;
      line-height: 0;
      display: block;
      visibility: hidden;
      clear: both;
    }
    .csde-left-box{
      width: 800px;
      float: left;
      .search-content{
        padding: 15px 15px;
        background: #fff;
        border-bottom: 1px solid #f3f5f6;
      }
      .csde-class-hdname{
        float: right;
        padding-right: 20px;
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
            color: #9199A1;
            font-size: 14px;
            .iconfont{
              vertical-align: middle;
            }
          }
          .csde-tags-p{
            margin-top: 15px;
          }
          .csde-cloume-attr{
                margin-top: 15px;
             .csde-icons{
                 margin: 0 30px 0 0px;
                .iconfont {
                  margin-left: 4px;
                  vertical-align: middle;
                }
             }
          }
          .csde-class{
            font-weight: 500;
            color: #b71ed7;
          }
          .csde-time{
            float: right;
            padding-left: 10px;
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
            margin: 15px 0; 
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
    .csde-right-box{
      width: 300px;
      float: right;
      .csde-article-box{
        margin-bottom: 20px;
        .csde-article-class-hd{
          padding: 15px 15px;
          background: #fff;
          border-bottom: 1px solid #f3f5f6;
        }
        .csde-class-list{
          background: #fff;
          li {
            padding: 10px 20px;
            cursor: pointer;
            .csde-class-num{
              float: right;
              color: #999;
            }
            &:hover{
              color: crimson;
            }
          }
        }
        .csde-tags-list{
          background: #fff;
          .csde-tags-chip{
            margin: 10px 12px;
          }
        }
      }
    }
  }
}
</style>