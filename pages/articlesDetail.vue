<template>
  <div>
    <mu-container class="csde-mu-conteiner">
        <div class="csde-article-hd">
          <div class="csde-article-inner">
             <h3><span class="csde-isTop" v-if="articles.is_top">置顶</span> {{articles.title}}</h3>
             <p class="csde-tags-bx"><span class="iconfont icontag"></span>  
               <span style="margin:0 10px"
                  v-for="item in articles.tagsArr"
                  :key="item.tags_name"
                  effect="plain">
                  {{ item.tags_name }}
                </span>
              </p>
             <div class="csde-article-attr">              
                <p>
                  <span class="iconfont iconfenlei-"></span> 
                  {{ articles.class_name}}
                </p>
                <p><span class="iconfont iconshijian"></span> {{articles.create_time}}</p>
                <p><span class="iconfont iconliulan"></span> {{articles.read_count}}</p>
                <p><span class="iconfont iconz-like"></span> {{articles.poll_count}}</p>
                  <p>作者：{{articles.authorName}}</p>
             </div>
          </div>
        </div>
        <div class="csde-article-content">
          <article   v-highlight v-html="compiledMarked(articles.content)"></article>
        </div>
    </mu-container>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  async asyncData ({ app, query }) {
    let article_id = query.article_id
    const res = await Promise.all([
      app.$axios.get('/api/articles/detail' ,{params: { article_id:  article_id}}), 
      app.$axios.get('/api/articlesComment/list', {params: { article_id: article_id }})
    ])
    debugger
    return {
      articles: res[0].data.data,
      comments: res[1].data.data
    }
  },
  data() {
    return {
      articles: [],
      comments: []
    }
  },
  methods: {
    compiledMarked() {
      return marked(this.articles.content ? this.articles.content : '', { sanitize: true })
    }
  }
}
</script>

<style lang="less">
.csde-mu-conteiner{
  padding: 10px;
  .csde-article-hd{
    padding: 0 20px;
    background: #fff;
    .csde-isTop{
      color: crimson;
      border: 1px solid crimson;
      padding: 0 2px;
      border-radius: 4px;
    }
    .csde-tags-bx{
      padding: 6px 0;
      color: #999;
    }
    .csde-article-inner{
      border-bottom: 1px solid #eee;
      padding: 15px 0px;
      h3 {
        width: 90%;
      }
      .csde-article-attr{
        display: flex;
        p {
         margin-right: 10px;
         width: 100%;
         color: #999;
         span {
           vertical-align: middle;
         }
        }
      }
    }
}
  .csde-article-content{
    min-height: 500px;
    width: 100%;
    background: #fff;
    padding: 15px;
  }
}

</style>