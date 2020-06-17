<template>
  <div>
      <mu-container>
        <div class="csde-container">
          <h2>前言</h2>
          <p>
              纸上得来终觉浅 绝知此事要躬行,这是我学习编程最深的感悟。 在掌握一技术过程中需要不断学习去实践 实践之后然后去总结, 这也许就是学习的过程吧, 时间总会把我们的记忆一点一点带走。 
              我也不认为自己能把所以的事情都能记在自己的脑子里面，这样是想自己开发的一个博客的原因之一，一直以来也很想自己写一个自己的博客 记录学习过程中的点点滴滴
              同时可以记录生活中的故事， 奈何生活中各种原因 总是会让你 望而停滞 我想每个人都有各自的原因吧。 所以这次也是决定写一个博客网站吧 完成多年前前想法-。-, 
              本站前后端开发差不多花费了2个多月的时间 都是平时晚上下班挤挤时间出来弄的 当然也有许多不足地方后续慢慢优化。如果有喜欢本站风格源码的小伙伴可以在页面底部点击下载下来学习研究。
          </p>
          <h2>关于本站</h2>
          <h3>前端前台界面技术选型：vue + nuxt + Muse ui</h3>
          <p>前台博客页面搭建使用了  为了继续使用vue 基建来开发前台页面  考虑到seo的问题 这里采用 nuxt 框架 来进行 SSR 服务端渲染 </p>
          <h3>前端后台界面 技术选型：vue + element ui </h3>
          <h3>后端接口开发 技术选型：node + express </h3>
          <h3>api接口文档 使用 apidoc 通过配置自动生成接口文档地址 </h3>
          <h2>网站截图</h2> 
          <h2>源码下载</h2> 
        </div>
      </mu-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.csde-container{
  background: #fff;
  padding: 20px;
  h2 {
    margin: 10px 0;
    padding-left: 4px;
    position: relative;
    &:after {
     content: '';
     height: 15px;
     position: absolute;
     top: 5px;
     left: -5px;
     display: block;
     width: 2px;
     background: #64b5f6;
    }
  }
}
</style>