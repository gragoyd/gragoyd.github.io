import{c as n,o as s,e as a}from"./app.722664dd.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const p={},o={class:"language-typescript ext-ts line-numbers-mode"},e=a(`<pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineSidebarConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br></div>`,2),c=[e];function u(l,r){return s(),n("div",o,c)}var b=t(p,[["render",u],["__file","sidebar.html.vue"]]);export{b as default};
