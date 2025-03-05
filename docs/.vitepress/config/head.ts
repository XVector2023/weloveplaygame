import type { HeadConfig } from 'vitepress';
import { metaData } from './constants';

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['meta', { name: 'author', content: 'Jack' }],
  ['meta', { name: 'keywords', content: 'xvector, game, play game' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#3c8772' }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: metaData.locale }],
  ['meta', { property: 'og:title', content: metaData.title }],
  ['meta', { property: 'og:description', content: metaData.description }],
  ['meta', { property: 'og:site', content: metaData.site }],
  ['meta', { property: 'og:site_name', content: metaData.title }],
  ['meta', { property: 'og:image', content: metaData.image }],
  // 腾讯云可观测平台
  // ['script', { src: 'https://tam.cdn-go.cn/aegis-sdk/latest/aegis.min.js' }],
  // ['script', {}, `if (typeof Aegis === 'function') {
  //         var aegis = new Aegis({
  //           id: 'VDzwVHdD1yZgmwrOe9',
  //           reportApiSpeed: true,
  //           reportAssetSpeed: true,
  //           spa: true,
  //         hostUrl: 'https://rumt-zh.com'
  //         });
  // }`],
  // 百度统计代码：https://tongji.baidu.com
  ['script', {}, `var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?171b18de73e4b8ff4f44d9019864a1d2";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();`],
  // 页面访问量统计
  ['script', {}, `
  window.addEventListener('load', function() {
    let oldHref = document.location.href, bodyDOM = document.querySelector('body');
    const observer = new MutationObserver(function(mutations) {
      if (oldHref != document.location.href) {
        oldHref = document.location.href;
        getPv()
        window.requestAnimationFrame(function() {
          let tmp = document.querySelector('body');
          if(tmp != bodyDOM) {
            bodyDOM = tmp;
            observer.observe(bodyDOM, config);
          }
        })
      }
    });
    const config = {
      childList: true,
      subtree: true
    };
    observer.observe(bodyDOM, config);
    getPv()
  }, true);

  function getPv() {
    // xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://api.xvector.cn/pv?pageUrl=' + location.href);
    // xhr.send();
  }`]
];