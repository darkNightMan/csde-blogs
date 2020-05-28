import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css' // 样式文件

export default {
  install (Vue) {
    Vue.directive('highlight', function (el) {
      let blocks = el.querySelectorAll('pre code')
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    })
  }
}
