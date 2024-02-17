---
title: Vim 简明教程
---

## Normal Mode

### Motions

- `j`: next line
- `gj`: next wrapped line
- `k`: previous line
- `gk`: previous wrapped line
- `h`: back char
- `l`: next char
- `w`: next word, separated by space and symbol
- `W`: next word, separated by space
- `e`: word end, separated by space and symbol
- `E`: word end, separated by space
- `b`: previous word, separated by space and symbol
- `B`: previous word, separated by space
- `ge`: previous word end, separated by space and symbol
- `gE`: previous word end, separated by space

---

- `f{char} / F{char}`: find `char` after / behind cursor
- `t{char} / T{char}`: until `char` after / behind cursor
- `; / ,`: repeat last char search towards next / previous

---

- `0`: to first char of line
- `^`: to first non-blank char of line
- `$`: to end of line
- `g_`: to non-blank char end of line

---

- `}`: jump paragraph downwards
- `{`: jump paragraph upwards
- `[{`: goto start of cursor block
- `]}`: goto end of cursor block
- `Ctrl + D`: move down half page
- `Ctrl + U`: move up half page
- `Ctrl + F`: move down page
- `Ctrl + B`: move up page
- `Ctrl + E`: move down one line
- `Ctrl + Y`: move up one line
- `n%`: goto n% of whole file
- `zz`: move cursor line to center
- `zt`: move cursor line to top
- `zb`: move cursor line to bottom

---

- `/{pattern}`: search forward
- `?{pattern}`: search backward
  - `<Enter>`: end pattern input and start match
  - `{pattern}` can be regular expression
- `n / N`: next / previous match

---

- `/<Enter>` / `?<Enter>`: last forward / backward search
- `*`: search crusor word forward
- `#`: search crusor word backward

---

- `{count}{command}`: multiply effect of command

---

- `gd`: goto local variable definition
- `gD`: goto global variable definition
- `gf`: goto file in import

---

- `gg`: goto file top
- `{line}gg`: goto special line
- `G`: goto file end
- `H/M/L`: move cursor to top/middle/bottom of view
- `{line}G` / `:{line}<Enter>`: goto start of {line}
- `+` / `<Enter>`: goto non-blank char of next line
- `-`: goto non-blank char of previous line
- `%`: goto matching `({[]})`

---

### Operators

- `{opeartor}{count}{motion}` / `{count}{operator}{motion}`
  - eg: `d5j`, `df'`, `dt'`, `d/hello`, `ggdG`, `3c/hello`, `ggyG`, `gUw`, `4f"`, `d0`
- Operators:
  - `c`: change [cut and switch to insert mode]
  - `y`: yank (copy)
  - `d`: cut
  - `p`: paste after cursor
  - `=`: format code
  - `g~`: switch uppercase or lowercase [`gU` or `gu`]
  - `>`: add indentation
  - `<`: remove indentation

---

- Double operator to perform on whole line.
  - eg: `dd`, `cc`, `g~~`
- Capitalize operator to perform stronger or alternate.
  - `D`: delete from cursor to end of line
  - `cc`: change whole line
  - `C`: change from cursor to end of line
  - `Y / yy`: copy whole line
  - `P`: paste before cursor
  - `>>`: shift line right
  - `<<`: shift line left
  - `==`: format line

---

- `{i|a}{text-object-id}`
  - `i`: inner [text object and whitespace]
  - `a`: around [text object without whitespace]
- `{operator}{i|a}{text-object}`
  - `w`: word
  - `s`: sentence
  - `p`: paragraph
  - `b / (`: block surrounded by ()
  - `B / {`: block surrounded by {}
  - `" / '`: quoted text [also `]
  - `< / >`: block surrounded by `<>`
  - `[ / ]`: block surrounded by `[]`
  - `t`: tag [for HTML]
- eg: `daw`, `ciw`, `das`, `da"`, `ci"`, `dap`, `dab / da( / da)`, `daB / da{ / da}`

---

- `.`: repeat last change
- `x / dl`: cut cursor char
- `X / dh`: cut char before cursor
- `s / ch`: cut cursor char and switch insert mode
- `r`: replace cursor char
- `R`: replace words after cursor
- `~`: switch char case

---

- `u`: undo last change
- `{count}u`: undo last `count` changes
- `Crtl + R`: redo last change

---

### NORMAL mode trikies

- `i`: goto INSERT mode before cursor
- `a`: goto INSERT mode after cursor
- `I`: goto INSERT mode at the beginning of line
- `A`: goto INSERT mode at the line end
- `o`: insert a new line below the current line and goto INSERT mode
- `O`: insert a new line above the current line and goto INSERT mode
- `gi`: goto INSERT mode at the last place changed

### INSERT mode trikies

- `Ctrl + h`: delete last char typed
- `Ctrl + w`: delete last word typed
- `Ctrl + u`: delete last line typed

---

## VISUAL mode

- `v`: VISUAL mode - char
- `V`: VISUAL mode - linewise
- `Ctrl + V`: VISUAL - rect block

---

- `gn / gN`:
  - select the match in VISUAL mode if cursor on top of search match
  - extend current selection until the end of the next much if in VISUAL mode
  - operate on the next match if in Operator-pending mode, that's `{operator}gn`

---

## Copying and Pasting

- `yl`: yanka a letter
- `yh`: yanka a letter before cursor
- `yaw`: yank a word
- `yas`: yank a sentence
- `yi(`: yank all in (
- `gp / gP`: same as `p / P`, then put cursor after the pasted selection
- yank characters or lines will be different when pasting, around cursor or at new line.
- `yy{count}p`: duplicate `count` lines
- `ddp / ddP`: swap lines
- `xp / dlp`: swap characters

---

## Registers

### in NORMAL mode

- `"{register name}{y / d / c}{motion}`
  - `"`: the unnamed register which is default
  - `a ~ z`: the named registers which can be used explicitly
  - `0`: yank register that store the last thing yanked
  - `1 ~ 9`: cut register that store the last 9 things cut by delete or change command
  - eg: `"ayas` -> `"ap`
- `:reg {register}`: inspect specific register content

### in INSERT mode

- `Ctrl-R {register}`
- eg: `Ctrl-R "`, `Ctrl-R a`, `Ctrl-R 0`
- can paste a line just after cursor in INSERT mode

---

## Command-line mode

- **Ex command**: start with `:` and **search pattern**: start with `/` or `?`
- `:e / :edit {relative-path-to-file}`: open or create file
- `:w / :write`: save file (soft command)
- `:q / :quit`: close file (soft command)
- `!`: combine with other soft command to force execute
- `:w!`: save file even if readonly
- `:q!`: close file without saving
- `:wq`: save and close file
- `:wa / :wall`: save all files
- `:qa / :qall`: close all files
- `:wqa / :wqall`: save and close all files
- `:qa! / :qall!`: close all files without saving
- `:![command]`: run command in shell temporarily

---

- `:[range]command[options]`: text-editing Ex command
- `:[range]d [register]`: delete lines and put them to register
  - eg: `10,12d a`: delete lines 10 ~ 12 and put them inside the `a` register
- some ways to express range extremes
  - numbers: `:10,12d`
  - offsets: `:10,+2d`
  - `.` represent current line: `:.,+2d`
  - `%` represent whole line: `:%d`
  - `0` represent beginning of file: `:0,+10d`
  - `$` represent end of file: `:.,$d`
- after make text selection in VISUAL mode and then type `:`, line area will pre-populated with `:'<,'>` so that can continue input command like `d`
- Ex commands allow apply command over multiple lines with no move of cursor. If need change multiple lines, consider using Ex commands.
- useful Ex commands: `:yank`, `:put`, `:copy`, `:move`
- `@:`: repeat last command
- `@@`: repeat again after `@:`

---

- `:substitute`: to substitute text
- `:[range]s/{pattern}/{substitute}/{flags}`
  - `range`: define range to apply substitute
  - `pattern`: search pattern that describe the text to be changed. `/{pattern}` support regular expression
  - `substitute`: the text to be substitute
  - `flags`: set options that configure substitution
- eg:
  - `:s/led/gold`: replace the first occurrence of `led` in the current line with `gold`
  - `:s/led/gold/g`: change all occurrences in the current line (`g` means global)
  - `:%s/led/gold/g`: change all occurrences for whole file
- more flags: `i` for case insensitive search, `c` to confirm each and every substitution
- `:%s/^#//`: change the indentation level of all titles in markdown file
  - `%`: for whole file
  - `s`: substitute
  - `^#`: any `#` at the beginning of a line
  - `//`: for an empty char
- VSCodeVim setting has changed, `Vim:Gdefault` opposite the `/g` flag

---

## Splits and Tabs

- open file in horizontal split:
  - `:sp {relative-path-to-file}`
  - `<Ctrl-W> S`
- open file in vertical split:
  - `:vsp {relative-path-to-file}`
  - `<Ctrl-W> V`
- After creating split, type `CMD-P` to open new file
- A split window can be split again
- `<Ctrl-W> + h / j / k / l`: move between splits

---

- `:tabnew {file}`: open file in new tab
- `:tabn / :tabnext`: goto next tab
- `:tabp / :tabprevious`: goto previous tab
- `:tabo / :tabonly`: close all other tabs

---

## Vim-surround built-in plugin

- `ds / cs / ys{count}{motion}`
- `ds{char}`: delete surrounding `char`
  - eg: `ds'`
- `cs{old}{new}`: change surrounding `old` to `new`
  - eg: `cs'"`
- `ys{motion}{char}`: add surrounding
  - eg: `ysaptli>`: to surround paragraph with an `<li>` tag
- in VISUAL mode, select text then type `S{char}`, selection text will be surrounded by `char`

---

## Custom mappings

- setting name: `vim.normalModeKeyBindingsNonRescursive`
- leader key: `\` change to `<Space>`
- `J` means `5j`
- `K` means `5k`
- `<Leader> - j` means `J`: join lines together
- switch between splits:
  - `<Ctrl-h>` means `<Ctrl-w> + h`
  - `<Ctrl-j>` means `<Ctrl-w> + j`
  - `<Ctrl-k>` means `<Ctrl-w> + k`
  - `<Ctrl-l>` means `<Ctrl-w> + l`
- `:noh`: remove highlights matching patterns of search

---

## Moving faster

### Vim-Sneak

- setting name: `vim.sneak`
- `s{char}{char}`: cursor goto first occurrence of that two char sequence
- `;` for next occurrence or `,` for previous one
- `S{char}{char}`: similar but backward
- `{operator}z{char}{char}`: apply operator over the text traversed by the sneak motion
- vim-sneak use `z` instead of `s` with other operators, because `s` is already taken by vim-surround

### Vim-EasyMotion

- setting name: `vim.easymotion`
- All the key below need to add `<leader><leader>` first
- `w`: goto start of words
- `b`: goto start of words backwards
- `bdw`: goto start of words everywhere *(USELESS)*
  - The `bd` stands for bidirectional
- `e`: goto end of words
- `ge`: goto end of words backwords
- `bdw`: goto end of words everywhere *(USELESS)*
- `j`: goto beginning of lines
- `k`: goto beginning of lines backwards
- `f{char}`: find char
- `F{char}`: find char backwards
- `t{char}`: until char
- `T{char}`: until char backwards
- `s{char}`: search char everywhere
- In VSCodeVim, EasyMotion only support moving around but can't be combined with operators. Traditional Vim support.

---

## Multiple cursors

- steps of add multiple cursors based on word search:

 1. move cursor on aim word
 2. type `<CMD-D> / gb` to add cursor, and repeat it to auto select same word
 3. perform actions or turn to NORMAL mode to perform

- steps of extend cursors up or down in consecutive lines:

 1. type `<Ctrl-V>` for VISUAL-block mode
 2. use `j / k` to select rectangle of text
 3. type `I` to insert or `A` to append text
 4. alternatively, use any NORMAL mode commands to operate the selection
