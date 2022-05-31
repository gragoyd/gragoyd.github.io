---
title: 模拟
icon: emmet
category:
  - algorithm
tag:
  - two pointer
---

### [对角线遍历][00]

::: info Description
按对角线遍历矩阵，如：

input: `mat = [[1,2,3],[4,5,6],[7,8,9]]`

output: `[1,2,4,7,5,3,6,8,9]`

:::

::: details Solution
先假设每条斜线都从右上至左下遍历，再依据奇偶按需逆序

可进一步实时遍历判断方向与斜线收尾的方法，未记录

```java
class Solution {
	public int[] findDiagonalOrder(int[][] mat) {
		ArrayList<Integer> temp = new ArrayList<>();
		int m = mat.length, n = mat[0].length;
		int[] res = new int[m * n];
		int cnt = 0;
		for (int k = 0; k < m + n - 1; ++k) {
			temp.clear();
			int r = k < n ? 0 : k - n + 1;
			int c = k < n ? k : n - 1;
			while (r < m && c >= 0)
				temp.add(mat[r++][c--]);
			if (k % 2 == 0)
				Collections.reverse(temp);
			for (int num : temp)
				res[cnt++] = num;
		}
		return res;
	}
}
```

:::

### [最长回文子串][01]

::: info Description
找出给定字符串中最长的回文子串
:::
::: details Solution
枚举每个字符，在保持回文前提下，以其为中心向两端扩展，扩展期间维护最大回文串位置

```java
class Solution {
	public String longestPalindrome(String s) {
		int start = 0, end = 0;
		for (int i = 0; i < s.length(); ++i) {
			// 考虑初始回文串为 1 和 2 字符的边界情况
			int len = Math.max(expand(s, i, i), expand(s, i, i + 1));
			if (len > end - start) {
				// 当回文串由 2 字符拓展而来时，i-len/2 会导致左边界多减一
				start = i - (len - 1) / 2;
				end = i + len / 2;
			}
		}
		return s.substring(start, end + 1);
	}

	private int expand(String s, int left, int right) {
		while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
			--left;
			++right;
		} // 此时的俩边界为多拓展了一次的，故返回时将长度 -2
		return right - left - 1;
	}
}
```

:::

### [两数之和 II - 输入有序数组][02]

::: info Description
找出非递减数组中和为给定值的两个数的下标

要求空间复杂度为 $O(1)$
:::
::: details Solution
因为数组有序，故可以用双指针由两端逐渐逼近

```java
class Solution {
	public int[] twoSum(int[] numbers, int target) {
		int left = 0, right = numbers.length - 1;
		while (left < right) {
			int sum = numbers[left] + numbers[right];
			if (sum < target)
				++left;
			else if (sum > target)
				--right;
			else
				return new int[] { left + 1, right + 1 };
		}
		return new int[] { -1, -1 };
	}
}
```

:::

### [翻转单词顺序][03]

::: info Description
将给定英文句子字符串的单词逆序（需除掉一切多余空格），如：

input: `"  hello  world!  "`

output: `"world! hello"`
:::

::: details Solution1
先反转各词，再整体翻转

```java
class Solution {
	public String reverseWords(String s) {
		if (s == null || s.length() == 0)
			return "";
		StringBuilder total = new StringBuilder();
		StringBuilder temp = new StringBuilder();
		int front = 0;
		for (int cur = 0; cur < s.length(); cur = front + 1) {
			while (cur < s.length() && s.charAt(cur) == ' ')
				++cur;
			if (cur == s.length())
				break;
			front = cur + 1;
			while (front < s.length() && s.charAt(front) != ' ')
				++front;
			temp.delete(0, temp.length());
			temp.append(s.substring(cur, front));
			temp.reverse();
			total.append(temp + " ");
		}
		if (total.length() > 0)
			total.deleteCharAt(total.length() - 1);
		return total.reverse().toString();
	}
}

```

:::
::: details Solution2
直接调用现成的 API

```java
class Solution {
    public String reverseWords(String s) {
        s = s.trim();
        // 正则匹配连续的空白字符作为分隔符分割
        List<String> wordList = Arrays.asList(s.split("\\s+"));
        Collections.reverse(wordList);
        return String.join(" ", wordList);
    }
}
```

:::
::: details Solution3
逆序拷贝各单词，期间除掉多余空格

```java
class Solution {
	public String reverseWords(String s) {
		s = s.trim();
		StringBuilder sb = new StringBuilder(s.length());
		for (int left = s.length() - 1, right = left; left >= 0; right = left) {
			while (left >= 0 && s.charAt(left) != ' ')
				--left;
			sb.append(s.substring(left + 1, right + 1) + " ");
			while (left >= 0 && s.charAt(left) == ' ')
				--left;
		}
		return sb.toString().trim();
	}
}
```

:::

### [求众数 II][04]

::: info Description
求非空数组中所有出现次数大于数组长度三分之一的元素
:::
::: details Solution
此类求多数元素的问题考虑用摩尔投票法，其实质就是不同元素对拼消耗，最后多数元素肯定会相应剩下。

例如 $N$ 个元素中求出现次数大于 $N\div k$ 的元素，故先拟定 $k-1$ 个可能存在的候选多数元素【符合条件的最多只可能有 $k-1$ 个】，每次取 $k-1$ 个不同元素进行抵消，最后若有剩下的候选元素，则对每种进行计数核查是否符合要求。

具体实现是设若干候选变量及其相应计数变量，在遍历数组的每个元素时，若当前元素与某个剩余的变量相同（且相应计数非零），则将其计数加一；若与各候选变量都不同，则伺机选取坑位占据，以备接下来的一组抵消，若此时发现无坑位，则说明已凑够一组不同元素，立即进行抵消。遍历完之后若有剩余候选变量，再到原数组中统计其次数是否达标，最终确认答案

```java
class Solution {
	public List<Integer> majorityElement(int[] nums) {
		int r1 = 0, c1 = 0, r2 = 0, c2 = 0;
		for (int num : nums) {
			if (c1 > 0 && num == r1)
				++c1;
			else if (c2 > 0 && num == r2)
				++c2;
			else if (c1 == 0) {
				r1 = num;
				++c1;
			} else if (c2 == 0) {
				r2 = num;
				++c2;
			} else {
				--c1;
				--c2;
			}
		}
		List<Integer> res = new ArrayList<>();
		if (c1 > 0 || c2 > 0) {
			int n1 = 0, n2 = 0;
			for (int num : nums) {
				if (num == r1)
					++n1;
				else if (num == r2)
					++n2;
			}
			if (n1 > nums.length / 3)
				res.add(r1);
			if (n2 > nums.length / 3)
				res.add(r2);
		}
		return res;
	}
}
```

:::

<!-- ------------------------------------------------------- -->
[00]:https://leetcode-cn.com/problems/diagonal-traverse/
[01]:https://leetcode-cn.com/problems/longest-palindromic-substring/
[02]:https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
[03]:https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
[04]:https://leetcode.cn/problems/majority-element-ii/
