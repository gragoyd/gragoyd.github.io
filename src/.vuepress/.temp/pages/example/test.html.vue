<template><div><details class="hint-container details"><summary>test</summary>
<Tabs id="1" :data='[{"id":"1"},{"id":"2"}]' :active="1">
<template #title0="{ value, isActive }">1</template>
<template #title1="{ value, isActive }">2</template>
<template #tab0="{ value, isActive }">
<p>aaaaa</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">int</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">a</span><span style="color: #D4D4D4">=</span><span style="color: #B5CEA8">1</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>∑</mo></mrow><annotation encoding="application/x-tex">\sum</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span></span></span></span>hhhh</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #4EC9B0">int</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">b</span><span style="color: #D4D4D4">=</span><span style="color: #B5CEA8">2</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
</details>
</div></template>


