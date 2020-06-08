<template>
    <div class="csde-header">
       <header>
         <mu-appbar style="width: 100%;" color="#fff">
          <mu-row>
            <mu-col span="8">
              <nuxt-link to="/">
                <span class="csde-logo"> CSDE.W</span>
              </nuxt-link>
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
                        <nuxt-link :to="{path: 'archives'}">
                           <span class="csde-nav-m" :class="{ 'active' : $route.path === '/archives'}">
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
                <mu-button icon slot="left" class="csde-menu-btn"  @click="open = !open">
                    <mu-icon value="menu" color="#2196f3"></mu-icon>
                </mu-button>
            </mu-col>
        </mu-row>
        </mu-appbar>
      </header>
      <mu-drawer class="csde-menu-fixed" :open.sync="open" :docked="docked" :right="position === 'right'">
          <mu-list>
            <mu-list-item button  to="/">
              <mu-list-item-title>
                  <span class="csde-nav-m" :class="{ 'active' : $route.path === '/'}">
                    首页
                  </span>
              </mu-list-item-title>
            </mu-list-item>

            <mu-list-item button :to="{path: 'blogs'}" @click="open= false">
              <mu-list-item-title >
                  <span class="csde-nav-m" :class="{ 'active' : $route.path === '/blogs' || $route.path === '/articlesDetail'}">
                    博客
                  </span>
              </mu-list-item-title>
            </mu-list-item>

           <mu-list-item button :to="{path: 'archives'}" @click="open= false">
              <mu-list-item-title>
                  <span class="csde-nav-m" :class="{ 'active' : $route.path === '/archives'}">
                    归档
                  </span>
              </mu-list-item-title>
            </mu-list-item>
           
            <mu-list-item button :to="{path: 'relatedLinksList'}" @click="open= false">
              <mu-list-item-title>
                  <span class="csde-nav-m" :class="{ 'active' : $route.path === '/relatedLinksList'}">
                    友链
                  </span>
              </mu-list-item-title>
            </mu-list-item>
             <mu-list-item button :to="{path: 'message'}" @click="open= false">
              <mu-list-item-title>
                  <span class="csde-nav-m" :class="{ 'active' : $route.path === '/message'}">
                    留言
                  </span>
              </mu-list-item-title>
            </mu-list-item> 
          </mu-list>
      </mu-drawer>
      <div class="csde-header-block"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      position: 'right',
      open: false,
      docked: false,
    }
  },
  created () {
    console.log(this.$route.path)
  }
}
</script>

<style lang="less">

</style>