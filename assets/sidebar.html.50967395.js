import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as t,e as a}from"./app.760fdba4.js";const p={},o=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineSidebarConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> zhSidebarConfig <span class="token operator">=</span> <span class="token function">defineSidebarConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u6307\u5357&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;creative&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;guide/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;get-started/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;interface/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;layout/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;markdown/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;feature/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;blog/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;advanced/&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u914D\u7F6E&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;config/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;intro&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;i18n&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;theme/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;plugins/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;frontmatter/&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u6559\u7A0B&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;guide&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;cookbook/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tutorial/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;markdown/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vuepress/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;advanced/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u8FC1\u79FB&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;migration/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;style&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u5E38\u89C1\u95EE\u9898&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;question&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;faq/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;troubleshooting&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;common-error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;safari&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;changelog&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;contribution&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>

	<span class="token string-property property">&quot;/zh/guide/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u5FEB\u901F\u4E0A\u624B&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;creative&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;get-started/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;intro&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;install&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u754C\u9762&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;palette&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;interface/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;darkmode&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;theme-color&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;code-theme&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;accessibility&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;pure&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;others&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u5E03\u5C40&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;layout&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;layout/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;navbar&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;sidebar&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;breadcrumb&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;footer&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;slides&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;Markdown \u589E\u5F3A&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;markdown/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;intro&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;container&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;components&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;code-group&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;align&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;sup-sub&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;footnote&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;mark&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;tasklist&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;tex&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;flowchart&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;mermaid&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;presentation&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;others&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;external&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u529F\u80FD&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;discover&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;feature/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;page-info&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;copy-code&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;photo-swipe&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;copyright&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;encrypt&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u535A\u5BA2&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;blog/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;intro&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;blogger&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;article&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;category-and-tags&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;timeline&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u9AD8\u7EA7\u529F\u80FD&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;advance&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;advanced/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pwa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;feed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;seo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sitemap&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>

	<span class="token string-property property">&quot;/zh/config/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">&quot;intro&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;i18n&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u4E3B\u9898\u914D\u7F6E&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;theme/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;basic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;feature&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;layout&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;apperance&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u63D2\u4EF6\u914D\u7F6E&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;plugin&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;plugins/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;intro&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;feed&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;md-enhance&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;pwa&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;others&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;Frontmatter \u914D\u7F6E&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;frontmatter/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;layout&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;plugins&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>

	<span class="token string-property property">&quot;/zh/cookbook/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u6559\u7A0B&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;guide&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;tutorial/&quot;</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;command&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;deploy&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;Markdown&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;markdown/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					text<span class="token operator">:</span> <span class="token string">&quot;Emoji&quot;</span><span class="token punctuation">,</span>
					icon<span class="token operator">:</span> <span class="token string">&quot;emoji&quot;</span><span class="token punctuation">,</span>
					link<span class="token operator">:</span> <span class="token string">&quot;emoji/&quot;</span><span class="token punctuation">,</span>
					prefix<span class="token operator">:</span> <span class="token string">&quot;emoji/&quot;</span><span class="token punctuation">,</span>
					collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;people&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nature&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;place&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;symbol&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;VuePress&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;vuepress/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;plugin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;theme&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			text<span class="token operator">:</span> <span class="token string">&quot;\u9AD8\u7EA7&quot;</span><span class="token punctuation">,</span>
			icon<span class="token operator">:</span> <span class="token string">&quot;advance&quot;</span><span class="token punctuation">,</span>
			prefix<span class="token operator">:</span> <span class="token string">&quot;advanced/&quot;</span><span class="token punctuation">,</span>
			collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;extend&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function i(u,c){return s(),t("div",null,e)}var k=n(p,[["render",i],["__file","sidebar.html.vue"]]);export{k as default};
