<template>
  <div>
     <mu-container>
       <div class="csde-related-hd">
         <h2>链接申请说明</h2>
         <p>交换友链可在留言板留言，同时请将本站加入友链  本站友链信息如下：</p>
         <div class="csde-related-info">
            <p>名称 : darkNightMan</p>
            <p>网址: http://www.csde.club</p>
            <p>图标: http://www.csde.club/public/uploads/csde_1592474924000.jpeg</p>
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