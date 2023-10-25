import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '产品服务',
    items: [
		{
			text: '法必帮-专业版',
			link: 'https://law.xvector.cn'
		},
		{ text: '法必帮-大众版', link: '/categories/lawvector/ordinary', activeMatch: '/categories/lawvector/' },
    { text: 'AI开放平台', link: '/categories/xvector/open', activeMatch: '/categories/xvector/' },
    ]
  },
  {
    text: '文档支持',
    items: [
		{ text: '法必帮用户协议', link: '/agreements/user/index', activeMatch: '/agreements/user/' },
		{ text: '法必帮隐私协议', link: '/agreements/privacy/index', activeMatch: '/agreements/privacy/' },
		{ text: '法必帮系列会员协议', link: '/agreements/member/index', activeMatch: '/agreements/member/' },
    ],
	  activeMatch: '/agreements/'
  },
  {
    text: '关于我们',
    link: '/about/me',
    activeMatch: '/about/'
  },
];