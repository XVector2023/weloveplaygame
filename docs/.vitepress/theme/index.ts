import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue';
import './styles/vars.css';
import './styles/custom.css';
import axios from 'axios';
import api from './api/index';
import HomeLayout from './components/layout/HomeLayout.vue'
// 引入Aegis进行初始化
import Aegis from 'aegis-web-sdk';

export default {
  ...DefaultTheme,
  Layout: MyLayout,
	enhanceApp(ctx) {
	  
	  // extend default theme custom behaviour.
	  DefaultTheme.enhanceApp(ctx);

	  // 埋点注入
	  const aegis = new Aegis({
		id: 'VDzwVHdD1yZgmwrOe9', // 上报 id
		uin: 'xxx', // 用户唯一 ID（可选）
		reportApiSpeed: true, // 接口测速
		reportAssetSpeed: true, // 静态资源测速
		spa: true, // spa 应用页面跳转的时候开启 pv 计算
		hostUrl: 'https://rumt-zh.com'
	  });

	  // 全局挂载 API 接口
	  ctx.app.config.globalProperties.$http = axios
	  if (typeof window !== 'undefined') {
		(window as any).$api = api;
	  }

      // register your custom global components
	  ctx.app.component('HomeLayout', HomeLayout)
  }
}