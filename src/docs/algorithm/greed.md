---
title: 贪心
icon: bitbucket
category:
  - algorithm
tag:
  - greed
---

### [跳跃游戏][00]

::: info Description
给定非负整数数组，数组中的每个元素代表能从该位置往右移动的最大长度，初始位于数组的第一个下标，判断能否到达最后一个下标
:::
:::: details Solution
::: tabs
@tab 贪心
贪心思想，在遍历数组时，基于每个可达的位置来更新最远可达位置，每次更新后判断是否已经可达最后下标

```java
class Solution {
	public boolean canJump(int[] nums) {
		for (int i = 0, far = nums[0]; i <= far; ++i) {
			far = Math.max(far, i + nums[i]);
			if (far >= nums.length - 1)
				return true;
		}
		return false;
	}
}
```

@tab 模拟
实际上唯一导致最后下标不可达的障碍条件为，某元素为零且恰好基于其之前的所有元素都无法跨过它，所以可以遍历时遇到零再检测此零是否是不可逾越的。具体实现时从后往前检查，并且从倒数第二个元素开始检查，因为只要倒数第二个元素不是不可逾越的零，则必能到最后一个元素，而不必管最后一个元素是啥

```java
class Solution {
	public boolean canJump(int[] nums) {
		if (nums.length == 1)
			return true;
		for (int i = nums.length - 2; i >= 0; --i) {
			if (nums[i] == 0) {
				int j = i - 1;
				for (; j >= 0; --j) {
					if (j + nums[j] > i)
						break;
				}
				if (j < 0)
					return false;
			}
		}
		return true;
	}
}
```

:::
::::

### [跳跃游戏 II][01]

::: info Description
给定非负整数数组，数组中的每个元素代表能从该位置往右移动的最大长度，初始位于数组的第一个下标，给定数组保证能到达最后一个下标，求到达最后一个下标的最少移动次数
:::
::: details Solution
显然若想达到最少移动次数，每次都移动可达的最大长度并不一定最优，最远可达位置可以通过遍历数组每个元素时来更新，但需要关注的是哪些情况是需要实际移动才行的，显然是当遍历到远于上次移动的最远可达位置时，所以还需要记录上一次最远可达位置（即本次需要实际开始移动的位置），在每次更新最远距离之后，需要判断是否已经到下一个移动起始点了，如果到了才更新移动次数和移动起始点，因为到达下一个移动起始点才意味着需要实际移动一次来确保到达该位置，还没到下一个移动起始点时仍属于上次移动的覆盖范围，无需实际移动一次。

需要注意的是，由于最远距离的更新与移动次数的更新是异步的，所以不可简单通过每次更新后判断是否已经可达最后下标来直接结束，因为此时答案可能还未更新

```java
class Solution {
	public int jump(int[] nums) {
		int cnt = 0, far = 0, old = 0;
		for (int i = 0; i < nums.length - 1; ++i) {
			far = Math.max(far, i + nums[i]);
			if (i == old) {
				++cnt;
				old = far;
			}
		}
		return cnt;
	}
}
```

:::

### [加油站][02]

::: info Description
在一条环路上有`n`个加油站，给定两个整数数组`gas`和`cost`，其中`gas[i]`为`i`处加油站提供的汽油补给量，从加油站`i`开往加油站`i+1`需要消耗汽油的量为`cost[i]`。

现在驾驶一辆油箱容量无限的汽车从某个加油站出发，开始时油箱为空，若可以绕环路行驶一周则返回出发时加油站的编号（此情况保证解唯一），否则返回`-1`
:::
::: details Solution
先考虑有解的情况，题目隐含的限制条件是在任意一个加油站时油箱含量都不能为负，所以只需要在遍历时累加每个加油站的补给量与到下个加油站的消耗量之差，这个累加值即为油箱含量，若到某个加油站后为负，则说明前段旅程总消耗量为负，前一段旅程的起点不可能是解，应将邮箱清空从当前加油站的下一个加油站开始统计。

下面证明为啥上一段途径的每个加油站也都不可能是解。假设从 $x$ 出发最远只能到 $y$ ，则有

$$
\begin{cases}
	\sum\limits_{i=x}^y gas[i] < \sum\limits_{i=x}^y cost[i] &, \ x < y \\
	\sum\limits_{i=x}^z gas[i] \ge \sum\limits_{i=x}^z cost[i] &, \ \forall z\in [x, y)
\end{cases}
$$

所以对于 $\forall z\in (x, y]$ 有：

$$
\begin{split}
	\sum\limits_{i=z}^y gas[i] &= \sum\limits_{i=x}^y{gas[i]} - \sum\limits_{i=x}^{z-1}{gas[i]} \\
		&< \sum\limits_{i=x}^y cost[i] - \sum\limits_{i=x}^{z-1} cost[i] \\
		&= \sum\limits_{i=z}^y cost[i]
\end{split}
$$

即从 $[x ~ y]$ 范围内任意加油站都不能达到 $y$ 的下一个加油站，更不可能作为解。

再回过头来考虑是否有解的问题，显然若全程的累加量为负，则不能绕完一整圈，所以只需在遍历时额外增加一个不会阶段性重置的统计变量即可

```java
class Solution {
	public int canCompleteCircuit(int[] gas, int[] cost) {
		int start = 0, total = 0, sum = 0;
		for (int i = 0; i < gas.length; ++i) {
			int cur = gas[i] - cost[i];
			total += cur;
			sum += cur;
			if (sum < 0) {
				start = i + 1;
				sum = 0;
			}
		}
		return total < 0 ? -1 : start;
	}
}
```

:::

### [划分字母区间][03]

::: info Description
给定只含小写字母的字符串，要求将其划分为尽可能多的片段，且同一字母最多出现在一个片段中，返回一个表示每个字符串片段的长度的列表
:::
::: details Solution
按题目要求，需要令各划分的片段尽可能地短，所以得按照片段长度下限来划分，即片段内所有字母在字符串内所有的出现都在此片段内，所以自然需要先遍历一遍统计各字母的出现频率，由于是从头往后划分，只需要记录遍历到的字母最后一次出现的位置即可。统计完成后再次遍历字符串，在各片段内遍历字符的同时基于之前的统计将片段末尾往后推，当遍历到末尾时即表示此片段内所有字母在字符串内所有的出现都在此片段内，再从下一字符开始进行下一片段的划分

```java
class Solution {
	public List<Integer> partitionLabels(String s) {
		int[] last = new int[26];
		for (int i = 0; i < s.length(); ++i)
			last[s.charAt(i) - 'a'] = i;
		List<Integer> res = new ArrayList<>();
		int start = 0, end = 0;
		for (int i = 0; i < s.length(); ++i) {
			end = Math.max(end, last[s.charAt(i) - 'a']);
			if (i == end) {
				res.add(end - start + 1);
				start = end + 1;
			}
		}
		return res;
	}
}
```

:::

### [摆动序列][04]

::: info Description
求给定数组中摆动子序列的最大长度。

摆动序列指连续数字之间的差严格地在正数和负数之间交替（仅有一个元素或者含两个不等元素的序列也视作摆动序列）。

子序列可以不在原始数组中连续，但需确保序列中各元素的相对位置与原来一致
:::
:::: details Solution
::: tabs
@tab 贪心
从原始数组中的最左侧开始遍历考虑选择与否，若选非极值点就会破坏子序列的摆动特性，只需不断交替选择极大值点和极小值点加入子序列中，即可获得最大长度的摆动序列。

由于只需求最大长度，所以在实际实现时无需真的选极值点，只统计单调性开始变化时的点的数量即可

```java
class Solution {
	public int wiggleMaxLength(int[] nums) {
		if (nums.length == 1)
			return 1;
		int prevDiff = nums[1] - nums[0];
		int cnt = prevDiff == 0 ? 1 : 2;
		for (int i = 2; i < nums.length; i++) {
			int diff = nums[i] - nums[i - 1];
			if (diff > 0 && prevDiff <= 0 || diff < 0 && prevDiff >= 0) {
				prevDiff = diff;
				++cnt;
			}
		}
		return cnt;
	}
}
```

@tab DP
令 $up[i]$ 为位置 $i$ 及其之前上升摆动子序列（最后一个元素呈上升趋势的摆动子序列）的最大长度，令 $down[i]$ 为位置 $i$ 及其之前下降摆动子序列（最后一个元素呈下降趋势的摆动子序列）的最大长度，则有：
$$
\begin{cases}
	up[i]=\max\{up[i-1],\ down[i-1]+1\} &,\ nums[i-1] < nums[i] \\
	up[i]=up[i-1] &,\ nums[i-1] \ge nums[i] \\
\end{cases}
$$

$$
\begin{cases}
	down[i]=\max\{up[i-1]+1,\ down[i-1]\} &,\ nums[i-1] > nums[i] \\
	down[i]=down[i-1] &,\ nums[i-1] \le nums[i] \\
\end{cases}
$$

最终所求即为 $\max\{up[n-1],\ down[n-1]\}$ 。更进一步，因为状态转移方程仅与上一状态有关，故可将数组变量降维成单个变量，再考虑到大小极值点是交替选取的，故有 $|up-down|\le 1$，所以化简为：

$$
\begin{cases}
	up=\max\{up,\ down+1\}=down+1 &,\ nums[i-1] < nums[i] \\
	down=\max\{up+1,\ down\}=up+1 &,\ nums[i-1] > nums[i] \\
\end{cases}
$$

最后答案为 $\max\{up,\ down\}$

```java
class Solution {
	public int otherMethod(int[] nums) {
		int up = 1, down = 1;
		for (int i = 1; i < nums.length; i++) {
			if (nums[i - 1] < nums[i])
				up = down + 1;
			else if (nums[i - 1] > nums[i])
				down = up + 1;
		}
		return up > down ? up : down;
	}
}
```

:::
::::

### [用最少数量的箭引爆气球][05]

::: info Description
给定数组 $points$ ，其中 $points_i = [start_i, end_i]$ 表示气球 $i$ 水平直径覆盖了范围 $[start_i, end_i]$ ，每支箭可从任意位置射出并引爆覆盖范围包含该位置的所有气球，求引爆所有气球的最少弓箭数量
:::
::: details Solution
显然每支箭都得引爆尽可能多的气球。我们从左向右考虑所有气球的右边界，如果一支箭擦着所有气球中右边界最靠左的右边界将其引爆，那么一定是引爆了尽可能多的气球，因为这支箭在保证引爆原有必须得引爆的气球的同时，尽可能多地引爆了右侧的气球。

继续往右考虑，若上一支箭右侧还有其他未引爆气球的左边界，则必须得加多一支箭，我们可以将此箭等效到其右边界，如此这支箭就能同样在保证引爆此气球的同时尽可能多地引爆右侧的气球，所以一直重复此过程即可

```java
class Solution {
	public int findMinArrowShots(int[][] points) {
		Arrays.sort(points, new Comparator<int[]>() {
			@Override
			public int compare(int[] o1, int[] o2) {
				if (o1[1] < o2[1])
					return -1;
				if (o1[1] > o2[1])
					return 1;
				return 0;
			}
		});
		int cnt = 1;
		for (int pre = points[0][1], i = 1; i < points.length; ++i)
			if (pre < points[i][0]) {
				++cnt;
				pre = points[i][1];
			}
		return cnt;
	}
}
```

:::

### [无重叠区间][06]

::: info Description
给定一个区间的集合 $intervals$ ，其中 $intervals_i = [start_i, end_i]$ ，求使剩余区间互不重叠所需移除区间的最小数量（仅端点重合不算重合）
:::
::: details Solution
贪心思想。从左向右考虑区间，最优剩余最左侧的区间右端点必须是所有区间右端点最靠左的，然后将其右侧所有重叠区间都去除，则剩余区间为与原始问题相同的子问题，重复上述步骤即可

```java
class Solution {
	public int eraseOverlapIntervals(int[][] intervals) {
		Arrays.sort(intervals, (o1, o2) -> o1[1] - o2[1]);
		int cnt = 0;
		int end = Integer.MIN_VALUE;
		for (int[] item : intervals) {
			if (item[0] < end)
				++cnt;
			else
				end = item[1];
		}
		return cnt;
	}
}
```

:::

<!-- ------------------------------------------------------- -->
[00]:https://leetcode.cn/problems/jump-game/
[01]:https://leetcode.cn/problems/jump-game-II/
[02]:https://leetcode.cn/problems/gas-station/
[03]:https://leetcode.cn/problems/partition-labels/
[04]:https://leetcode.cn/problems/wiggle-subsequence/
[05]:https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/
[06]:https://leetcode.cn/problems/non-overlapping-intervals/
