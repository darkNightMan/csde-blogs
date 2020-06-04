<template>
  <div>
    <mu-container>
      <div class="csde-related-hd">
         <h3>留言板</h3>
         <div class="csde-related-info">
            <p>对于不正当留言，会删除处理。</p>
            <p>1. 欢迎各种留言，技术交流、生活趣事、小说、电影、护肤、以及各种吐槽......</p>
            <p>2. 忌不正当留言，辱骂、不健康、不文明等危险言论。</p>
            <p>做社会主义新时代好青年！！！</p>
         </div>
       </div>
      <div class="csde-comments-wrap">
          <h3>留言 ({{commentsList.count}})</h3>
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
                            <!-- <span>{{child.comment_author}}</span> -->
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
export default {
  fetch ({app}) {

  },
  async asyncData ({ app }) {
    const res = await app.$axios.get('/api/msgComments/treeLits')
    return {
      commentsList: res.data.data
    }
  },
  data () {
    return {
      commentsList: [],
      validateForm: {
        comment_author: '',
        comment_content: '',
        comment_author_email: '',
      }
    };
  },
  methods: {
    async initComments() {
      let { data } = await this.$axios.get('/api/msgComments/treeLits')
      this.commentsList = data.data
    },
    async submitComments () {
      let result = await this.$refs.form.validate()
      if (!result) return
      let { data } = await this.$axios.post('/api/msgComments/createMsg',this.validateForm )
      if (data.code === 200) {
        this.$toast.success('留言成功');
      } else {
         this.$toast.error(data.msg);
      }
      this.$refs.form.clear();
      this.validateForm = {
        comment_author: '',
        comment_content: '',
        comment_author_email: '',
      }
      this.initComments()
    },
  },
}
</script>

<style lang="less" scoped>
  .csde-related-hd{
    padding: 20px;
    // margin: 20px;
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
.csde-comments-wrap{
    padding: 10px;
    background: #fff;
    margin: 10px 0;
    span.iconfont{
      font-size: 32px;
      color: #64b5f6;
    }
    h3{
      text-align: center;
      padding: 10px;
    }
    .comments-from{
      padding: 20px;
    }
    .csde-comments-list{
      .comment-list{
        padding: 20px;
      }
      .comment-list .comments-right {
        padding-left: 10px;
      }
      .comment-list .comment_time{
        font-size: 12px;
        color: #999;
        padding: 0 10px;
      }
      .comment-list .comments-right p {
        padding: 4px;
      }
      .comment-list{
        padding: 40px;
      }
      .comment-list li{
        border-top: 1px solid #f1f1f1;
        padding-bottom: 5px;
      }
      .sub-comment-content-row li{
        background: #fafbfc;
        padding: 20px 35px;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
      }
      .reply-box .reply-btn {
        font-size: 12px;
        margin: 5px;
      }
      .reply-box .delete-btn {
        font-size: 12px;
        margin: 5px;
      }
      .comment-list .comments-root{
        padding: 15px 0px;
        display: flex;
        position: relative;
      }
      .box-card {
        min-height: 500px;
      }
      .attr-list{
        font-size: 12px;
      }
      .title-box{
        display: flex;
        padding: 20px 0px;
      }
      .title-box h2 {
        margin: 0;
        padding-left:20px;
      }
    }
  }
</style>