module.exports = {
	title: 'VuePress',
	theme: 'yuu',
	description: 'Description',
	plugins: [
		'@vuepress/blog',
		'reading-progress',
		'@vuepress/nprogress',
		'@vuepress/back-to-top',
		'@vuepress/last-updated',
		'vuepress-plugin-nprogress',
		'@vuepress/register-components',
		'@vuepress/active-header-links',
		'vuepress-plugin-smooth-scroll',
		[ '@vuepress/search', { searchMaxSuggestions: 10 } ]
	],
	markdown: {
		lineNumbers: true,
		toc: { includeLevel: [2, 3] },
		extendMarkdown: md => {
			md.use(require('markdown-it-sub')),
			md.use(require('markdown-it-sup')),
			md.use(require('markdown-it-deflist')),
			md.use(require('markdown-it-footnote')),
			md.use(require('markdown-it-task-lists'), {
				label: true,
				enabled: true
			}),
			md.use(require('markdown-it-attrs'), {
				leftDelimiter: '>>',
				rightDelimiter: '<<'
			})
		}
	},
	themeConfig: {
		yuu: {
			defaultDarkTheme: true,
			defaultColorTheme: 'green',
			labels: {
				darkTheme: 'Dark theme?',
				ignoreThemes: 'Ignore themes?',
			}
		},
		sidebar: [
			{
				title: 'Similique',
				path: '/similique/',
				collapsable: false,
				sidebarDepth: 3,
				children: [
					'/similique/nesciunt/',
					'/similique/accusantium/',
				]
			},
			{
				title: 'Dignissimos',
				path: '/dignissimos/',
				collapsable: false,
				sidebarDepth: 3,
				children: [
					'/dignissimos/repudiandae/',
					'/dignissimos/pariatur/',
				]
			},
			{
				title: 'Obcaecati',
				path: '/obcaecati/',
				collapsable: false,
				sidebarDepth: 3,
				children: [
					'/obcaecati/consequatur/',
					'/obcaecati/officiis/',
				]
			},
		],
		sidebarDepth: 3,
		smoothScroll: true,
		displayAllHeaders: true
  }
}
