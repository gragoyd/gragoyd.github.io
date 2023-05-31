---
title: 搜索
icon: search
category:
  - algorithm
tag:
  - DFS
  - BFS
---

### [01 矩阵][00]

::: info Description
矩阵值为 0 或 1，找出各 1 最近的 0
:::

:::: details Solution
::: tabs
@tab 联合 BFS
以所有 0 为整体向外 BFS。即首先将所有 0 入队，再常规 BFS

```java
class Solution {
	public int[][] updateMatrix(int[][] mat) {
		int[] dr = { 0, 0, 1, -1 };
		int[] dc = { -1, 1, 0, 0 };
		int m = mat.length, n = mat[0].length;
		int[][] dist = new int[m][n];
		boolean[][] visited = new boolean[m][n];
		Queue<int[]> que = new LinkedList<>();
		// add all zero
		for (int i = 0; i < m; ++i)
			for (int j = 0; j < n; ++j)
				if (mat[i][j] == 0) {
					que.offer(new int[] { i, j });
					visited[i][j] = true;
				}
		// bfs
		while (!que.isEmpty()) {
			int[] cur = que.poll();
			for (int k = 0; k < 4; ++k) {
				int row = cur[0] + dr[k];
				int col = cur[1] + dc[k];
				if (row >= 0 && row < m && col >= 0 && col < n && !visited[row][col]) {
					dist[row][col] = dist[cur[0]][cur[1]] + 1;
					visited[row][col] = true;
					que.offer(new int[] { row, col });
				}
			}
		}
		return dist;
	}
}
```

@tab 分部 DP
从某个 0 开始分别往左上和右下 DP

设 $f(i,j)$ 为该格子到最近 0 的距离，则：

往左上：$f(i, j)=\min \{f(i+1, j),\ f(i, j+1)\}+1$

往右下：$f(i, j)=\min \{f(i-1, j),\ f(i, j-1)\}+1$

具体实现时，由于左上和右下方向都是遍历整个矩阵，所以可以覆盖掉左下和右上方向距离的搜索

```java
class Solution{
	public int[][] updateMatrix(int[][] mat) {
		int m = mat.length, n = mat[0].length;
		int[][] dist = new int[m][n];
		for (int i = 0; i < dist.length; ++i)
			Arrays.fill(dist[i], Integer.MAX_VALUE >> 1);
		// all zero
		for (int i = 0; i < m; ++i)
			for (int j = 0; j < n; ++j)
				if (mat[i][j] == 0)
					dist[i][j] = 0;
		// right down
		for (int i = 0; i < m; ++i)
			for (int j = 0; j < n; ++j) {
				if (i - 1 >= 0)
					dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
				if (j - 1 >= 0)
					dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
			}
		// left up
		for (int i = m - 1; i >= 0; --i)
			for (int j = n - 1; j >= 0; --j) {
				if (i + 1 < m)
					dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
				if (j + 1 < n)
					dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
			}
		return dist;
	}
}
```

:::
::::

### [打开转盘锁][01]

::: info Description
四位转盘锁初始为`0000`，每个转盘可转转为`0 ~ 9`（`0`与`9`相邻），但每次只能转一个转盘的相邻数字

另外给定若干转盘数位组合，在转至正确组合过程中不可遇到，问在此限制下解开锁的最少转动次数（无法解开则次数为-1）
:::

::: details Solution
不可简单地通过判断各位是否从两种方向转至正确位数是否都被限制来直接断定，因为某些位被限制的同时只需要至少其他一位不同即可绕过

故还是得通过搜索来判断，因为求最少转动次数，故用 BFS。对于每种组合，不同转动结果有 8 种，过程类似于图搜索，将搜索过的组合缓存标记（可以直接并在给定的限制组合集中）

值得一提的是在实现时，需要判断若`0000`本身就在限制组合中，则直接返回，否则需要将所有组合都搜一遍，达到极端最坏情况

```java
class Solution {
	public int openLock(String[] deadends, String target) {
		Set<String> set = new HashSet<>();
		for (String s : deadends)
			set.add(s);
		int count = 0;
		Queue<String> que = new LinkedList<>();
		if (!set.contains("0000"))
			que.offer("0000");
		while (!que.isEmpty()) {
			int size = que.size();
			while (size-- > 0) {
				String cur = que.poll();
				if (target.equals(cur))
					return count;
				if (!set.contains(cur)) {
					set.add(cur);
					for (String s : changeOne(cur))
						if (!set.contains(s))
							que.add(s);
				}
			}
			++count;
		}
		return -1;
	}

	private ArrayList<String> changeOne(String src) {
		ArrayList<String> res = new ArrayList<>();
		char[] data = src.toCharArray();
		for (int i = 0; i < 4; ++i) {
			int cur = data[i] - '0';
			data[i] = (char) ('0' + ((cur + 1) % 10));
			res.add(String.valueOf(data));
			data[i] = (char) ('0' + ((cur + 9) % 10));
			res.add(String.valueOf(data));
			data[i] = (char) ('0' + cur);
		}
		return res;
	}
}
```

:::

### [太平洋大西洋水流问题][02]

::: info Description
设矩阵左和上边界为太平洋，右和下边界为大西洋，矩阵元素表示海拔，其位置上的水可向四周等高或更低位置流，求所有能使水流向两个大洋的位置
:::

::: details Solution
若从各位置往边界搜固然可达，但在回溯过程中途径的位置复用性极差，故应从边界的各位置开始往高的地势搜同时记录位置向该大洋的可达性，最后遍历各位置收集可达两洋的位置

```java
class Solution {
	private int[][] dirs = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };
	private int[][] heights;
	private int m;
	private int n;
	private boolean[][] paci;
	private boolean[][] atla;

	public List<List<Integer>> pacificAtlantic(int[][] heights) {
		this.heights = heights;
		this.m = heights.length;
		this.n = heights[0].length;
		this.paci = new boolean[m][n];
		this.atla = new boolean[m][n];
		List<List<Integer>> res = new ArrayList<>();
		for (int i = 0; i < m; ++i) {
			dfs(i, 0, paci);
			dfs(i, n - 1, atla);
		}
		for (int i = 0; i < n; ++i) {
			dfs(0, i, paci);
			dfs(m - 1, i, atla);
		}
		for (int i = 0; i < m; ++i)
			for (int j = 0; j < n; ++j)
				if (paci[i][j] && atla[i][j])
					res.add(Arrays.asList(i, j));
		return res;
	}

	private void dfs(int row, int col, boolean[][] ocean) {
		ocean[row][col] = true;
		for (int[] d : dirs) {
			int r = row + d[0];
			int c = col + d[1];
			if (r >= 0 && r < m && c >= 0 && c < n && heights[r][c] >= heights[row][col] && !ocean[r][c])
				dfs(r, c, ocean);
		}
	}
}
```

:::

### [二进制矩阵中的最短路径][03]

::: info Description
求总左上角沿全 0 路径到右下角的最短路径长度（可以斜着走）
:::
::: details Solution
求最短路径用 BFS

搜索时用另一矩阵记录当前位置是否被访问过。之所以 BFS 也能像 DFS 回溯那般用矩阵记录，是因为若即将遍历的位置已经被访问过，则说明存在不长于当前路径的另一更优路径，当前路径再经过已经访问过的位置也无意义

值得注意的是实现时需确保位置入队同时标记为已访问，不可在出队寻找相邻下一位置时再标记，因为即使同一批入队，因为相邻位置的相邻位置可以是同一个，很可能会造成同一位置重复入队情况

```java
class Solution {
	public int shortestPathBinaryMatrix(int[][] grid) {
		if (grid[0][0] == 0) {
			int res = 1;
			int n = grid.length;
			if (n == 1)
				return 1;
			boolean[][] visited = new boolean[n][n];
			int[][] dirs = { { -1, -1 }, { -1, 0 }, { -1, 1 }, { 0, -1 }, { 0, 0 }, { 0, 1 }, { 1, -1 }, { 1, 0 },
					{ 1, 1 } };
			Queue<int[]> que = new LinkedList<>();
			que.offer(new int[] { 0, 0 });
			visited[0][0] = true;
			while (!que.isEmpty()) {
				int size = que.size();
				while (size-- > 0) {
					int[] cur = que.poll();
					for (int[] d : dirs) {
						int r = cur[0] + d[0];
						int c = cur[1] + d[1];
						if (r >= 0 && r < n && c >= 0 && c < n && grid[r][c] == 0 && !visited[r][c]) {
							if (r == n - 1 && c == n - 1)
								return res + 1;
							visited[r][c] = true;
							que.offer(new int[] { r, c });
						}
					}
				}
				++res;
			}
		}
		return -1;
	}
}
```

:::

### [判断二分图][04]

::: info Description
给定无向图和连接情况数组（二维数组`graph[u]`中为邻接的不同节点），但不保证图连通（可能存在节点之间无连通路径的情况），判断该图是否为二分图

二分图：所有节点分为两个独立集合，每条边连接的俩节点都属于不同集合
:::
:::: details Solution
::: tabs
@tab DFS
按照相邻节点颜色不同的限制对节点染色，若能成功染色所有节点则是二分图

此为 DFS 实现，注意剪枝。而且由于图可能不连通，所以主要函数中得确保所有节点都有机会进行染色

```java
class Solution {
	private int[][] graph;
	private int[] part; // 0, 1, 2
	private boolean valid = true;

	public boolean isBipartite(int[][] graph) {
		this.graph = graph;
		part = new int[graph.length];
		for (int i = 0; i < graph.length; ++i)
			if (part[i] == 0) {
				part[i] = 1;
				dfs(i);
			}
		return valid;
	}

	private void dfs(int cur) {
		for (int n : graph[cur]) {
			if (part[n] == part[cur]) {
				valid = false;
				return;
			} else if (part[n] == 0) {
				part[n] = part[cur] == 1 ? 2 : 1;
				dfs(n);
				if (!valid) // 剪枝
					return;
			} // 颜色正好不同则正好不管
		}
	}
}
```

@tab BFS

```java
class Solution {
	public boolean isBipartite(int[][] graph) {
		int[] part = new int[graph.length];
		Queue<Integer> que = new LinkedList<>();
		for (int i = 0; i < graph.length; ++i)
			if (part[i] == 0) {
				part[i] = 1;
				que.offer(i);
				while (!que.isEmpty()) {
					int cur = que.poll();
					for (int n : graph[cur])
						if (part[n] == part[cur])
							return false;
						else if (part[n] == 0) {
							part[n] = part[cur] == 1 ? 2 : 1;
							que.offer(n);
						}
				}
			}
		return true;
	}
}
```

:::
::::
<!-- -------------------------- -->
[00]:https://leetcode-cn.com/problems/01-matrix/
[01]:https://leetcode-cn.com/problems/open-the-lock/
[02]:https://leetcode-cn.com/problems/pacific-atlantic-water-flow/
[03]:https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
[04]:https://leetcode-cn.com/problems/is-graph-bipartite/
