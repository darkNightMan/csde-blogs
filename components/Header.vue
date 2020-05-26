<template>
    <header>
        <mu-appbar style="width: 100%;" color="#2b333b">
          <mu-row>
            <mu-col span="8">CSDE.W</mu-col>
            <mu-col span="4">
                <mu-row class="header-nav">
                    <mu-col span="2">
                        <nuxt-link to="/">
                          首页
                        </nuxt-link>
                    </mu-col>
                    <mu-col span="2">
                        <nuxt-link :to="{name: 'blogs'}">
                          博客
                        </nuxt-link>
                    </mu-col>
                    <mu-col span="2">
                        <nuxt-link :to="{name: 'list'}">
                          归档
                        </nuxt-link>
                    </mu-col>
                    <mu-col span="2">
                      关于
                    </mu-col>
                    <mu-col span="2">
                      <nuxt-link :to="{name: 'link'}">
                        友链
                      </nuxt-link>
                    </mu-col>
                    <mu-col span="2">
                      <nuxt-link :to="{name: 'messgs'}">
                        留言
                      </nuxt-link>
                    </mu-col>
                </mu-row>
            </mu-col>
        </mu-row>
      </mu-appbar>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="less">
header{
  position: fixed;
  top: 0;
  z-index: 1100;
  .header-nav{
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    a {
      color: #fff;
    }
  }
}
</style>