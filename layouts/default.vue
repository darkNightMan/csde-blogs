<template>
  <div>
    <Header></Header>
    <nuxt/>
    <Footer></Footer>
    <mu-button  v-show="isShow" class="csde-backTop-btn" fab small color="primary" @click="backtop" >
      <mu-icon value="navigation"></mu-icon>
    </mu-button>
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.winScroll, true)
  },
  methods: {
    winScroll (e) {
      this.$nextTick(() => {
        let top = document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset
        if (top > 100) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      })
    },
    backtop (){
      let timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5); 
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if(osTop === 0){
          clearInterval(timer);
        }
      },30)
    }
  }
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.csde-backTop-btn{
  position: fixed !important;
  right: 20px;
  bottom:60px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

