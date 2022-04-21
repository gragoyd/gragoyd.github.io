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

::: details Solution1
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

:::

::: details Solution2
从某个 0 开始分别往左上和右下 DP

设$f(i,j)$为该格子到最近 0 的距离，则：

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

<!-- -------------------------- -->
[00]:https://leetcode-cn.com/problems/01-matrix/
