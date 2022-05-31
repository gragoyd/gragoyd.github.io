---
title: 动态规划
icon: function
category:
  - algorithm
tag:
  - DP
---

## 基本类型

### [不同的二叉搜索树][00]

::: info Description
给定整数`n`，求恰由`n`个节点组成且节点值从`1`到`n`互不相同的二叉搜索树数量
:::
::: details Solution
对于节点序列 $1, \cdots, n$ ，可以遍历取特定数 $i$ 作为根节点，则左右子树节点序列为 $1, \cdots, (i-1)$ 和 $(i+1),\cdots,n$ ，则可以继续递归遍历尝试构建搜索子树，且如此构建的树的唯一性由根节点的不同来保证。由于原问题可以分解为俩规模较小的子问题，且子问题的解可复用，故考虑用动态规划求解，定义：

- $G(n)$ 代表序列长度为 $n$ 的不同搜索树数量
- $F(i,n)$ 代表以 $i$ 为根节点且长度为 $n$ 的不同搜索树数量

显然有 $G(n)=\sum\limits^n_{i=1}{F(i,n)}$ ，且边界条件 $G(0)=G(1)=1$ 。而对于以 $i$ 为根节点的搜索树来说，其不同子树结构数量为左右子树节点集合的笛卡尔积，即 $F(i,n)=G(i-1)\cdot G(n-i)$ ，故最终得到 $G(n)=\sum\limits^n_{i=1}{G(i-1)\cdot G(n-i)}$ ，计算答案时只需从小到大计算 $G(n)$ 即可

实际上上述推导的函数为卡塔兰数 $C_n$，其简便计算的定义为 $C_{n+1}=\frac{2(2n+1)}{n+2}C_n,\ C_0=1$

```java
class Solution {
	public int numTrees(int n) {
		int[] res = new int[n + 1];
		res[0] = res[1] = 1;
		for (int k = 2; k <= n; ++k)
			for (int i = 1; i <= k; ++i)
				res[k] += res[i - 1] * res[k - i];
		return res[n];
	}
}
```

:::

## 背包问题

### [组合总和 IV][01]

::: info Description
给定目标值和元素各异的数组，求出数组中总和为目标值的组合的个数（元素可重复使用）
:::
::: details Solution
此类问题可以用回溯把每种组合模拟出来统计，但大可不必，因为只需求出数量，故可看作与顺序相关的完全背包问题，直接套用模版

```java
class Solution {
	public int combinationSum4(int[] nums, int target) {
		int[] dp = new int[target + 1];
		dp[0] = 1;
		for (int j = 1; j <= target; j++) 
			for (int num : nums) 
				if (j >= num)
					dp[j] = dp[j] + dp[j - num];
		return dp[target];
	}
}
```

:::
<!-- ------------------------------------------------------- -->
[00]:https://leetcode.cn/problems/unique-binary-search-trees/
[01]:https://leetcode.cn/problems/combination-sum-iv/
