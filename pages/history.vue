<template>
  <div >
    <mu-container>
      <div class="csde-filed-content">
         <mu-stepper  :activeStep="0" orientation="vertical" :linear="false" v-for="(it, index) in filedList" :key="index">
            <mu-step>
              <mu-step-label>
                <mu-icon slot="icon" value="restore" color="#2196f3"></mu-icon>
                <h2> {{it.year}} </h2>
              </mu-step-label>
              <mu-step-content>
                <p v-for="(item, index) in it.data" :key="index">
                  <a :href="url(item.article_id)">{{item.title}}</a>
                </p>
              </mu-step-content>
            </mu-step>
          </mu-stepper>
      </div>
    </mu-container>
  </div>
</template>

<script>
export default {
  fetch ({app}) {

  },
  async asyncData ({ app }) {
    const res = await app.$axios.get('/api/articles/filedList')
    return {
      filedList: res.data.data
    }
  },
  data () {
    return{
      filedList: []
    }
  },
  methods: {
    url (article_id) {
      return `/articlesDetail?article_id=${article_id}`
    }
  }
}
</script>

<style lang="less" scoped>
.mu-step-content.last {
   border-left: 1px solid #bdbdbd; 
}
.csde-filed-content{
  background: #fff;
  padding: 20px;
  p{
    padding: 10px;
    background: #bbdefb;
    margin: 10px 0;
    border-radius: 10px;
    a {
      color: #333;
    }
    &:hover {
      background: #64b5f6;
      cursor: pointer;
    }
  }
}
</style>