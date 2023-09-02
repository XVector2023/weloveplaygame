import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '产品',
    items: [
		{ text: '法向量', link: '/categories/lawvector/index', activeMatch: '/categories/lawvector/' },
		{ text: '法平行', link: '/categories/xvector/index', activeMatch: '/categories/xvector/' },
    ],
    activeMatch: '/categories/'
  },
  {
    text: '资讯',
    items: [
		{ text: '新闻', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' },
		{ text: '产品', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' },
		{ text: '模型', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' },
		{ text: '风险与机会', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' },
		{ text: '论文', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' }
    ],
    activeMatch: '/courses/'
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