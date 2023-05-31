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

### [打家劫舍 II][02]

::: info Description
给定代表每个房屋存放金额的非负整数数组，房屋首尾相连成环，在每间房仅可偷一次且不偷相连的房屋前提下，求能够偷窃到的最高金额
:::
::: details Solution
因为成环且不能抢相邻的，所以抢第一间和最后一间就不能都抢，实际上可以拆成俩子问题，即在`[0, n-2]`和`[1, n-1]`范围内分别计算抢的最大金额，再取较大者作为最终答案。

对于单个子问题，就是经典的范围动态规划，令`dp[i]`为遍历到`i`时获得的最大金额（不管抢不抢`i`），则有`dp[i] = max(dp[i-1], dp[i-2]+nums[i])`，即取抢和不抢的较大者。但这涉及到前俩的初始化值，即使将 dp 数组降维压缩也稍显麻烦。

较简单的形式是仅基于上一间房屋的俩状态来思考抢还是不抢当前房屋，先将抢的最大收益算出来存着，再基于上一房屋的状态更新不抢的最大收益，最后用缓存更新抢的收益。如此遍历到最后一间，最大收益即为抢和不抢俩状态的较大者，代码如下

```java
class Solution {
	public int rob(int[] nums) {
		if (nums.length == 1)
			return nums[0];
		return Math.max(rob(nums, 0, nums.length - 2), rob(nums, 1, nums.length - 1));
	}

	private int rob(int[] nums, int left, int right) {
		int rob = 0;	// maximum money can get if rob current house
		int unrob = 0;	// maximum money can get if unrob current house
		for (int i = left; i <= right; ++i) {
			int curRob = unrob + nums[i];	// rob current house, means unrob previous one
			unrob = Math.max(unrob, rob);	// unrob current house, take maximum of rob and unrob previous one
			rob = curRob;
		}
		return Math.max(rob, unrob);
	}
}
```

:::

### [打家劫舍 III][03]

::: info Description
给定代表每个房屋存放金额的非负节点值二叉树，从根节点开始往下抢，在每间房仅可偷一次且不偷直接相连的房屋前提下，求能够偷窃到的最高金额
:::
::: details Solution
对于树自然想到 DFS 自底向上返回遍历，可令 DFS 函数返回值为含俩元素的数组，元素分别代表以当前节点为根的树，抢与不抢根节点的最大收益。对于函数内部返回值的计算：

- 抢当前节点，则不可抢其左右子节点，最大收益为当前节点值、不抢左子节点作为根节点的最大收益、不抢右子节点作为根节点的最大收益这三者之和
- 不抢当前节点，则子节点抢不抢都行，最大收益为以左子节点为根节点的最大收益与以右子节点为根节点的最大收益这二者之和

```java
class Solution {
	public int rob(TreeNode root) {
		int[] res = dfs(root);
		return Math.max(res[0], res[1]);
	}

	private int[] dfs(TreeNode node) {
		if (node == null)
			return new int[2];
		int[] left = dfs(node.left);
		int[] right = dfs(node.right);
		int rob = node.val + left[1] + right[1];
		int unrob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
		return new int[] { rob, unrob };
	}
}
```

:::

### [整数拆分][04]

::: info Description
给定一个大于 1 的正整数，将其拆分为两个及以上正整数之和，求拆分出的正整数之积的最大值
:::
::: details Solution
给定正整数拆为俩数之和，可以打住直接求俩数之积，也可将俩数继续往下拆分。因正整数对应的最大乘积取决于比其小的正整数对应的最大乘积，故用动态规划来做，令`dp[i]`表示将正整数`i`拆分成至少两个正整数的和所对应的最大乘积，0 和 1 都不可拆，故初始条件`dp[0] = dp[1] = 0`。当`i > 1`时，设其拆成`j`和`i-j`，其中`1 <= j < i`：

- 若`i-j`继续拆分，则`dp[i] = j*dp[i-j]`
- 若`i-j`打住不继续拆，则`dp[i] = j*(i-j)`

故此种拆分情况下有`dp[i] = max⁡(j*(i−j), j*dp[i−j])`，所以对于`i`的拆分的最大乘积为遍历所有`j`的最大值，最终答案为`dp[n]`。

此题有利用数学证明的极简算法，详见官方题解

```java
class Solution {
		public int integerBreak(int n) {
		int[] dp = new int[n + 1];
		for (int i = 2; i <= n; i++)
			for (int j = 1; j < i; j++)
				dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
		return dp[n];
	}
}
```

:::

### [最长递增子序列][07]

::: info Description
求给定整数数组中最长严格递增子序列（可以不连续）的长度
:::
:::: details Solution
::: tabs
@tab DP
动态规划，令`dp[i]`表示到索引`i`元素为止的最长严格递增子序列长度，对于索引为`i`的元素来说，只要在它之前的元素比它小，那么就可以将其加入该元素所在的子序列中且保持严格递增，所以对于每个固定的索引`i`元素，都应遍历其之前的所有元素，将所有小于其的元素都用来更新`dp[i]`。由上所述显然应提前将 dp 数组每个元素都赋值为 1，以保证状态转移时的长度符合要求。可以边遍历边记录最大长度，最后直接返回

```java
class Solution {
	public int otherMethod(int[] nums) {
		int[] dp = new int[nums.length];
		int res = 1;
		Arrays.fill(dp, 1);
		for (int i = 0; i < dp.length; i++) {
			for (int j = 0; j < i; j++) {
				if (nums[j] < nums[i])
					dp[i] = Math.max(dp[i], dp[j] + 1);
			}
			res = Math.max(dp[i], res);
		}
		return res;
	}
}
```

@tab 贪心 + 二分查找
在遍历原数组时维护一个数组`tails`，其中`tails[i]`表示长度为`i+1`的最长子序列的最后一个元素，对于遍历的每个元素：

- 若某元素大于所有`tails`元素，则表明该数可对所有之前长度的子序列生效，将其添加至`tails`最后，令`tails`长度加一
- 若`tails[len-1] < num <= tails[len]`，则替换`tails`的最后元素

实际上，`tails`的生成方式决定了其是递增的，可以在其中对遍历到的值进行变形的二分搜索，得到不小于其的元素索引并替换掉该值，这就包含了上述第二种情况，并且在更前的地方替换也是符合`tails`含义的。特别地，当搜到的索引为当前`tails`的最后时，对应上述第一种情况

```java
class Solution {
	public int lengthOfLIS(int[] nums) {
		int[] tails = new int[nums.length];
		int size = 0;
		for (int x : nums) {
			int i = 0, j = size;
			while (i != j) {
				int m = (i + j) / 2;
				if (tails[m] < x)
					i = m + 1;
				else
					j = m;
			}
			tails[i] = x;
			if (i == size) ++size;
		}
		return size;
	}
}
```

:::
::::

### [环形子数组的最大和][08]

::: info Description
求给定环形整数数组的最大子数组和
:::
::: details Solution
很容易联想到普通数组求 [最大子数组和][09] 的题目，所以自然需要考虑分割问题进行套用。整个数组的总和固定，当将环分割为两个子数组后，若一个子数组的和恰为最大，那另一子数组的和自然为最小。回到环形数组中，实际上也就只有两种情况：

- 最大和子数组不跨越原数组首尾，这就退化为普通数组求最大子数组和
- 最大和子数组跨越原数组首尾，这种情况则说明与之相对的最小和子数组不跨越原数组首尾，即变成求普通数组的最小子数组和的问题，最后用原数组总和减去最小和即为最大和

所以貌似只需要同时求出不成环的原数组的最大和与最小和，最终答案为`max(maxSum, sum - minSum)`，但实际上若数组全为负数就会导致此法失效，所以最后应进行此情况的判断

```java
class Solution {
	public int maxSubarraySumCircular(int[] nums) {
		int sum = 0, preMax = 0, preMin = 0;
		int maxSum = Integer.MIN_VALUE, minSum = Integer.MAX_VALUE;
		for (int num : nums) {
			sum += num;
			preMax = num + Math.max(0, preMax);
			maxSum = Math.max(maxSum, preMax);
			preMin = num + Math.min(0, preMin);
			minSum = Math.min(minSum, preMin);
		}
		return sum == minSum ? maxSum : Math.max(maxSum, sum - minSum);
	}
}
```

:::

### [鸡蛋掉落][13]

::: info Description
有`k`枚鸡蛋和`n`层高的楼，且存在属于`[0, n]`区间的楼层`f`使得使得鸡蛋只有从高于`f`的楼层扔下才会碎，每次操作可以取一枚未碎的鸡蛋并把它从`[1, n]`楼层区间扔下，仅可重复使用未碎的鸡蛋，求一定能确定出具体楼层`f`的最小操作次数
:::
::: details Solution
换个角度思考，若允许进行`t`次操作且有`k`个鸡蛋，那一定能确定出具体楼层`f`的楼高`n`最高可以是多少？令`dp[t][k]`为允许进行`t`次操作且有`k`个鸡蛋的条件下楼高`n`的最大值，则只需在所有`dp`值中找出满足不小于`n`所对应的最小`t`值。

考虑转移方程，在任意层高扔鸡蛋，一定消耗一次操作次数，但分鸡蛋有没有碎两种情况：

- 鸡蛋碎了，则待确定楼层在此次扔鸡蛋的下方，且对应`dp[t-1][k-1]`，即转移到的子问题为“允许`t-1`次操作且有`k-1`枚鸡蛋”，故允许下方有`dp[t-1][k-1]`层
- 鸡蛋没碎，同理可得允许上方有`dp[t-1][k]`层

故总转移方程为`dp[t][k] = 1 + dp[t-1][k] + dp[t-1][k-1]`，边界条件为：`t >= 1`时有`dp[t][1] = t`，`k >= 1`时有`dp[1][k] = 1`。

显然最大操作次数不会大于楼高，故只需求出`dp[n][k]`内的所有值，在求取过程中直接返回最先满足允许楼高不小于给定值的操作次数即可

```java
class Solution {
    public int superEggDrop(int k, int n) {
        if (n == 1)
            return 1;
        int[][] dp = new int[n + 1][k + 1];
        for (int i = 1; i <= k; ++i)
            dp[1][i] = 1;
        for (int i = 2; i <= n; ++i) {
            for (int j = 1; j <= k; ++j)
                dp[i][j] = 1 + dp[i - 1][j] + dp[i - 1][j - 1];
            if (dp[i][k] >= n)
                return i;
        }
        return -1;
    }
}
```

:::

## 字符串问题

### [两个字符串的删除操作][05]

::: info Description
给定两个单词，每次都可删除其中一个单词的任意一个字符，求使两单词相同的最小操作次数
:::
::: details Solution
目标是通过删除导致两单词不同的字符来使其相同，若从删除的反面——留存字符思考，实际上就是求两字符串的最长相同子串，并且由于每次删除的字符位置可任选，所以最长相同子串的字符可不在原字符串中连续。可通过二维动态规划来解决，令`dp[i][j]`为前一单词的前`i`个字符与后一单词的前`j`个字符中的最长公共子序列的长度，转移状态方程需考虑俩字符串各自遍历到的字符是否相同，若相同则公共子序列加一，若不同则从上一状态（有两种）取最大转移而来

```java
class Solution {
	public int minDistance(String word1, String word2) {
		int M = word1.length(), N = word2.length();
		int[][] dp = new int[M + 1][N + 1];
		for (int i = 1; i <= M; i++)
			for (int j = 1; j <= N; j++)
				if (word1.charAt(i - 1) == word2.charAt(j - 1))
					dp[i][j] = dp[i - 1][j - 1] + 1;
				else
					dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
		return M + N - 2 * dp[M][N];
	}
}
```

:::

### [编辑距离][06]

::: info Description
给定两个单词，每次编辑可对一个单词进行单个字符的插入或删除或替换，求将一单词转换成另一单词的最少编辑次数
:::
::: details Solution
用动态规划解决，令`dp[i][j]`为`word1`前`i`个字符与`word2`前`j`个字符之间的编辑距离，相对于其来说，若`word1[i] != word2[j]`，则：

- 由`dp[i-1][j-1]`转换而来表示在`word1`前`i-1`个字符与`word2`前`j-1`个字符完成编辑的基础上，对`word1[i]`进行替换操作使`word1[i] == word2[j]`
- 由`dp[i][j-1]`转换而来表示在`word1`前`i`个字符与`word2`前`j-1`个字符完成编辑的基础上，对`word2[j]`进行插入操作使`word1[i] == word2[j]`
- 由`dp[i-1][j]`转换而来表示在`word1`前`i-1`个字符与`word2`前`j`个字符完成编辑的基础上，对`word1[i]`进行删除操作使`word1[i] == word2[j]`

显然此时最短编辑距离为`dp[i][j] = 1 + min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])`。

当`word1[i] == word2[j]`时，有`dp[i][j] = min(dp[i - 1][j - 1], 1 + min(dp[i - 1][j], dp[i][j - 1]))`，考虑编辑距离的实际意义，显然两仅相差一个字符的单词的编辑距离至多为一，即有`dp[i-1][j-1] <= 1 + dp[i-1][j]`且`dp[i-1][j-1] <= 1 + dp[i][j-1]`，故最终有`dp[i][j] = dp[i-1][j-1]`

```java
class Solution {
	public int minDistance(String word1, String word2) {
		int M = word1.length(), N = word2.length();
		if (M * N == 0)
			return N + M;
		int[][] dp = new int[M + 1][N + 1];
		for (int i = 1; i <= M; i++)
			dp[i][0] = i;
		for (int i = 1; i <= N; i++)
			dp[0][i] = i;
		for (int i = 1; i <= M; i++)
			for (int j = 1; j <= N; j++)
				if (word1.charAt(i - 1) == word2.charAt(j - 1))
					dp[i][j] = dp[i - 1][j - 1];
				else
					dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
		return dp[M][N];
	}
}
```

:::

### [不同的子序列][0A]

::: info Description
给定字符串`s`和`t`，求`t`在`s`的子序列（可不连续）中的出现次数
:::
::: details Solution
令`dp[i+1][j+1]`表示`t`的前`i`个字符在`s`的前`j`个字符的子序列中出现的次数。有边缘条件：

- `dp[0][j] = 1, 0 <= j <= s.length()`: 空串是任意串的子序列，且仅出现一次
- `dp[i][0] = 0, 0 < i <= t.length()`: 任意非空串都不是空串的子序列

处理每一行时，即对于固定的`t`的前`i`个字符来说，考虑`s`的前`j`个字符：

- 若`t[i] != s[j]`，则含新增字符`s[j]`的`s`前`j`个字符的子序列中不可能恰出现`t`的前`i`个字符，故次数应延用`s`前`j-1`个字符的次数，即`dp[i+1][j+1] = dp[i+1][j]`
- 若`t[i] == s[j]`，则显然可分为子序列中是否含`s[j]`两种情况，不含的话同上，含的话就相当于`s`的前`j-1`个字符和`t`的前`i-1`个字符的所有子序列都新增一个相同字符，其出现次数不变，故综合起来`dp[i+1][j+1] = dp[i+1][j] + dp[i][j]`

```java
class Solution {
	public int numDistinct(String s, String t) {
		if (s.length() * t.length() == 0)
			return 0;
		if (s.length() < t.length())
			return 0;
		int[][] dp = new int[t.length() + 1][s.length() + 1];
		for (int i = 0; i < s.length(); ++i)
			dp[0][i] = 1;
		for (int i = 0; i < t.length(); ++i)
			for (int j = 0; j < s.length(); ++j)
				if (t.charAt(i) == s.charAt(j))
					dp[i + 1][j + 1] = dp[i + 1][j] + dp[i][j];
				else
					dp[i + 1][j + 1] = dp[i + 1][j];
		return dp[t.length()][s.length()];
	}
}
```

:::

### [最长回文子序列][0B]

::: info Description
给定字符串中最长回文子序列的长度
:::
::: details Solution
令`dp[i][j]`表示字符串`s`中以`s[i]`和`s[j]`为左右边界（含）的最长回文子序列长度，由于子序列中的字符可以不在原串中连续，故虽然枚举的是两端，但应该考虑充分利用已计算的数据：

- 当`s[i] == s[j]`时，此新边界必都可以用来扩展原来其内部的最长回文子序列，故有`dp[i][j] = dp[i+1][j-1] + 2`
- 当`s[i] != s[j]`时，此两字符必不能同时用于扩展其内部的最长回文子序列，故应延用某侧较短边界内含最长回文子序列的较大值，即`dp[i][j] = max(dp[i+1][j], dp[i][j-1])`

由上述转移方程结合实际语义来看，为确保能够成功转移，在更新二维 dp 数组的某个值时，应确保其正下方、左侧、左下方的值已经是有效的，故整体的循环应从下至上、从左至右，再考虑枚举边界不应重复，故只能枚举整个二维数组的右上三角区域，并且每次大循环开始前需确保对角线上的值已初始化（按语义应为 1），如此也可避免枚举左下三角的边缘条件的不便。

此题还有另一种思考方式，即逆序拷贝原字符串，则回文问题就变成了求两字符串的最长公共子序列问题

```java
class Solution {
	public int longestPalindromeSubseq(String s) {
		int n = s.length();
		int[][] dp = new int[n][n];
		for (int i = n - 1; i >= 0; --i) {
			dp[i][i] = 1;
			for (int j = i + 1; j < n; ++j) {
				if (s.charAt(i) == s.charAt(j))
					dp[i][j] = dp[i + 1][j - 1] + 2;
				else
					dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
			}
		}
		return dp[0][n - 1];
	}
}
```

:::

## 股票问题

### [买卖股票的最佳时机 II][0C]

::: info Description
给定表示每天股价的数组`prices`，其中`prices[i]`表示某支股票第`i`天的价格。每一天都可决定是否购买和/或出售股票，但在任何时候最多只能持有一股股票，求能获得的最大利润
:::
::: details Solution
令`sell[i]`和`keep[i]`分别表示第`i`天交易完后未持有和持有股票的最大利润，则：

- 对于`sell`状态，可以是原本就未持有，也可以是通过将持有股票卖掉从`keep`转换而来，故`sell[i] = max(sell[i-1], keep[i-1] + prices[i])`
- 对于`keep`状态，可以是原本就持有，也可以是通过买入股票从`sell`转换而来，故`keep[i] = max(keep[i-1], sell[i-1] - prices[i])`

边缘状态是第 0 天的利润，显然`sell[0] = 0`，而持有状态则表示以第 0 天价格购入了股票，故利润`keep[0] = -prices[0]`。最后一天卖掉股票一定比持有股票的利润更大，故答案为`sell[n-1]`。由于转移方程仅与上一天状态相关，故可将数组压缩为单一变量，并且在每天更新时无需将先更新的值用临时变量暂存，比如先更新了`keep[i]`，则后续更新`sell[i]`时转移方程中就会从`keep[i]`转移而非之前的`keep[i-1]`，但这并没影响，因为按照实际意义来看，从`keep[i]`转移代表从当天的持有到卖出，显然利润为零

```java
class Solution {
	public int maxProfit(int[] prices) {
		int sell = 0, keep = -prices[0];
		for (int i = 1; i < prices.length; ++i) {
			keep = Math.max(keep, sell - prices[i]);
			sell = Math.max(sell, keep + prices[i]);
		}
		return sell;
	}
}
```

:::

### [买卖股票的最佳时机 III][0D]

::: info Description
给定表示每天股价的数组`prices`，其中`prices[i]`表示某支股票第`i`天的价格。每一天都可决定是否购买和/或出售股票，但在任何时候最多只能持有一股股票，且最多只能完成两笔交易，求能获得的最大利润
:::
::: details Solution
主要框架与 [买卖股票的最佳时机 II][0C] 类似，但由于能进行多笔交易且限制了交易上限，故应对每次交易单独进行 dp，且多笔交易之间的买卖关系需联合考虑：

- 第一笔买入的`keep1`只能是由原有`keep1`保持或者当天买入转移而来，故`keep1[i] = max(keep1[i-1], - prices[i])`
- 第一次卖出但未进行第二次买入的`sell1`只能是由原有`sell1`保持或者由当天卖出转移而来，故`sell1[i] = max(sell1[i-1], keep1[i-1] + prices[i])`
- 已第一次卖出且第二次买入的`keep2`只能是由原有`keep2`保持或者当天买入由`sell1[i-1]`转移而来，故`keep2[i] = max(keep2[i-1], sell1[i-1] - prices[i])`
- 第二笔卖出的`sell2`只能是由原有`sell2`保持或者当天卖出转移而来，故`sell2[i] = max(sell2[i-1], keep2[i-1] + prices[i])`

最后利润最大的显然是`sell2[n-1]`，再进行空间压缩可得代码

```java
class Solution {
	public int maxProfit(int[] prices) {
		int k1 = -prices[0], k2 = -prices[0];
		int s1 = 0, s2 = 0;
		for (int i = 1; i < prices.length; i++) {
			k1 = Math.max(k1, -prices[i]);
			s1 = Math.max(s1, k1 + prices[i]);
			k2 = Math.max(k2, s1 - prices[i]);
			s2 = Math.max(s2, k2 + prices[i]);
		}
		return s2;
	}
}
```

:::

### [买卖股票的最佳时机 IV][0E]

::: info Description
给定表示每天股价的数组`prices`，其中`prices[i]`表示某支股票第`i`天的价格。每一天都可决定是否购买和/或出售股票，但在任何时候最多只能持有一股股票，且最多只能完成`k`笔交易，求能获得的最大利润
:::
::: details Solution
主要思想与 [买卖股票的最佳时机 III][0D] 类似，只是将交易上限定为`k`，只需联合考虑各笔交易即可：令`keep[i][j]`表示第`i`天第`j`笔交易完成后持有股票的最大利润，令`sell[i][j]`表示第`i`天第`j`笔交易完成后未持有股票的最大利润，则：

- 第`i`天第`j`笔持有的`keep[i][j]`只能是由原有保持或者当天由上一笔未持有状态买入转移而来，故`keep[i][j] = max(keep[i-1][j], sell[i-1][j-1] - prices[i])`
- 第`i`天第`j`笔未持有的`sell[i][j]`只能是由原有保持或者当天由本笔交易卖出转移而来，故`sell[i][j] = max(sell[i-1][j], keep[i-1][j] + prices[i])`

除了常规的空间压缩之外，还有些细节需要注意：

- 一笔交易产生实质买卖利润至少需要两天，即买卖若在同一天则无意义，故应最多只需要进行`min(k, prices.length / 2)`笔交易即可确保获得最大利润
  - 注意由此运算导致的特殊测试用例错误，如`prices.length == 1`
- 每天开始处理各笔交易前都需要将第 0 笔交易初始化，且初始化需联合考虑前一天处理过后的利润
- 基于上一条，在开始处理每天的各笔交易前，需将每笔的持有利润都设为`- prices[0]`，而不能仅设置第 0 笔交易后状态为持有的利润，否则最后计算出的总利润可能会超出实际能获得的，因为对交易次数进行优化之后实际上强制每天都进行模拟买卖，若亏损则再强制等效于未进行买卖，故对于每一笔交易来说都有可能强制将本为负的买卖利润强行拉至 0（数组初始化的值）导致利润虚高，进而向后累积

```java
class Solution {
	public int maxProfit(int k, int[] prices) {
		if (k * prices.length == 0 || prices.length == 1)
			return 0;
		k = Math.min(k, prices.length / 2);
		int[] sell = new int[k];
		int[] keep = new int[k];
		Arrays.fill(keep, -prices[0]);
		for (int i = 1; i < prices.length; ++i) {
			keep[0] = Math.max(keep[0], -prices[i]);
			sell[0] = Math.max(sell[0], keep[0] + prices[i]);
			for (int j = 1; j < k; ++j) {
				keep[j] = Math.max(keep[j], sell[j - 1] - prices[i]);
				sell[j] = Math.max(sell[j], keep[j] + prices[i]);
			}
		}
		return sell[k - 1];
	}
}
```

:::

### [最佳买卖股票时机含冷冻期][0F]

::: info Description
给定表示每天股价的数组`prices`，其中`prices[i]`表示某支股票第`i`天的价格。在任何时候最多只能持有一股股票，不限制交易次数但不可在卖出股票的下一天买入，求能获得的最大利润
:::
::: details Solution
此题看似与 [买卖股票的最佳时机 IV][0E] 相似，都能完成多笔交易，但由于存在冷冻期，所以无法像那题一样在一天内完成无数笔交易，故实际上可以将每笔交易都割裂开来计算，也无需为多笔交易单独设置变量维度，此题应视作 [买卖股票的最佳时机 II][0C] 变化而来的，只需在其基础上增加一状态变量即可。

利用状态机模型归纳后考虑设置三种状态：持有股票`keep`、未持有但在冷静期`cool`、未持有且不在冷静期`wait`，则第`i`天能获得的最大利润为：

- `keep`可由原有保持或前一天买入转移而来，故`keep[i] = max(keep[i-1], wait[i-1] - prices[i])`
- `wait`可由原有保持或由冷静期转移而来，故`wait[i] = max(wait[i-1], cool[i-1])`
- `cool`必由前一天出售股票转移而来，故`cool[i] = keep[i-1] + prices[i]`

显然能进行空间压缩，需注意的是压缩之后每天的仨变量都是相互依赖的，故必须得先缓存至少一个变量的值

```java
class Solution {
	public int maxProfit(int[] prices) {
		int keep = -prices[0];// 持有股票
		int cool = 0;// 未持有，但在冷静期
		int wait = 0;// 未持有，且不在冷静期
		for (int i = 1; i < prices.length; i++) {
			int newWait = Math.max(cool, wait);
			cool = keep + prices[i];
			keep = Math.max(keep, wait - prices[i]);
			wait = newWait;
		}
		return Math.max(cool, wait);
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

### [目标和][10]

::: info Description
给定非负整数数组和目标值，向数组中的每个元素前添加正负号，求添加完后数组和为目标值的添加方法数
:::
:::: details Solution
::: tabs
@tab 回溯
直接遍历所有组合求出组合数。递归时需注意分正负求得的组合数需相加

```java
class Solution {
	public int findTargetSumWays(int[] nums, int target) {
		return backtracking(0, nums, target);
	}

	private int backtracking(int idx, int[] nums, int target) {
		if (idx == nums.length)
			return target == 0 ? 1 : 0;
		return backtracking(idx + 1, nums, target + nums[idx]) + backtracking(idx + 1, nums, target - nums[idx]);
	}
}
```

@tab  DP
实际上添加正负号就是将原数组的所有元素分为两个子集，令正号子集为和负号子集分别为`P`和`N`，有`P + N = sum`且`P - N = tar`，其中`sum`为原数组总和，`tar`为给定目标值，故有`P = (sum + tar) / 2`，问题转化为原数组中取部分数字且和为`(sum + tar) / 2`的种数，转化为类似容量固定的 01 背包问题，等效为重量与价值相同的物体，求选取恰好装满背包的组合数，故令`dp[i]`为重量恰为`i`的选取组合数，在转移的时候显然应将选与不选物品的组合数相加，边缘条件`dp[0] = 1`（都不选以令选取重量为 0）

```java
class Solution {
	public int otherMethod(int[] nums, int target) {
		int sum = 0;
		for (int num : nums)
			sum += num;
		if ((sum + target) % 2 != 0 || target > sum)
			return 0;
		int p = (sum + target) / 2;
		int[] dp = new int[p + 1];
		dp[0] = 1;
		for (int num : nums)
			for (int j = p; j >= num; --j)
				dp[j] = dp[j] + dp[j - num];
		return dp[p];
	}
}
```

:::
::::

### [零钱兑换][11]

::: info Description
给定代表硬币面额的整数数组与目标值，求恰凑成总金额所需的最少的硬币个数。每种硬币数量无限，若无法凑成则返回-1
:::
::: details
令目标值为背包容量，每种硬币无限则是完全背包问题，与顺序无关故外层遍历硬币，令`dp[i]`为恰凑成总金额`i`的硬币数。由于需要硬币数量最少，令凑成某金额的硬币数为价值，显然越小越好，转移方程为`dp[i] = min(dp[i], dp[i - coin] + 1)`，故初始条件应将硬币数设为不能达到的大数（目标值 +1），边缘条件为`dp[0] = 0`，最后只需检查目标值的硬币数是否变为了小于预设值的数即可

```java
class Solution {
	public int coinChange(int[] coins, int amount) {
		if (amount == 0)
			return 0;
		int[] dp = new int[amount + 1];
		Arrays.fill(dp, amount + 1);
		dp[0] = 0;
		for (int coin : coins)
			for (int j = coin; j <= amount; j++)
				dp[j] = Math.min(dp[j], dp[j - coin] + 1);
		return dp[amount] > amount ? -1 : dp[amount];
	}
}
```

:::

### [完全平方数][12]

::: info Description
求和为给定整数的完全平方数的最少数量
:::
::: details
令目标值为背包容量，每种硬币无限则是完全背包问题，与顺序无关故外层遍历硬币，令`dp[i]`为恰凑成总金额`i`的硬币数。由于需要硬币数量最少，令凑成某金额的硬币数为价值，显然越小越好，转移方程为`dp[i] = min(dp[i], dp[i - coin] + 1)`，故初始条件应将硬币数设为不能达到的大数（目标值 +1），边缘条件为`dp[0] = 0`，最后只需检查目标值的硬币数是否变为了小于预设值的数即可

```java
class Solution {
	public int coinChange(int[] coins, int amount) {
		if (amount == 0)
			return 0;
		int[] dp = new int[amount + 1];
		Arrays.fill(dp, amount + 1);
		dp[0] = 0;
		for (int coin : coins)
			for (int j = coin; j <= amount; j++)
				dp[j] = Math.min(dp[j], dp[j - coin] + 1);
		return dp[amount] > amount ? -1 : dp[amount];
	}
}
```

:::

<!-- ------------------------------------------------------- -->
[00]:https://leetcode.cn/problems/unique-binary-search-trees/
[01]:https://leetcode.cn/problems/combination-sum-iv/
[02]:https://leetcode.cn/problems/house-robber-ii/
[03]:https://leetcode.cn/problems/house-robber-iii/
[04]:https://leetcode.cn/problems/integer-break/
[05]:https://leetcode.cn/problems/delete-operation-for-two-strings/
[06]:https://leetcode.cn/problems/edit-distance/
[07]:https://leetcode.cn/problems/longest-increasing-subsequence/
[08]:https://leetcode.cn/problems/maximum-sum-circular-subarray/
[09]:https://leetcode.cn/problems/maximum-subarray/
[0A]:https://leetcode.cn/problems/distinct-subsequences/
[0B]:https://leetcode.cn/problems/longest-palindromic-subsequence/
[0C]:https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
[0D]:https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/
[0E]:https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/
[0F]:https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/
[10]:https://leetcode.cn/problems/target-sum/
[11]:https://leetcode.cn/problems/coin-change/
[12]:https://leetcode.cn/problems/perfect-squares/
[13]:https://leetcode.cn/problems/super-egg-drop/
