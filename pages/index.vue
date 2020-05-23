

<template>
  <Header></Header>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  },
  data () {
    return {
      active: 0
    };
  }
}
</script>
<style lang="less">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
.icon-flex-wrap .mu-button {
  margin: 6px 8px;
}
</style>
