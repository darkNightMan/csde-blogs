<template>
    <div>
       <header>
         <mu-appbar style="width: 100%;" color="#fff">
          <mu-row>
            <mu-col span="8">
              <span class="csde-logo"> CSDE.W</span>
            </mu-col>
            <mu-col span="4">
                <mu-row class="header-nav">
                    <mu-col span="2">
                        <nuxt-link to="/">
                          <span class="csde-nav-m" :class="{ 'active' : $route.path === '/'}">
                            首页
                          </span>
                        </nuxt-link>
                    </mu-col>
                    <mu-col span="2">
                        <nuxt-link :to="{path: 'blogs'}">
                          <span class="csde-nav-m" :class="{ 'active' : $route.path === '/blogs' || $route.path === '/articlesDetail'}">
                            博客
                          </span>
                        </nuxt-link>
                    </mu-col>
                    <mu-col span="2">
                        <nuxt-link :to="{path: 'history'}">
                           <span class="csde-nav-m" :class="{ 'active' : $route.path === '/history'}">
                            归档
                          </span>
                        </nuxt-link>
                    </mu-col>
                    <mu-col span="2">
                        <!-- <nuxt-link :to="{path: 'about'}">
                           <span class="csde-nav-m" :class="{ 'active' : $route.path === '/about'}">
                            关于
                          </span>
                        </nuxt-link> -->
                    </mu-col>
                    <mu-col span="2">
                         <nuxt-link :to="{path: 'relatedLinksList'}">
                           <span class="csde-nav-m" :class="{ 'active' : $route.path === '/relatedLinksList'}">
                            友链
                          </span>
                        </nuxt-link>
                    </mu-col>
                    <mu-col span="2">
                        <nuxt-link :to="{path: 'message'}">
                          <span class="csde-nav-m" :class="{ 'active' : $route.path === '/message'}">
                            留言
                          </span>
                        </nuxt-link>
                    </mu-col>
                </mu-row>
            </mu-col>
        </mu-row>
        </mu-appbar>
      </header>
      <div class="csde-header-block"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  created () {
    console.log(this.$route.path)
  }
}
</script>

<style lang="less">
.csde-header-block{
  height: 80px;;
}
header{
  position: fixed;
  top: 0;
  z-index: 1100;
  .csde-logo{
    color: #1e88e5;
  }
  .header-nav{
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    a {
      color: #333;
      cursor: pointer;
      .active{
        color: #2196f3;
        font-weight: bold;
      }
    }
  }
}
</style>