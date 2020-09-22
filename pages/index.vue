

<template>
  <div >
    <div class="csde-banner-container">
      <div class="csde-mask-ct" style="background-image:url(http://bpic.588ku.com/back_pic/05/72/85/815bc165bd81787.jpg%2)"> </div>
      <mu-container>
        <div class="csde-bannder">
          <h2>欢迎来到csde.wang的个人网站({{this.$store.state.article.counter}})</h2>
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
  async asyncData ({ app, store }) {
    store.commit('increment')
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
  },
  created () {
    // this.$store.commit('increment')
  }
}
</script>
