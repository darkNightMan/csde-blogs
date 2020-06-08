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