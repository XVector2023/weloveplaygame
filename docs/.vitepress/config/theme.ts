import type { DefaultTheme } from 'vitepress';
import { nav } from './nav';
import { sidebar } from './sidebar';
import { algoliaSearchOptions } from './search/algolia-search';
import { localSearchOptions } from './search/local-search';

export const themeConfig: DefaultTheme.Config = {
	nav, // 导航栏配置
	sidebar, // 侧边栏配置

	logo: '/img/svg/logo.svg',
	outline: {
		level: 'deep', // 右侧大纲标题层级
		label: 'Directory', // 右侧大纲标题文本配置
	},
	darkModeSwitchLabel: 'light/dark',
	sidebarMenuLabel: 'Article',
	returnToTopLabel: 'back to top',
	// 文档页脚文本配置
	docFooter: {
		prev: 'Previous',
		next: 'Next'
	},
	// 编辑链接配置
	// editLink: {
	// 	pattern: 'https://gitee.com/-/ide/project/new_delta/xvector-portal/edit/master/-/docs/:path',
	// 	text: '不妥之处，敬请雅正'
	// },
	// 搜索配置（二选一）
	search: {
		// provider: 'algolia',
		// options: algoliaSearchOptions,
		// 本地离线搜索
		provider: 'local',
		options: localSearchOptions
	},
	// 导航栏右侧社交链接配置
	// socialLinks: [
		// { icon: 'github', link: 'https://gitee.com/new_delta/xvector-portal' },
		// {
		// 	icon: {
		// 		svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
		// 	},
		// 	link: 'https://gitee.com/new_delta/xvector-portal'
		// },
	// ],

	// 自定义扩展: 文章元数据配置
	// @ts-ignore
	articleMetadataConfig: {
		author: 'xvector', // 文章全局默认作者名称
		authorLink: '/about/me', // 点击作者名时默认跳转的链接
		showViewCount: true, // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
	},
	// 自定义扩展: 文章版权配置
	copyrightConfig: {
		license: 'CC BY-SA 4.0',
		licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/'
	},
	// 自定义扩展: 评论配置
	commentConfig: {
		type: 'gitalk',
		showComment: true // 是否显示评论
	},
	// 自定义扩展: 页脚配置
	footerConfig: {
		showFooter: true, // 是否显示页脚
		icpRecordCode: '粤ICP备2023091461号', // ICP备案号
		publicSecurityRecordCode: '粤公网安备44030002002023', // 联网备案号
		copyright: `Copyright © 2023-${new Date().getFullYear()} WeLovePlayGame. All Rights Reserved` // 版权信息
	}
}