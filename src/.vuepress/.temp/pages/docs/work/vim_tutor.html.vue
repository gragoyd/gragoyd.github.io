<template><div><h2 id="normal-mode" tabindex="-1"><a class="header-anchor" href="#normal-mode" aria-hidden="true">#</a> Normal Mode</h2>
<h3 id="motions" tabindex="-1"><a class="header-anchor" href="#motions" aria-hidden="true">#</a> Motions</h3>
<ul>
<li><code v-pre>j</code>: next line</li>
<li><code v-pre>gj</code>: next wrapped line</li>
<li><code v-pre>k</code>: previous line</li>
<li><code v-pre>gk</code>: previous wrapped line</li>
<li><code v-pre>h</code>: back char</li>
<li><code v-pre>l</code>: next char</li>
<li><code v-pre>w</code>: next word, separated by space and symbol</li>
<li><code v-pre>W</code>: next word, separated by space</li>
<li><code v-pre>e</code>: word end, separated by space and symbol</li>
<li><code v-pre>E</code>: word end, separated by space</li>
<li><code v-pre>b</code>: previous word, separated by space and symbol</li>
<li><code v-pre>B</code>: previous word, separated by space</li>
<li><code v-pre>ge</code>: previous word end, separated by space and symbol</li>
<li><code v-pre>gE</code>: previous word end, separated by space</li>
</ul>
<hr>
<ul>
<li><code v-pre>f{char} / F{char}</code>: find <code v-pre>char</code> after / behind cursor</li>
<li><code v-pre>t{char} / T{char}</code>: until <code v-pre>char</code> after / behind cursor</li>
<li><code v-pre>; / ,</code>: repeat last char search towards next / previous</li>
</ul>
<hr>
<ul>
<li><code v-pre>0</code>: to first char of line</li>
<li><code v-pre>^</code>: to first non-blank char of line</li>
<li><code v-pre>$</code>: to end of line</li>
<li><code v-pre>g_</code>: to non-blank char end of line</li>
</ul>
<hr>
<ul>
<li><code v-pre>}</code>: jump paragraph downwards</li>
<li><code v-pre>{</code>: jump paragraph upwards</li>
<li><code v-pre>[{</code>: goto start of cursor block</li>
<li><code v-pre>]}</code>: goto end of cursor block</li>
<li><code v-pre>Ctrl + D</code>: move down half page</li>
<li><code v-pre>Ctrl + U</code>: move up half page</li>
<li><code v-pre>Ctrl + F</code>: move down page</li>
<li><code v-pre>Ctrl + B</code>: move up page</li>
<li><code v-pre>Ctrl + E</code>: move down one line</li>
<li><code v-pre>Ctrl + Y</code>: move up one line</li>
<li><code v-pre>n%</code>: goto n% of whole file</li>
<li><code v-pre>zz</code>: move cursor line to center</li>
<li><code v-pre>zt</code>: move cursor line to top</li>
<li><code v-pre>zb</code>: move cursor line to bottom</li>
</ul>
<hr>
<ul>
<li><code v-pre>/{pattern}</code>: search forward</li>
<li><code v-pre>?{pattern}</code>: search backward
<ul>
<li><code v-pre>&lt;Enter&gt;</code>: end pattern input and start match</li>
<li><code v-pre>{pattern}</code> can be regular expression</li>
</ul>
</li>
<li><code v-pre>n / N</code>: next / previous match</li>
</ul>
<hr>
<ul>
<li><code v-pre>/&lt;Enter&gt;</code> / <code v-pre>?&lt;Enter&gt;</code>: last forward / backward search</li>
<li><code v-pre>*</code>: search crusor word forward</li>
<li><code v-pre>#</code>: search crusor word backward</li>
</ul>
<hr>
<ul>
<li><code v-pre>{count}{command}</code>: multiply effect of command</li>
</ul>
<hr>
<ul>
<li><code v-pre>gd</code>: goto local variable definition</li>
<li><code v-pre>gD</code>: goto global variable definition</li>
<li><code v-pre>gf</code>: goto file in import</li>
</ul>
<hr>
<ul>
<li><code v-pre>gg</code>: goto file top</li>
<li><code v-pre>{line}gg</code>: goto special line</li>
<li><code v-pre>G</code>: goto file end</li>
<li><code v-pre>{line}G</code> / <code v-pre>:{line}&lt;Enter&gt;</code>: goto start of {line}</li>
<li><code v-pre>+</code> / <code v-pre>&lt;Enter&gt;</code>: goto non-blank char of next line</li>
<li><code v-pre>-</code>: goto non-blank char of previous line</li>
<li><code v-pre>%</code>: goto matching <code v-pre>({[]})</code></li>
</ul>
<hr>
<h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h3>
<ul>
<li><code v-pre>{opeartor}{count}{motion}</code> / <code v-pre>{count}{operator}{motion}</code>
<ul>
<li>eg: <code v-pre>d5j</code>, <code v-pre>df'</code>, <code v-pre>dt'</code>, <code v-pre>d/hello</code>, <code v-pre>ggdG</code>, <code v-pre>3c/hello</code>, <code v-pre>ggyG</code>, <code v-pre>gUw</code>, <code v-pre>4f&quot;</code>, <code v-pre>d0</code></li>
</ul>
</li>
<li>Operators:
<ul>
<li><code v-pre>c</code>: change [cut and switch to insert mode]</li>
<li><code v-pre>y</code>: yank (copy)</li>
<li><code v-pre>d</code>: cut</li>
<li><code v-pre>p</code>: paste after cursor</li>
<li><code v-pre>=</code>: format code</li>
<li><code v-pre>g~</code>: switch uppercase or lowercase [<code v-pre>gU</code> or <code v-pre>gu</code>]</li>
<li><code v-pre>&gt;</code>: add indentation</li>
<li><code v-pre>&lt;</code>: remove indentation</li>
</ul>
</li>
</ul>
<hr>
<ul>
<li>Double operator to perform on whole line.
<ul>
<li>eg: <code v-pre>dd</code>, <code v-pre>cc</code>, <code v-pre>g~~</code></li>
</ul>
</li>
<li>Capitalize operator to perform stronger or alternate.
<ul>
<li><code v-pre>D</code>: delete from cursor to end of line</li>
<li><code v-pre>cc</code>: change whole line</li>
<li><code v-pre>C</code>: change from cursor to end of line</li>
<li><code v-pre>Y / yy</code>: copy whole line</li>
<li><code v-pre>P</code>: paste before cursor</li>
<li><code v-pre>&gt;&gt;</code>: shift line right</li>
<li><code v-pre>&lt;&lt;</code>: shift line left</li>
<li><code v-pre>==</code>: format line</li>
</ul>
</li>
</ul>
<hr>
<ul>
<li><code v-pre>{i|a}{text-object-id}</code>
<ul>
<li><code v-pre>i</code>: inner [text object and whitespace]</li>
<li><code v-pre>a</code>: around [text object without whitespace]</li>
</ul>
</li>
<li><code v-pre>{operator}{i|a}{text-object}</code>
<ul>
<li><code v-pre>w</code>: word</li>
<li><code v-pre>s</code>: sentence</li>
<li><code v-pre>p</code>: paragraph</li>
<li><code v-pre>b / (</code>: block surrounded by ()</li>
<li><code v-pre>B / {</code>: block surrounded by {}</li>
<li><code v-pre>&quot; / '</code>: quoted text [also `]</li>
<li><code v-pre>&lt; / &gt;</code>: block surrounded by <code v-pre>&lt;&gt;</code></li>
<li><code v-pre>[ / ]</code>: block surrounded by <code v-pre>[]</code></li>
<li><code v-pre>t</code>: tag [for HTML]</li>
</ul>
</li>
<li>eg: <code v-pre>daw</code>, <code v-pre>ciw</code>, <code v-pre>das</code>, <code v-pre>da&quot;</code>, <code v-pre>ci&quot;</code>, <code v-pre>dap</code>, <code v-pre>dab / da( / da)</code>, <code v-pre>daB / da{ / da}</code></li>
</ul>
<hr>
<ul>
<li><code v-pre>.</code>: repeat last change</li>
<li><code v-pre>x / dl</code>: cut cursor char</li>
<li><code v-pre>X / dh</code>: cut char before cursor</li>
<li><code v-pre>s / ch</code>: cut cursor char and switch insert mode</li>
<li><code v-pre>r</code>: replace cursor char</li>
<li><code v-pre>R</code>: replace words after cursor</li>
<li><code v-pre>~</code>: switch char case</li>
</ul>
<hr>
<ul>
<li><code v-pre>u</code>: undo last change</li>
<li><code v-pre>{count}u</code>: undo last <code v-pre>count</code> changes</li>
<li><code v-pre>Crtl + R</code>: redo last change</li>
</ul>
<hr>
<h3 id="normal-mode-trikies" tabindex="-1"><a class="header-anchor" href="#normal-mode-trikies" aria-hidden="true">#</a> NORMAL mode trikies</h3>
<ul>
<li><code v-pre>i</code>: goto INSERT mode before cursor</li>
<li><code v-pre>a</code>: goto INSERT mode after cursor</li>
<li><code v-pre>I</code>: goto INSERT mode at the beginning of line</li>
<li><code v-pre>A</code>: goto INSERT mode at the line end</li>
<li><code v-pre>o</code>: insert a new line below the current line and goto INSERT mode</li>
<li><code v-pre>O</code>: insert a new line above the current line and goto INSERT mode</li>
<li><code v-pre>gi</code>: goto INSERT mode at the last place changed</li>
</ul>
<h3 id="insert-mode-trikies" tabindex="-1"><a class="header-anchor" href="#insert-mode-trikies" aria-hidden="true">#</a> INSERT mode trikies</h3>
<ul>
<li><code v-pre>Ctrl + h</code>: delete last char typed</li>
<li><code v-pre>Ctrl + w</code>: delete last word typed</li>
<li><code v-pre>Ctrl + u</code>: delete last line typed</li>
</ul>
<hr>
<h2 id="visual-mode" tabindex="-1"><a class="header-anchor" href="#visual-mode" aria-hidden="true">#</a> VISUAL mode</h2>
<ul>
<li><code v-pre>v</code>: VISUAL mode - char</li>
<li><code v-pre>V</code>: VISUAL mode - linewise</li>
<li><code v-pre>Ctrl + V</code>: VISUAL - rect block</li>
</ul>
<hr>
<ul>
<li><code v-pre>gn / gN</code>:
<ul>
<li>select the match in VISUAL mode if cursor on top of search match</li>
<li>extend current selection until the end of the next much if in VISUAL mode</li>
<li>operate on the next match if in Operator-pending mode, that's <code v-pre>{operator}gn</code></li>
</ul>
</li>
</ul>
<hr>
<h2 id="copying-and-pasting" tabindex="-1"><a class="header-anchor" href="#copying-and-pasting" aria-hidden="true">#</a> Copying and Pasting</h2>
<ul>
<li><code v-pre>yl</code>: yanka a letter</li>
<li><code v-pre>yh</code>: yanka a letter before cursor</li>
<li><code v-pre>yaw</code>: yank a word</li>
<li><code v-pre>yas</code>: yank a sentence</li>
<li><code v-pre>yi(</code>: yank all in (</li>
<li><code v-pre>gp / gP</code>: same as <code v-pre>p / P</code>, then put cursor after the pasted selection</li>
<li>yank characters or lines will be different when pasting, around cursor or at new line.</li>
<li><code v-pre>yy{count}p</code>: duplicate <code v-pre>count</code> lines</li>
<li><code v-pre>ddp / ddP</code>: swap lines</li>
<li><code v-pre>xp / dlp</code>: swap characters</li>
</ul>
<hr>
<h2 id="registers" tabindex="-1"><a class="header-anchor" href="#registers" aria-hidden="true">#</a> Registers</h2>
<h3 id="in-normal-mode" tabindex="-1"><a class="header-anchor" href="#in-normal-mode" aria-hidden="true">#</a> in NORMAL mode</h3>
<ul>
<li><code v-pre>&quot;{register name}{y / d / c}{motion}</code>
<ul>
<li><code v-pre>&quot;</code>: the unnamed register which is default</li>
<li><code v-pre>a ~ z</code>: the named registers which can be used explicitly</li>
<li><code v-pre>0</code>: yank register that store the last thing yanked</li>
<li><code v-pre>1 ~ 9</code>: cut register that store the last 9 things cut by delete or change command</li>
<li>eg: <code v-pre>&quot;ayas</code> -&gt; <code v-pre>&quot;ap</code></li>
</ul>
</li>
<li><code v-pre>:reg {register}</code>: inspect specific register content</li>
</ul>
<h3 id="in-insert-mode" tabindex="-1"><a class="header-anchor" href="#in-insert-mode" aria-hidden="true">#</a> in INSERT mode</h3>
<ul>
<li><code v-pre>Ctrl-R {register}</code></li>
<li>eg: <code v-pre>Ctrl-R &quot;</code>, <code v-pre>Ctrl-R a</code>, <code v-pre>Ctrl-R 0</code></li>
<li>can paste a line just after cursor in INSERT mode</li>
</ul>
<hr>
<h2 id="command-line-mode" tabindex="-1"><a class="header-anchor" href="#command-line-mode" aria-hidden="true">#</a> Command-line mode</h2>
<ul>
<li><strong>Ex command</strong>: start with <code v-pre>:</code> and <strong>search pattern</strong>: start with <code v-pre>/</code> or <code v-pre>?</code></li>
<li><code v-pre>:e / :edit {relative-path-to-file}</code>: open or create file</li>
<li><code v-pre>:w / :write</code>: save file (soft command)</li>
<li><code v-pre>:q / :quit</code>: close file (soft command)</li>
<li><code v-pre>!</code>: combine with other soft command to force execute</li>
<li><code v-pre>:w!</code>: save file even if readonly</li>
<li><code v-pre>:q!</code>: close file without saving</li>
<li><code v-pre>:wq</code>: save and close file</li>
<li><code v-pre>:wa / :wall</code>: save all files</li>
<li><code v-pre>:qa / :qall</code>: close all files</li>
<li><code v-pre>:wqa / :wqall</code>: save and close all files</li>
<li><code v-pre>:qa! / :qall!</code>: close all files without saving</li>
<li><code v-pre>:![command]</code>: run command in shell temporarily</li>
</ul>
<hr>
<ul>
<li><code v-pre>:[range]command[options]</code>: text-editing Ex command</li>
<li><code v-pre>:[range]d [register]</code>: delete lines and put them to register
<ul>
<li>eg: <code v-pre>10,12d a</code>: delete lines 10 ~ 12 and put them inside the <code v-pre>a</code> register</li>
</ul>
</li>
<li>some ways to express range extremes
<ul>
<li>numbers: <code v-pre>:10,12d</code></li>
<li>offsets: <code v-pre>:10,+2d</code></li>
<li><code v-pre>.</code> represent current line: <code v-pre>:.,+2d</code></li>
<li><code v-pre>%</code> represent whole line: <code v-pre>:%d</code></li>
<li><code v-pre>0</code> represent beginning of file: <code v-pre>:0,+10d</code></li>
<li><code v-pre>$</code> represent end of file: <code v-pre>:.,$d</code></li>
</ul>
</li>
<li>after make text selection in VISUAL mode and then type <code v-pre>:</code>, line area will pre-populated with <code v-pre>:'&lt;,'&gt;</code> so that can continue input command like <code v-pre>d</code></li>
<li>Ex commands allow apply command over multiple lines with no move of cursor. If need change multiple lines, consider using Ex commands.</li>
<li>useful Ex commands: <code v-pre>:yank</code>, <code v-pre>:put</code>, <code v-pre>:copy</code>, <code v-pre>:move</code></li>
<li><code v-pre>@:</code>: repeat last command</li>
<li><code v-pre>@@</code>: repeat again after <code v-pre>@:</code></li>
</ul>
<hr>
<ul>
<li><code v-pre>:substitute</code>: to substitute text</li>
<li><code v-pre>:[range]s/{pattern}/{substitute}/{flags}</code>
<ul>
<li><code v-pre>range</code>: define range to apply substitute</li>
<li><code v-pre>pattern</code>: search pattern that describe the text to be changed. <code v-pre>/{pattern}</code> support regular expression</li>
<li><code v-pre>substitute</code>: the text to be substitute</li>
<li><code v-pre>flags</code>: set options that configure substitution</li>
</ul>
</li>
<li>eg:
<ul>
<li><code v-pre>:s/led/gold</code>: replace the first occurrence of <code v-pre>led</code> in the current line with <code v-pre>gold</code></li>
<li><code v-pre>:s/led/gold/g</code>: change all occurrences in the current line (<code v-pre>g</code> means global)</li>
<li><code v-pre>:%s/led/gold/g</code>: change all occurrences for whole file</li>
</ul>
</li>
<li>more flags: <code v-pre>i</code> for case insensitive search, <code v-pre>c</code> to confirm each and every substitution</li>
<li><code v-pre>:%s/^#//</code>: change the indentation level of all titles in markdown file
<ul>
<li><code v-pre>%</code>: for whole file</li>
<li><code v-pre>s</code>: substitute</li>
<li><code v-pre>^#</code>: any <code v-pre>#</code> at the beginning of a line</li>
<li><code v-pre>//</code>: for an empty char</li>
</ul>
</li>
<li>VSCodeVim setting has changed, <code v-pre>Vim:Gdefault</code> opposite the <code v-pre>/g</code> flag</li>
</ul>
<hr>
<h2 id="splits-and-tabs" tabindex="-1"><a class="header-anchor" href="#splits-and-tabs" aria-hidden="true">#</a> Splits and Tabs</h2>
<ul>
<li>open file in horizontal split:
<ul>
<li><code v-pre>:sp {relative-path-to-file}</code></li>
<li><code v-pre>&lt;Ctrl-W&gt; S</code></li>
</ul>
</li>
<li>open file in vertical split:
<ul>
<li><code v-pre>:vsp {relative-path-to-file}</code></li>
<li><code v-pre>&lt;Ctrl-W&gt; V</code></li>
</ul>
</li>
<li>After creating split, type <code v-pre>CMD-P</code> to open new file</li>
<li>A split window can be split again</li>
<li><code v-pre>&lt;Ctrl-W&gt; + h / j / k / l</code>: move between splits</li>
</ul>
<hr>
<ul>
<li><code v-pre>:tabnew {file}</code>: open file in new tab</li>
<li><code v-pre>:tabn / :tabnext</code>: goto next tab</li>
<li><code v-pre>:tabp / :tabprevious</code>: goto previous tab</li>
<li><code v-pre>:tabo / :tabonly</code>: close all other tabs</li>
</ul>
<hr>
<h2 id="vim-surround-built-in-plugin" tabindex="-1"><a class="header-anchor" href="#vim-surround-built-in-plugin" aria-hidden="true">#</a> Vim-surround built-in plugin</h2>
<ul>
<li><code v-pre>ds / cs / ys{count}{motion}</code></li>
<li><code v-pre>ds{char}</code>: delete surrounding <code v-pre>char</code>
<ul>
<li>eg: <code v-pre>ds'</code></li>
</ul>
</li>
<li><code v-pre>cs{old}{new}</code>: change surrounding <code v-pre>old</code> to <code v-pre>new</code>
<ul>
<li>eg: <code v-pre>cs'&quot;</code></li>
</ul>
</li>
<li><code v-pre>ys{motion}{char}</code>: add surrounding
<ul>
<li>eg: <code v-pre>ysaptli&gt;</code>: to surround paragraph with an <code v-pre>&lt;li&gt;</code> tag</li>
</ul>
</li>
<li>in VISUAL mode, select text then type <code v-pre>S{char}</code>, selection text will be surrounded by <code v-pre>char</code></li>
</ul>
<hr>
<h2 id="custom-mappings" tabindex="-1"><a class="header-anchor" href="#custom-mappings" aria-hidden="true">#</a> Custom mappings</h2>
<ul>
<li>setting name: <code v-pre>vim.normalModeKeyBindingsNonRescursive</code></li>
<li>leader key: <code v-pre>\</code> change to <code v-pre>&lt;Space&gt;</code></li>
<li><code v-pre>J</code> means <code v-pre>5j</code></li>
<li><code v-pre>K</code> means <code v-pre>5k</code></li>
<li><code v-pre>&lt;Leader&gt; - j</code> means <code v-pre>J</code>: join lines together</li>
<li>switch between splits:
<ul>
<li><code v-pre>&lt;Ctrl-h&gt;</code> means <code v-pre>&lt;Ctrl-w&gt; + h</code></li>
<li><code v-pre>&lt;Ctrl-j&gt;</code> means <code v-pre>&lt;Ctrl-w&gt; + j</code></li>
<li><code v-pre>&lt;Ctrl-k&gt;</code> means <code v-pre>&lt;Ctrl-w&gt; + k</code></li>
<li><code v-pre>&lt;Ctrl-l&gt;</code> means <code v-pre>&lt;Ctrl-w&gt; + l</code></li>
</ul>
</li>
<li><code v-pre>:noh</code>: remove highlights matching patterns of search</li>
</ul>
<hr>
<h2 id="moving-faster" tabindex="-1"><a class="header-anchor" href="#moving-faster" aria-hidden="true">#</a> Moving faster</h2>
<h3 id="vim-sneak" tabindex="-1"><a class="header-anchor" href="#vim-sneak" aria-hidden="true">#</a> Vim-Sneak</h3>
<ul>
<li>setting name: <code v-pre>vim.sneak</code></li>
<li><code v-pre>s{char}{char}</code>: cursor goto first occurrence of that two char sequence</li>
<li><code v-pre>;</code> for next occurrence or <code v-pre>,</code> for previous one</li>
<li><code v-pre>S{char}{char}</code>: similar but backward</li>
<li><code v-pre>{operator}z{char}{char}</code>: apply operator over the text traversed by the sneak motion</li>
<li>vim-sneak use <code v-pre>z</code> instead of <code v-pre>s</code> with other operators, because <code v-pre>s</code> is already taken by vim-surround</li>
</ul>
<h3 id="vim-easymotion" tabindex="-1"><a class="header-anchor" href="#vim-easymotion" aria-hidden="true">#</a> Vim-EasyMotion</h3>
<ul>
<li>setting name: <code v-pre>vim.easymotion</code></li>
<li>All the key below need to add <code v-pre>&lt;leader&gt;&lt;leader&gt;</code> first</li>
<li><code v-pre>w</code>: goto start of words</li>
<li><code v-pre>b</code>: goto start of words backwards</li>
<li><code v-pre>bdw</code>: goto start of words everywhere <em>(USELESS)</em>
<ul>
<li>The <code v-pre>bd</code> stands for bidirectional</li>
</ul>
</li>
<li><code v-pre>e</code>: goto end of words</li>
<li><code v-pre>ge</code>: goto end of words backwords</li>
<li><code v-pre>bdw</code>: goto end of words everywhere <em>(USELESS)</em></li>
<li><code v-pre>j</code>: goto beginning of lines</li>
<li><code v-pre>k</code>: goto beginning of lines backwards</li>
<li><code v-pre>f{char}</code>: find char</li>
<li><code v-pre>F{char}</code>: find char backwards</li>
<li><code v-pre>t{char}</code>: until char</li>
<li><code v-pre>T{char}</code>: until char backwards</li>
<li><code v-pre>s{char}</code>: search char everywhere</li>
<li>In VSCodeVim, EasyMotion only support moving around but can't be combined with operators. Traditional Vim support.</li>
</ul>
<hr>
<h2 id="multiple-cursors" tabindex="-1"><a class="header-anchor" href="#multiple-cursors" aria-hidden="true">#</a> Multiple cursors</h2>
<ul>
<li>steps of add multiple cursors based on word search:</li>
</ul>
<ol>
<li>move cursor on aim word</li>
<li>type <code v-pre>&lt;CMD-D&gt; / gb</code> to add cursor, and repeat it to auto select same word</li>
<li>perform actions or turn to NORMAL mode to perform</li>
</ol>
<ul>
<li>steps of extend cursors up or down in consecutive lines:</li>
</ul>
<ol>
<li>type <code v-pre>&lt;Ctrl-V&gt;</code> for VISUAL-block mode</li>
<li>use <code v-pre>j / k</code> to select rectangle of text</li>
<li>type <code v-pre>I</code> to insert or <code v-pre>A</code> to append text</li>
<li>alternatively, use any NORMAL mode commands to operate the selection</li>
</ol>
</div></template>


