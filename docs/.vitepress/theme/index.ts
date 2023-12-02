import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue';
import './styles/vars.css';
import './styles/custom.css';
import axios from 'axios';
import api from './api/index';
import HomeLayout from './components/layout/HomeLayout.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
	enhanceApp(ctx) {
	  
	  // extend default theme custom behaviour.
	  DefaultTheme.enhanceApp(ctx);

	  // 全局挂载 API 接口
	  ctx.app.config.globalProperties.$http = axios
	  if (typeof window !== 'undefined') {
		(window as any).$api = api;
	  }

      // register your custom global components
	  ctx.app.component('HomeLayout', HomeLayout)
  }
}