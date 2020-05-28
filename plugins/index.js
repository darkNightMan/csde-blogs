import Vue from 'vue';
import MuseUI from 'muse-ui';
import NProgress from 'muse-ui-progress';
import hightLight from '../utils/hightLight'
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-progress/dist/muse-ui-progress.css';
Vue.use(MuseUI)
Vue.use(hightLight)
Vue.use(NProgress, {
  zIndex: 2000,          // progress z-index
  top: 0,                // position fixed top
  speed: 300,            // progress speed
  color: '#f44336',      // color
  size: 3,               // progress size
  className: '' 
})