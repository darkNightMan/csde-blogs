<template>
  <div>
    <mu-container class="csde-mu-conteiner">
      <div class="csde-article-hd">
        <div class="csde-article-inner">
            <h3><span class="csde-isTop" v-if="articles.is_top">置顶</span> {{articles.title}}</h3>
            <p class="csde-tags-bx"><span class="iconfont icontag"></span>  
              <span style="margin:0 4px; background:#eee; padding:2px 4px; border-radius:4px"
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
              <!-- <p><span class="iconfont iconz-like"></span> {{articles.poll_count}}</p> -->
                <p>作者：{{articles.authorName}}</p>
            </div>
        </div>
      </div>
      <div class="csde-article-banner">
        <img :src="articles.cover_url">
      </div>
      <div class="csde-article-content">
        <article   v-highlight v-html="compiledMarked(articles.content)"></article>
      </div>
    </mu-container>
    <mu-container>
      <div class="csde-comments-wrap">
          <h3>评论 ({{commentsList.count}})</h3>
          <div class="comments-from">
             <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                <mu-row gutter>
                    <mu-col span="6">
                      <mu-form-item label="用户名"  prop="comment_author" :rules="[{ validate: (val) => !!val, message: '必须填写用户名'}]">
                          <mu-text-field v-model="validateForm.comment_author" prop="comment_author"></mu-text-field>
                      </mu-form-item>
                    </mu-col>
                    <mu-col span="6">
                       <mu-form-item label="邮箱" prop="comment_author_email" :rules="[{ validate: (val) => !!val, message: '必须填写邮箱'}]">
                          <mu-text-field v-model="validateForm.comment_author_email" prop="comment_author_email"></mu-text-field>
                      </mu-form-item>
                    </mu-col>
                  </mu-row>
                  <mu-form-item label="评论" prop="comment_content" :rules="[{ validate: (val) => !!val, message: '必须填评论内容'}]">
                    <mu-text-field v-model="validateForm.comment_content" prop="comment_content"></mu-text-field>
                  </mu-form-item>
                  <mu-form-item>
                    <mu-button color="primary" @click="submitComments">发表</mu-button>
                  </mu-form-item>
              </mu-form>
          </div>
          <div class="csde-comments-list">
              <ul class="comment-list">
                <li v-for="(item) in commentsList.comments" :key="item.comment_id">
                  <div class="comments-root">
                    <mu-avatar :size="32" v-if="item.userInfo">
                      <img :src="item.userInfo.avatar">
                    </mu-avatar>
                    <span v-else class="iconfont icontouxiang-"></span>
                    <div class="comments-right">
                        <p>
                          <span>{{item.comment_author}}</span>
                          <span class="comment_time">{{item.comment_time}}</span>
                        </p>
                        <p>{{item.comment_content}}</p>
                        <p class="reply-box">
                          <!-- <mu-button flat color="primary" @click="commentIndex=item.comment_id,commetForms.comment_content =`@${item.comment_author} `">回复</mu-button>                       -->
                        </p>
                        <!-- <div class="comment-textarea" v-if="commentIndex === item.comment_id">
                          <el-form :model="commetForm" ref="commetForm"  class="demo-ruleForm">
                            <el-form-item  prop="comment_content" >
                              <el-input type="textarea"  resize="none"  style="width:400px"  :rows="3" v-model="commetForms.comment_content" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button size="mini" type="primary" @click="submitComments(item.comment_id)">发送</el-button>
                              <el-button size="mini"  @click="commentIndex= null">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </div> -->
                    </div>
                  </div>
                  <ul class="sub-comment-content-row">
                    <li v-for="child in item.childComments" :key="child.comment_id">
                       <mu-avatar :size="32" v-if="child.userInfo">
                          <img :src="child.userInfo.avatar">
                        </mu-avatar>
                        <span v-else class="iconfont icontouxiang-"></span>
                        <div  class="comments-right">
                          <p>
                            <span>{{child.comment_author}}</span>
                            <span  class="comment_time">{{child.comment_time}}</span>
                          </p>
                          <p>{{child.comment_content}}</p>
                          <p class="reply-box">
                             <!-- <mu-button flat color="primary" @click="commentIndex=child.comment_id, commetForms.comment_content =`@${child.comment_author} `">回复</mu-button>                           -->
                          </p>
                          <!-- <div class="comment-textarea" v-if="commentIndex === child.comment_id">
                            <el-form :model="commetForm" ref="commetForm"  class="demo-ruleForm">
                              <el-form-item    prop="comment_content" >
                                <el-input type="textarea"  resize="none"  style="width:400px"  :rows="3" v-model="commetForms.comment_content" autocomplete="off"></el-input>
                              </el-form-item>
                              <el-form-item>
                                <el-button size="mini" type="primary" @click="submitComments(child.comment_id)">发送</el-button>
                                <el-button size="mini" @click="commentIndex= null">取消</el-button>
                              </el-form-item>
                            </el-form>
                          </div> -->
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
          </div>
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
      app.$axios.get('/api/articles/detail' ,{ params: { article_id:  article_id}}), 
      app.$axios.get('/api/articlesComment/list', { params: { article_id: article_id}})
    ])
    return {
      articles: res[0].data.data,
      commentsList: res[1].data.data,
      article_id: article_id
    }
  },
  data() {
    return {
      articles: [],
      commentsList: [],
      validateForm: {
        comment_author: '',
        comment_content: '',
        comment_author_email: '',
      }
    }
  },
  methods: {
    compiledMarked() {
      return marked(this.articles.content ? this.articles.content : '')
    },
    async initComments() {
      let { data } = await this.$axios.get('/api/articlesComment/list', { params: { article_id: this.$route.query.article_id}})
      this.commentsList = data.data
    },
    async submitComments () {
      let formComment = Object.assign(this.validateForm, {article_id: this.$route.query.article_id})
      let result = await this.$refs.form.validate()
      if (!result) return
      let { data } = await this.$axios.post('/api/articlesComment/create',formComment )
      if (data.code === 200) {
        this.$toast.success('评论成功');
      }
      this.$refs.form.clear();
      this.validateForm = {
        comment_author: '',
        comment_content: '',
        comment_author_email: '',
      }
      this.initComments()
    },
  }
}
</script>

<style >
.csde-article-content img{
  width: 100% !important; 
}
</style>
