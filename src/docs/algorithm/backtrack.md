---
title: 回溯
icon: wrap
category:
  - algorithm
tag:
  - backtrack
---

### [不同的二叉搜索树 II][00]

::: info Description
给定整数`n`，求恰由`n`个节点组成且节点值从`1`到`n`互不相同的二叉搜索树数量
:::
::: details Solution
[不同的二叉搜索树][01] 只是要求统计不同搜索树的数量，但此题需要将所有树实际构造出来，故得用回溯方式。

回溯时按照遍历根节点递归分左右子树的思路依旧：对于节点序列 $1, \cdots, n$ ，可以遍历取特定数 $i$ 作为根节点，则左右子树节点序列为 $1, \cdots, (i-1)$ 和 $(i+1),\cdots,n$ ，则可以继续递归遍历尝试构建搜索子树，且如此构建的树的唯一性由根节点的不同来保证。

对于我来说此题较难的地方在于构建回溯的代码形式，回溯函数的返回值不应是一般的单个节点，而应是各子树的根节点列表，因为左右子树的笛卡尔积会导致即使单个值作为根节点，因为左右子树的结构不同，也常会实际构造多棵树。

由于回溯函数返回的是以某范围的值为根节点的所有种类的搜索树，故对于上一层来说，只需要模拟笛卡尔积的运算即可，也就是说对于特定的值，以其为根节点的所有种类的搜索树的构造就是，每次从返回的左右子搜索树列表中挑选一对有别于之前的，拼成一颗新搜索树再加到本级回溯函数的返回列表中即可

```java
class Solution {
	public List<TreeNode> generateTrees(int n) {
		if (n == 0)
			return new ArrayList<>();
		return build(1, n);
	}

	private List<TreeNode> build(int left, int right) {
		List<TreeNode> allTrees = new ArrayList<>();
		if (left > right) {
			allTrees.add(null);
			return allTrees;
		}
		for (int i = left; i <= right; ++i) {
			List<TreeNode> leftTrees = build(left, i - 1);
			List<TreeNode> rightTrees = build(i + 1, right);
			for (TreeNode leftNode : leftTrees) {
				for (TreeNode rightNode : rightTrees) {
					TreeNode node = new TreeNode(i);
					node.left = leftNode;
					node.right = rightNode;
					allTrees.add(node);
				}
			}
		}
		return allTrees;
	}
}
```

:::

### [组合总和 II][02]

::: info Description
给定目标值和含重复数字的数组，找出数组中所有和为目标值的不同子集。数组中的每个数字在每个子集中只能使用一次，但重复数字可以一起使用
:::
::: details Solution
此题与基础的同一集合中求不同组合所不同的是可以含重复数字，因为不同的重复数字在回溯时不算同一个，但在最后求得组合结果时显然会因为数值相同算作重复，所以考虑先排序数组，将重复的数字并在一起在相邻的层进行连续处理。

鉴于重复的组合是因为同层遍历时用了个体不同但数值相同的数，所以具体实现的时候只需要在同层遍历时进行判断，限定相同的数只能在最开始的时候用一次即可。并且由于下一层不关注起始索引之前的路径，所以也并不会影响到寻找需要同时用到多个重复数的子集

```java
class Solution {
    private List<List<Integer>> res = new ArrayList<>();
    private LinkedList<Integer> path = new LinkedList<>();

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        dfs(candidates, target, 0);
        return res;
    }

    private void dfs(int[] candidates, int target, int start) {
        if (target == 0) {
            res.add(new ArrayList<>(path));
            return;
        }
        for (int i = start; i < candidates.length; ++i) {
            if (i > start && candidates[i] == candidates[i - 1])
                continue;
            if (target < candidates[i])
                break;
            path.add(candidates[i]);
            dfs(candidates, target - candidates[i], i + 1);
            path.removeLast();
        }
    }
}
```

:::

### [递增子序列][03]

::: info Description

:::
::: details Solution
乍一看能套用 [组合总和 II][02] 的模版，但由于此题求递增子序列要求元素相对位置不能变，所以无法通过排序将重复数字并到一块，即使通过改变同层遍历的重复判定条件为`if (i > start && (nums[i] == nums[i - 1] || nums[i] == nums[start]))`也只能滤掉起始索引为首个重复值的分块连续重复值情况（如`1, 2, 3, 1, 1`）。而对于分块连续重复值的起始索引不是重复值的情况，若想完全去除同层重复，则需要确保当前遍历到的值与之前所有值都不同，因为路径也无法提供同层的帮助，故做到这点势必会导致增加额外的开销，要么每次遍历查找费时，要么用哈希表费空间（其实也能接受），所以此题再强行套用上述模版已不再是最优方案。

所以引入另一套更为通用的模版思想，即一层仅考虑当前位置数字的选择与否，若不选则直接进入下一层递归，若选则按回溯规则在下一层递归前后进行处理和反处理。对于此题，递增子序列的合法性由仅把不小于路径末尾的值加入来保证，而导致重复序列的原因是原数组中可能存在不连续分布的重复值，鉴于选取的子序列也不一定在原数组中连续，故以上一个选取的数（路径末尾值）作为前一个数，与当前数进行选取与否的考虑。具体来说，导致重复的原因是选了前一个数没选当前数和没选前一个数选了当前数这两种情况实质上等效，所以需要加上限制条件禁止其中一种。鉴于存在连续多个重复值的情况，令限制条件为仅当前一个数与当前数不同时才考虑不选当前数（若相同则必选当前数，因为前一个数可能因为其再前一个数不同而没选）。因为此思路是一路做选择直到数据末尾，会自然涵盖所有情况，所以递归终止条件为递归到达数据末尾

```java
class Solution {
	private List<List<Integer>> res = new ArrayList<>();
	private List<Integer> path = new ArrayList<>();
	private int[] nums;

	public List<List<Integer>> findSubsequences(int[] nums) {
		this.nums = nums;
		dfs(0, Integer.MIN_VALUE);
		return res;
	}

	private void dfs(int cur, int last) {
		if (cur == nums.length) {
			if (path.size() > 1)
				res.add(new ArrayList<>(path));
			return;
		}
		if (last <= nums[cur]) { // choose
			path.add(nums[cur]);
			dfs(cur + 1, nums[cur]);
			path.remove(path.size() - 1);
		}
		if (last != nums[cur]) // not choose
			dfs(cur + 1, last);
	}
}
```

:::

### [剑指 Offer 38. 字符串的排列][04]

::: info Description
求给定含重复字符的字符串所有字符的所有排列
:::
::: details Solution
类比之前 [组合总和 II][02] 中求组合的回溯模版，此题是求所有排列而非所有组合，即每个位置都是从本次排列所有还未使用的字符中挑选一个，所以在每层回溯函数中待选的字符并不需要从某个起始索引开始，而是从头开始选一个未使用的，所以需要标记数组来记录本次排列哪些字符已经用过。此外还有不同的重复字符多次排列的结果重复问题，因为原始集合中含重复值，故参考组合的处理方式，先将字符按字典序排序以把相同字符并到一起，在同层遍历时保证对于多个重复的字符，只会用还未使用的部分中最左边的那个

```java
class Solution {
	private List<String> res = new ArrayList<>();
	private StringBuilder path = new StringBuilder();
	private boolean[] used;

	public String[] permutation(String s) {
		used = new boolean[s.length()];
		char[] str = s.toCharArray();
		Arrays.sort(str);
		dfs(str);
		String[] result = new String[res.size()];
		for (int i = 0; i < res.size(); ++i)
			result[i] = res.get(i);
		return result;
	}

	private void dfs(char[] str) {
		if (path.length() == str.length) {
			res.add(path.toString());
			return;
		}
		for (int i = 0; i < str.length; ++i) {
			if (used[i] || (i > 0 && str[i - 1] == str[i] && !used[i - 1]))
				continue;
			used[i] = true;
			path.append(str[i]);
			dfs(str);
			path.deleteCharAt(path.length() - 1);
			used[i] = false;
		}
	}
}
```

:::

### [全排列][05]

::: info Description
求给定不含重复元素的数组的全排列
:::
::: details Solution
此题不含重复元素，比含重复元素的要少排序和回溯判重步骤，用全排列的回溯模版也挺容易解，但还有另一种不需要标记数组的回溯解法。

在回溯全过程中维护动态变化的数组，该数组被一个标记索引分为两部分，左边为已经填入的元素，右边为待填入的元素，其本身所指为当前待填的位置。在选择元素加入全排列时，每次都从右边选一个，将标记索引指向的数与选中的数互换，如此来保证进入下一层时标记索引左侧的数都是已选择的，等回溯时再换回来撤销处理。

具体来说，标记索引初始时在最左边，每向下一层就向右移动一位；而在同一层中，另起一个索引变量用来遍历标记索引右侧所有元素，遍历过程中将标记索引与当前元素换位置，然后进入下一层，回溯时再换回来。当标记索引移动到最右边时就达成了一种全排列，将当前排列复制一份加入到答案中

```java
class Solution {
	private List<List<Integer>> res = new ArrayList<>();
	private List<Integer> dynamic = new ArrayList<>();

	public List<List<Integer>> permute(int[] nums) {
		for (int num : nums)
			dynamic.add(num);
		backtrack(nums, 0);
		return res;
	}

	private void backtrack(int[] nums, int div) {
		if (div == nums.length)
			res.add(new ArrayList<>(dynamic));
		for (int i = div; i < nums.length; ++i) {
			Collections.swap(dynamic, i, div);
			backtrack(nums, div + 1);
			Collections.swap(dynamic, i, div);
		}
	}
}
```

:::

### [N 皇后][06]

::: info Description
将`n`个皇后放入`n*n`的棋盘中，要求一行、一列、一条斜线内都只能存在一个皇后
:::
::: details Solution
标准的回溯搜索题，就是一个一个格子往后试验，放置成功的话就进入下一层继续搜索，但此题有几个针对性的小技巧和几个需要注意的点。

每个到一个格子都需要进行放置的合法性检查，若每次都进行行、列和两种方向斜线（斜杠和反斜杠两种方向）的遍历查找肯定很慢，由题目条件可知每行、每列、每条斜线有且仅有一个皇后，所以应当存储并维护每行、每列、每条斜线的放置状态，这样对于每个格子都可快速判断能否放置，从而在大量的搜索中节约大量时间。

行和列很容易解决状态记录的编号问题，但两种方向的斜线就稍显麻烦。只需要把每行每列的索引写标出来再画出斜线，就会意识到很像坐标系中的一次函数，实际上，斜杠方向同一斜线上所有格子行和列相加为相同值，反斜杠方向同一斜线上所有格子行和列相减为相同值。所以我们可以将两种方向的斜线分开编号，以上述的特定值来区分各斜线。

对于各皇后具体放置位置的记录，实际上可以仅用一维数组存储（第`i`行的皇后在第`queens[i]`列），并且这样记录也恰好契合每层搜索基于行的形式，即同层仅进行列的遍历以寻找能放置的格子而不同层搜索不同行

```java
class Solution {
    private List<List<String>> result = new ArrayList<>();
    private int[] queens; // column of each row
    private boolean[] col; // column has queen?
    private boolean[] diag1; // diag-1 has queen?
    private boolean[] diag2; // diag-2 has queen?

    public List<List<String>> solveNQueens(int n) {
        queens = new int[n];
        col = new boolean[n];
        diag1 = new boolean[2 * n - 1];
        diag2 = new boolean[2 * n - 1];
        backtrack(0, n);
        return result;
    }

    private void backtrack(int row, int n) {
        if (row == n) {
            result.add(getBoard(n));
            return;
        }
        for (int c = 0; c < n; ++c) {
            int d1 = row - c + n - 1;
            int d2 = row + c;
            if (col[c] || diag1[d1] || diag2[d2])
                continue;
            col[c] = true;
            diag1[d1] = true;
            diag2[d2] = true;
            queens[row] = c;
            backtrack(row + 1, n);
            col[c] = false;
            diag1[d1] = false;
            diag2[d2] = false;
        }
    }

    private List<String> getBoard(int n) {
        List<String> res = new ArrayList<>();
        char[] row = new char[n];
        for (int i = 0; i < n; ++i)
            row[i] = '.';
        for (int i = 0; i < n; ++i) {
            row[queens[i]] = 'Q';
            res.add(String.valueOf(row));
            row[queens[i]] = '.';
        }
        return res;
    }
}
```

:::

### [解数独][07]

::: info Description
解`9*9`数独，要求每行、每列、每宫（`3*3`格子组成）都含数字`1~9`且无重复
:::
::: details Solution
标准的回溯搜索题，但有几个点。

回溯需要对大量的格子反复进行某数能否放置的检查，临时遍历每行、每列、每宫会耗费大量时间，故应存储并维护每行、每列、每宫内各数字是否已存在的状态以便快速查询，例如`row[i][k]`标识第`i`行中是否已存在数字`k`，`squ[i][j][k]`标识第`i`行的第`j`列个宫内是否已存在数字`k`。

可以在初始因维护上述状态而进行格子遍历时顺便将待填充的格子的位置记下来，以便后续能只对这些位置进行快速搜索而无需遍历其他已填充格子。还可以添加全局类型的是否完成标志，用于在完成全部填充之后快速结束程序

```java
class Solution {
	// 记录某行/列/宫是否已存在某数
	private boolean[][] row = new boolean[9][9];
	private boolean[][] col = new boolean[9][9];
	private boolean[][][] squ = new boolean[3][3][9];
	// 记录需填充坐标，节省遍历时间
	private List<int[]> empty = new ArrayList<>();
	private boolean finished = false;// 用于剪枝

	public void solveSudoku(char[][] board) {
		for (int i = 0; i < 9; i++) {
			for (int j = 0; j < 9; j++) {
				if (board[i][j] == '.')
					empty.add(new int[] { i, j });
				else {
					int idx = board[i][j] - '0' - 1;
					row[i][idx] = col[j][idx] = true;
					squ[i / 3][j / 3][idx] = true;
				}
			}
		}
		dfs(board, 0);
	}

	private void dfs(char[][] board, int idx) {
		if (idx == empty.size()) {
			finished = true;
			return;
		}
		int r = empty.get(idx)[0];
		int c = empty.get(idx)[1];
		for (int i = 0; !finished && i < 9; ++i) {
			if (!row[r][i] && !col[c][i] && !squ[r / 3][c / 3][i]) {
				board[r][c] = (char) (i + '0' + 1);
				row[r][i] = col[c][i] = squ[r / 3][c / 3][i] = true;
				dfs(board, idx + 1);
				row[r][i] = col[c][i] = squ[r / 3][c / 3][i] = false;
			}
		}
	}
}
```

:::

### [重新安排行程][08]

::: info Description
给定一组起点-终点对`tickets`，其中`tickets[i] = [from, to]`表示该段的起点和终点，在必须将每段行程都完成一遍且仅可完成一遍的条件下，规划出依次经过的点，求字典序最小的规划。要求规划的起始点必须是点`"JFK"`。给定数据保证至少存在一种合理规划
:::
::: details Solution
看题干是一道图论题，给出的条件构成一个连通有向图，且最多只存在一个节点的出度为零，题目要求的规划实际上是求该图的欧拉路径【从某节点出发沿有向边方向不重复地遍历图中所有的边】，并且求的是路径沿途节点名字典序最小的那条。

我们在搜索之前，可以将给定数据整理成拓扑排序那般的哈希表，以节点为键以其所有下游节点列表为值，考虑到题目要求字典序，那么向下游搜索的时候肯定优先选字典序小，故下游节点可用优先队列存储，每次出队的就是剩余下游节点中字典序最小的。其实用优先队列的话还要考虑向下搜索发现此路不通时回溯的操作，是否需要将出队的元素再添加回来，如果需要像普通回溯那样添加回来，那下次搜索出队的依旧是该节点，导致其他下游节点永不被进入搜索而死循环，所以加下来从整体考虑是否会有这个问题。

对于有向图的 DFS 来说，如果搜到了无下游节点的节点就会进行回溯。在本题条件下，从给定的起点开始按字典序优先进行 DFS，若不存在出度为零的节点则可以顺畅地按照字典序优先完成 DFS 得到规划，重点考虑存在导致搜索进入死胡同的节点，该点必须为规划的终点，即使此条件下路径的字典序不是最小的。在存在此类点的前提下，也分两种情况，一是按照字典序优先该点恰好排在最后，皆大欢喜，所以实际需要考虑的只有该点出现在搜索中间某处的情况。

仔细思考死胡同节点在 DFS 中间的过程，可以发现依次为向下深入到死胡同节点、回溯到有其他下游节点的节点、深入其他下游节点完成其他所有边的遍历这几个阶段，所以解决问题的关键其实将节点添加入规划的时机，不是在向下深入时而是在回溯时添加。在回溯时添加的话，可以发现顺序是死胡同节点向上到有其他下游节点的节点、其他能正常完成搜索的节点的逆序回溯，所以整个规划中节点添加的顺序恰好为字典序的逆序，最后只需将规划逆序即可，并且也不存在需要像普通回溯那般撤销处理的操作，也就不存在之前讨论的问题了

例如`tickets = [["JFK", "NRT"], ["JFK", "KUL"], ["NRT", "JFK"]]`，按照字典序 DFS 时就会先进入`"KUL"`这个死胡同节点，但是按照回溯时添加的解法，实际获得逆序规划的过程就是：

1. JFK -> KUL
2. path.add(KUL)
3. KUL return JFK
4. JFK -> NRT
5. NRT -> JFK
6. path.add(JFK)
7. JFK return NRT
8. path.add(NRT)
9. NRT return JFK
10. path.add(JFK)

```java
class Solution {
	private Map<String, PriorityQueue<String>> aim = new HashMap<>();
	private List<String> res = new ArrayList<>();

	public List<String> findItinerary(List<List<String>> tickets) {
		for (List<String> t : tickets) {
			PriorityQueue<String> to = aim.computeIfAbsent(t.get(0), x -> new PriorityQueue<>());
			to.add(t.get(1));
		}
		dfs("JFK");
		Collections.reverse(res);
		return res;
	}

	private void dfs(String cur) {
		PriorityQueue<String> to = aim.get(cur);
		if (to != null)
			while (!to.isEmpty())
				dfs(to.poll());
		res.add(cur);
	}
}
```

:::
<!-- ------------------------------------------------------- -->
[00]:https://leetcode.cn/problems/unique-binary-search-trees-ii/
[01]:https://leetcode.cn/problems/unique-binary-search-trees/
[02]:https://leetcode.cn/problems/combination-sum-ii/
[03]:https://leetcode.cn/problems/increasing-subsequences/
[04]:https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/
[05]:https://leetcode.cn/problems/permutations/
[06]:https://leetcode.cn/problems/n-queens/
[07]:https://leetcode.cn/problems/sudoku-solver/
[08]:https://leetcode.cn/problems/reconstruct-itinerary/
