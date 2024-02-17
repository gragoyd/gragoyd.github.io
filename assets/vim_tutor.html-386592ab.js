import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as d,e as l}from"./app-f880015c.js";const i={},c=l('<h2 id="normal-mode" tabindex="-1"><a class="header-anchor" href="#normal-mode" aria-hidden="true">#</a> Normal Mode</h2><h3 id="motions" tabindex="-1"><a class="header-anchor" href="#motions" aria-hidden="true">#</a> Motions</h3><ul><li><code>j</code>: next line</li><li><code>gj</code>: next wrapped line</li><li><code>k</code>: previous line</li><li><code>gk</code>: previous wrapped line</li><li><code>h</code>: back char</li><li><code>l</code>: next char</li><li><code>w</code>: next word, separated by space and symbol</li><li><code>W</code>: next word, separated by space</li><li><code>e</code>: word end, separated by space and symbol</li><li><code>E</code>: word end, separated by space</li><li><code>b</code>: previous word, separated by space and symbol</li><li><code>B</code>: previous word, separated by space</li><li><code>ge</code>: previous word end, separated by space and symbol</li><li><code>gE</code>: previous word end, separated by space</li></ul><hr><ul><li><code>f{char} / F{char}</code>: find <code>char</code> after / behind cursor</li><li><code>t{char} / T{char}</code>: until <code>char</code> after / behind cursor</li><li><code>; / ,</code>: repeat last char search towards next / previous</li></ul><hr><ul><li><code>0</code>: to first char of line</li><li><code>^</code>: to first non-blank char of line</li><li><code>$</code>: to end of line</li><li><code>g_</code>: to non-blank char end of line</li></ul><hr><ul><li><code>}</code>: jump paragraph downwards</li><li><code>{</code>: jump paragraph upwards</li><li><code>[{</code>: goto start of cursor block</li><li><code>]}</code>: goto end of cursor block</li><li><code>Ctrl + D</code>: move down half page</li><li><code>Ctrl + U</code>: move up half page</li><li><code>Ctrl + F</code>: move down page</li><li><code>Ctrl + B</code>: move up page</li><li><code>Ctrl + E</code>: move down one line</li><li><code>Ctrl + Y</code>: move up one line</li><li><code>n%</code>: goto n% of whole file</li><li><code>zz</code>: move cursor line to center</li><li><code>zt</code>: move cursor line to top</li><li><code>zb</code>: move cursor line to bottom</li></ul><hr><ul><li><code>/{pattern}</code>: search forward</li><li><code>?{pattern}</code>: search backward <ul><li><code>&lt;Enter&gt;</code>: end pattern input and start match</li><li><code>{pattern}</code> can be regular expression</li></ul></li><li><code>n / N</code>: next / previous match</li></ul><hr><ul><li><code>/&lt;Enter&gt;</code> / <code>?&lt;Enter&gt;</code>: last forward / backward search</li><li><code>*</code>: search crusor word forward</li><li><code>#</code>: search crusor word backward</li></ul><hr><ul><li><code>{count}{command}</code>: multiply effect of command</li></ul><hr><ul><li><code>gd</code>: goto local variable definition</li><li><code>gD</code>: goto global variable definition</li><li><code>gf</code>: goto file in import</li></ul><hr><ul><li><code>gg</code>: goto file top</li><li><code>{line}gg</code>: goto special line</li><li><code>G</code>: goto file end</li><li><code>H/M/L</code>: move cursor to top/middle/bottom of view</li><li><code>{line}G</code> / <code>:{line}&lt;Enter&gt;</code>: goto start of {line}</li><li><code>+</code> / <code>&lt;Enter&gt;</code>: goto non-blank char of next line</li><li><code>-</code>: goto non-blank char of previous line</li><li><code>%</code>: goto matching <code>({[]})</code></li></ul><hr><h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h3><ul><li><code>{opeartor}{count}{motion}</code> / <code>{count}{operator}{motion}</code><ul><li>eg: <code>d5j</code>, <code>df&#39;</code>, <code>dt&#39;</code>, <code>d/hello</code>, <code>ggdG</code>, <code>3c/hello</code>, <code>ggyG</code>, <code>gUw</code>, <code>4f&quot;</code>, <code>d0</code></li></ul></li><li>Operators: <ul><li><code>c</code>: change [cut and switch to insert mode]</li><li><code>y</code>: yank (copy)</li><li><code>d</code>: cut</li><li><code>p</code>: paste after cursor</li><li><code>=</code>: format code</li><li><code>g~</code>: switch uppercase or lowercase [<code>gU</code> or <code>gu</code>]</li><li><code>&gt;</code>: add indentation</li><li><code>&lt;</code>: remove indentation</li></ul></li></ul><hr><ul><li>Double operator to perform on whole line. <ul><li>eg: <code>dd</code>, <code>cc</code>, <code>g~~</code></li></ul></li><li>Capitalize operator to perform stronger or alternate. <ul><li><code>D</code>: delete from cursor to end of line</li><li><code>cc</code>: change whole line</li><li><code>C</code>: change from cursor to end of line</li><li><code>Y / yy</code>: copy whole line</li><li><code>P</code>: paste before cursor</li><li><code>&gt;&gt;</code>: shift line right</li><li><code>&lt;&lt;</code>: shift line left</li><li><code>==</code>: format line</li></ul></li></ul><hr><ul><li><code>{i|a}{text-object-id}</code><ul><li><code>i</code>: inner [text object and whitespace]</li><li><code>a</code>: around [text object without whitespace]</li></ul></li><li><code>{operator}{i|a}{text-object}</code><ul><li><code>w</code>: word</li><li><code>s</code>: sentence</li><li><code>p</code>: paragraph</li><li><code>b / (</code>: block surrounded by ()</li><li><code>B / {</code>: block surrounded by {}</li><li><code>&quot; / &#39;</code>: quoted text [also `]</li><li><code>&lt; / &gt;</code>: block surrounded by <code>&lt;&gt;</code></li><li><code>[ / ]</code>: block surrounded by <code>[]</code></li><li><code>t</code>: tag [for HTML]</li></ul></li><li>eg: <code>daw</code>, <code>ciw</code>, <code>das</code>, <code>da&quot;</code>, <code>ci&quot;</code>, <code>dap</code>, <code>dab / da( / da)</code>, <code>daB / da{ / da}</code></li></ul><hr><ul><li><code>.</code>: repeat last change</li><li><code>x / dl</code>: cut cursor char</li><li><code>X / dh</code>: cut char before cursor</li><li><code>s / ch</code>: cut cursor char and switch insert mode</li><li><code>r</code>: replace cursor char</li><li><code>R</code>: replace words after cursor</li><li><code>~</code>: switch char case</li></ul><hr><ul><li><code>u</code>: undo last change</li><li><code>{count}u</code>: undo last <code>count</code> changes</li><li><code>Crtl + R</code>: redo last change</li></ul><hr><h3 id="normal-mode-trikies" tabindex="-1"><a class="header-anchor" href="#normal-mode-trikies" aria-hidden="true">#</a> NORMAL mode trikies</h3><ul><li><code>i</code>: goto INSERT mode before cursor</li><li><code>a</code>: goto INSERT mode after cursor</li><li><code>I</code>: goto INSERT mode at the beginning of line</li><li><code>A</code>: goto INSERT mode at the line end</li><li><code>o</code>: insert a new line below the current line and goto INSERT mode</li><li><code>O</code>: insert a new line above the current line and goto INSERT mode</li><li><code>gi</code>: goto INSERT mode at the last place changed</li></ul><h3 id="insert-mode-trikies" tabindex="-1"><a class="header-anchor" href="#insert-mode-trikies" aria-hidden="true">#</a> INSERT mode trikies</h3><ul><li><code>Ctrl + h</code>: delete last char typed</li><li><code>Ctrl + w</code>: delete last word typed</li><li><code>Ctrl + u</code>: delete last line typed</li></ul><hr><h2 id="visual-mode" tabindex="-1"><a class="header-anchor" href="#visual-mode" aria-hidden="true">#</a> VISUAL mode</h2><ul><li><code>v</code>: VISUAL mode - char</li><li><code>V</code>: VISUAL mode - linewise</li><li><code>Ctrl + V</code>: VISUAL - rect block</li></ul><hr><ul><li><code>gn / gN</code>: <ul><li>select the match in VISUAL mode if cursor on top of search match</li><li>extend current selection until the end of the next much if in VISUAL mode</li><li>operate on the next match if in Operator-pending mode, that&#39;s <code>{operator}gn</code></li></ul></li></ul><hr><h2 id="copying-and-pasting" tabindex="-1"><a class="header-anchor" href="#copying-and-pasting" aria-hidden="true">#</a> Copying and Pasting</h2><ul><li><code>yl</code>: yanka a letter</li><li><code>yh</code>: yanka a letter before cursor</li><li><code>yaw</code>: yank a word</li><li><code>yas</code>: yank a sentence</li><li><code>yi(</code>: yank all in (</li><li><code>gp / gP</code>: same as <code>p / P</code>, then put cursor after the pasted selection</li><li>yank characters or lines will be different when pasting, around cursor or at new line.</li><li><code>yy{count}p</code>: duplicate <code>count</code> lines</li><li><code>ddp / ddP</code>: swap lines</li><li><code>xp / dlp</code>: swap characters</li></ul><hr><h2 id="registers" tabindex="-1"><a class="header-anchor" href="#registers" aria-hidden="true">#</a> Registers</h2><h3 id="in-normal-mode" tabindex="-1"><a class="header-anchor" href="#in-normal-mode" aria-hidden="true">#</a> in NORMAL mode</h3><ul><li><code>&quot;{register name}{y / d / c}{motion}</code><ul><li><code>&quot;</code>: the unnamed register which is default</li><li><code>a ~ z</code>: the named registers which can be used explicitly</li><li><code>0</code>: yank register that store the last thing yanked</li><li><code>1 ~ 9</code>: cut register that store the last 9 things cut by delete or change command</li><li>eg: <code>&quot;ayas</code> -&gt; <code>&quot;ap</code></li></ul></li><li><code>:reg {register}</code>: inspect specific register content</li></ul><h3 id="in-insert-mode" tabindex="-1"><a class="header-anchor" href="#in-insert-mode" aria-hidden="true">#</a> in INSERT mode</h3><ul><li><code>Ctrl-R {register}</code></li><li>eg: <code>Ctrl-R &quot;</code>, <code>Ctrl-R a</code>, <code>Ctrl-R 0</code></li><li>can paste a line just after cursor in INSERT mode</li></ul><hr><h2 id="command-line-mode" tabindex="-1"><a class="header-anchor" href="#command-line-mode" aria-hidden="true">#</a> Command-line mode</h2><ul><li><strong>Ex command</strong>: start with <code>:</code> and <strong>search pattern</strong>: start with <code>/</code> or <code>?</code></li><li><code>:e / :edit {relative-path-to-file}</code>: open or create file</li><li><code>:w / :write</code>: save file (soft command)</li><li><code>:q / :quit</code>: close file (soft command)</li><li><code>!</code>: combine with other soft command to force execute</li><li><code>:w!</code>: save file even if readonly</li><li><code>:q!</code>: close file without saving</li><li><code>:wq</code>: save and close file</li><li><code>:wa / :wall</code>: save all files</li><li><code>:qa / :qall</code>: close all files</li><li><code>:wqa / :wqall</code>: save and close all files</li><li><code>:qa! / :qall!</code>: close all files without saving</li><li><code>:![command]</code>: run command in shell temporarily</li></ul><hr><ul><li><code>:[range]command[options]</code>: text-editing Ex command</li><li><code>:[range]d [register]</code>: delete lines and put them to register <ul><li>eg: <code>10,12d a</code>: delete lines 10 ~ 12 and put them inside the <code>a</code> register</li></ul></li><li>some ways to express range extremes <ul><li>numbers: <code>:10,12d</code></li><li>offsets: <code>:10,+2d</code></li><li><code>.</code> represent current line: <code>:.,+2d</code></li><li><code>%</code> represent whole line: <code>:%d</code></li><li><code>0</code> represent beginning of file: <code>:0,+10d</code></li><li><code>$</code> represent end of file: <code>:.,$d</code></li></ul></li><li>after make text selection in VISUAL mode and then type <code>:</code>, line area will pre-populated with <code>:&#39;&lt;,&#39;&gt;</code> so that can continue input command like <code>d</code></li><li>Ex commands allow apply command over multiple lines with no move of cursor. If need change multiple lines, consider using Ex commands.</li><li>useful Ex commands: <code>:yank</code>, <code>:put</code>, <code>:copy</code>, <code>:move</code></li><li><code>@:</code>: repeat last command</li><li><code>@@</code>: repeat again after <code>@:</code></li></ul><hr><ul><li><code>:substitute</code>: to substitute text</li><li><code>:[range]s/{pattern}/{substitute}/{flags}</code><ul><li><code>range</code>: define range to apply substitute</li><li><code>pattern</code>: search pattern that describe the text to be changed. <code>/{pattern}</code> support regular expression</li><li><code>substitute</code>: the text to be substitute</li><li><code>flags</code>: set options that configure substitution</li></ul></li><li>eg: <ul><li><code>:s/led/gold</code>: replace the first occurrence of <code>led</code> in the current line with <code>gold</code></li><li><code>:s/led/gold/g</code>: change all occurrences in the current line (<code>g</code> means global)</li><li><code>:%s/led/gold/g</code>: change all occurrences for whole file</li></ul></li><li>more flags: <code>i</code> for case insensitive search, <code>c</code> to confirm each and every substitution</li><li><code>:%s/^#//</code>: change the indentation level of all titles in markdown file <ul><li><code>%</code>: for whole file</li><li><code>s</code>: substitute</li><li><code>^#</code>: any <code>#</code> at the beginning of a line</li><li><code>//</code>: for an empty char</li></ul></li><li>VSCodeVim setting has changed, <code>Vim:Gdefault</code> opposite the <code>/g</code> flag</li></ul><hr><h2 id="splits-and-tabs" tabindex="-1"><a class="header-anchor" href="#splits-and-tabs" aria-hidden="true">#</a> Splits and Tabs</h2><ul><li>open file in horizontal split: <ul><li><code>:sp {relative-path-to-file}</code></li><li><code>&lt;Ctrl-W&gt; S</code></li></ul></li><li>open file in vertical split: <ul><li><code>:vsp {relative-path-to-file}</code></li><li><code>&lt;Ctrl-W&gt; V</code></li></ul></li><li>After creating split, type <code>CMD-P</code> to open new file</li><li>A split window can be split again</li><li><code>&lt;Ctrl-W&gt; + h / j / k / l</code>: move between splits</li></ul><hr><ul><li><code>:tabnew {file}</code>: open file in new tab</li><li><code>:tabn / :tabnext</code>: goto next tab</li><li><code>:tabp / :tabprevious</code>: goto previous tab</li><li><code>:tabo / :tabonly</code>: close all other tabs</li></ul><hr><h2 id="vim-surround-built-in-plugin" tabindex="-1"><a class="header-anchor" href="#vim-surround-built-in-plugin" aria-hidden="true">#</a> Vim-surround built-in plugin</h2><ul><li><code>ds / cs / ys{count}{motion}</code></li><li><code>ds{char}</code>: delete surrounding <code>char</code><ul><li>eg: <code>ds&#39;</code></li></ul></li><li><code>cs{old}{new}</code>: change surrounding <code>old</code> to <code>new</code><ul><li>eg: <code>cs&#39;&quot;</code></li></ul></li><li><code>ys{motion}{char}</code>: add surrounding <ul><li>eg: <code>ysaptli&gt;</code>: to surround paragraph with an <code>&lt;li&gt;</code> tag</li></ul></li><li>in VISUAL mode, select text then type <code>S{char}</code>, selection text will be surrounded by <code>char</code></li></ul><hr><h2 id="custom-mappings" tabindex="-1"><a class="header-anchor" href="#custom-mappings" aria-hidden="true">#</a> Custom mappings</h2><ul><li>setting name: <code>vim.normalModeKeyBindingsNonRescursive</code></li><li>leader key: <code>\\</code> change to <code>&lt;Space&gt;</code></li><li><code>J</code> means <code>5j</code></li><li><code>K</code> means <code>5k</code></li><li><code>&lt;Leader&gt; - j</code> means <code>J</code>: join lines together</li><li>switch between splits: <ul><li><code>&lt;Ctrl-h&gt;</code> means <code>&lt;Ctrl-w&gt; + h</code></li><li><code>&lt;Ctrl-j&gt;</code> means <code>&lt;Ctrl-w&gt; + j</code></li><li><code>&lt;Ctrl-k&gt;</code> means <code>&lt;Ctrl-w&gt; + k</code></li><li><code>&lt;Ctrl-l&gt;</code> means <code>&lt;Ctrl-w&gt; + l</code></li></ul></li><li><code>:noh</code>: remove highlights matching patterns of search</li></ul><hr><h2 id="moving-faster" tabindex="-1"><a class="header-anchor" href="#moving-faster" aria-hidden="true">#</a> Moving faster</h2><h3 id="vim-sneak" tabindex="-1"><a class="header-anchor" href="#vim-sneak" aria-hidden="true">#</a> Vim-Sneak</h3><ul><li>setting name: <code>vim.sneak</code></li><li><code>s{char}{char}</code>: cursor goto first occurrence of that two char sequence</li><li><code>;</code> for next occurrence or <code>,</code> for previous one</li><li><code>S{char}{char}</code>: similar but backward</li><li><code>{operator}z{char}{char}</code>: apply operator over the text traversed by the sneak motion</li><li>vim-sneak use <code>z</code> instead of <code>s</code> with other operators, because <code>s</code> is already taken by vim-surround</li></ul><h3 id="vim-easymotion" tabindex="-1"><a class="header-anchor" href="#vim-easymotion" aria-hidden="true">#</a> Vim-EasyMotion</h3><ul><li>setting name: <code>vim.easymotion</code></li><li>All the key below need to add <code>&lt;leader&gt;&lt;leader&gt;</code> first</li><li><code>w</code>: goto start of words</li><li><code>b</code>: goto start of words backwards</li><li><code>bdw</code>: goto start of words everywhere <em>(USELESS)</em><ul><li>The <code>bd</code> stands for bidirectional</li></ul></li><li><code>e</code>: goto end of words</li><li><code>ge</code>: goto end of words backwords</li><li><code>bdw</code>: goto end of words everywhere <em>(USELESS)</em></li><li><code>j</code>: goto beginning of lines</li><li><code>k</code>: goto beginning of lines backwards</li><li><code>f{char}</code>: find char</li><li><code>F{char}</code>: find char backwards</li><li><code>t{char}</code>: until char</li><li><code>T{char}</code>: until char backwards</li><li><code>s{char}</code>: search char everywhere</li><li>In VSCodeVim, EasyMotion only support moving around but can&#39;t be combined with operators. Traditional Vim support.</li></ul><hr><h2 id="multiple-cursors" tabindex="-1"><a class="header-anchor" href="#multiple-cursors" aria-hidden="true">#</a> Multiple cursors</h2><ul><li>steps of add multiple cursors based on word search:</li></ul><ol><li>move cursor on aim word</li><li>type <code>&lt;CMD-D&gt; / gb</code> to add cursor, and repeat it to auto select same word</li><li>perform actions or turn to NORMAL mode to perform</li></ol><ul><li>steps of extend cursors up or down in consecutive lines:</li></ul><ol><li>type <code>&lt;Ctrl-V&gt;</code> for VISUAL-block mode</li><li>use <code>j / k</code> to select rectangle of text</li><li>type <code>I</code> to insert or <code>A</code> to append text</li><li>alternatively, use any NORMAL mode commands to operate the selection</li></ol>',79),t=[c];function a(r,n){return o(),d("div",null,t)}const h=e(i,[["render",a],["__file","vim_tutor.html.vue"]]);export{h as default};