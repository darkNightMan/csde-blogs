<template>
  <div>
      <mu-container>
        <div class="csde-container">
          <h2>前言</h2>
          <p>
              纸上得来终觉浅 绝知此事要躬行,这是我学习编程最深的感悟。 在掌握一技术过程中需要不断学习去实践 实践之后然后去总结, 这也许就是学习的过程吧, 时间总会把我们的记忆一点一点带走。 
              我也不认为自己能把所以的事情都能记在自己的脑子里面，用博客来存储无尽的知识，这样是想自己开发的一个博客的原因之一，一直以来也很想自己写一个自己的博客 记录学习过程中的点点滴滴
              同时可以记录生活中的故事， 奈何生活中各种原因 总是会让你 望而停滞 我想每个人都有各自的原因吧。 所以这次也是决定写一个博客网站吧 完成多年前前想法-。-, 
              本站前后端开发差不多花费了2个多月的时间 都是平时晚上下班挤挤时间出来弄的 当然也有许多不足地方后续慢慢优化。
              如果有喜欢本站风格源码的小伙伴可以在页面底部点击进行下载 <b>部分资源来源于网络源码仅供学习参考，切勿用于商业目的。</b>
          </p>
          <h2>关于本站</h2>
          <h3>博客前台界面 技术选型：vue + nuxt + Muse ui</h3>         
          <h3>后台系统界面 技术选型：vue  + element ui </h3>
          <h3>后端接口开发 技术选型：node + express + redis + mysql + sequelize </h3>
          <h3>api接口文档 使用 apidoc 通过配置自动生成接口文档地址 </h3>
          <p>后台管理系统 主要分2个模块 权限管理 + 博客管理 权限管理基于RBAC表模型的用户权限设计 用户-角色-权限, 权限及为角色的集合 用户可以拥有多个角色 不同角色可以定义不同权限模块。
            其次就是在这个模型基础多加了一个博客管理模块, 站点前后台端开发均使用前后端分离的方式 接口校验通过token验证机制 用redis进行用户信息存储以及过期处理，部署方式在服务器上通过ngxin配置来进行接口反向代理。 
            博客主要功能可以发布个人 文章 编辑 删除 发表 回复评论 删除回话评论 等等。 前台博客页面搭建使用了 为了继续使用vue 框架来开发前台页面 考虑到seo的问题 这里采用 nuxt 框架来进行 SSR 服务端渲染。 </p>
          <h2>展示效果</h2>         
          <div class="csde-img-wrapper">
            <img src="../assets/images/admin/1.png"/>
            <img src="../assets/images/admin/2.png"/>
            <img src="../assets/images/admin/3.png"/>
            <img src="../assets/images/admin/4.png"/>
            <img src="../assets/images/admin/5.png"/>
          </div>
          <h2>源码下载</h2> 
              <div class="csde-card-item">
                  <h3>需要源码请联系</h3>
                  <p>联系方式: 39604192@qq.com</p>
              </div>
          <div class="csde-appreciation">
              <span class="csde-appre-btn">赏
                  <div class="csde-qr-code">
                    <img src="../assets/images/admin/zfb.png"/>
                  </div>
              </span>
          </div>
        </div>
      </mu-container>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped lang="less">

</style>