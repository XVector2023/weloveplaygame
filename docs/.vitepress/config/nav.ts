import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '产品',
    items: [
		{
			text: '法必帮',
			link: 'https://lawvector.cn'
		},
		{ text: '法平行', link: '/categories/xvector/index', activeMatch: '/categories/xvector/' },
    ]
  },
  {
    text: '协议',
    items: [
		{ text: '法必帮用户协议', link: '/agreements/user/index', activeMatch: '/agreements/user/' },
		{ text: '法必帮隐私协议', link: '/agreements/privacy/index', activeMatch: '/agreements/privacy/' },
		{ text: '法必帮系列会员协议', link: '/agreements/member/index', activeMatch: '/agreements/member/' },
    ],
	  activeMatch: '/agreements/'
  },
  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '关于',
    items: [
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/'
  },
];