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

:::: details Solution
::: code-tabs
@tab 模拟

```java
class Solution {
    // 先反转各词，再整体翻转
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

@tab API

```java
class Solution {
    public String reverseWords(String s) {
        // 除掉首尾空格后正则匹配连续的空白字符作为分隔符分割
        List<String> wordList = Arrays.asList(s.trim().split("\\s+"));
        Collections.reverse(wordList);
        return String.join(" ", wordList);
    }
}
```

@tab copy

```java
class Solution {
    // 逆序拷贝各单词，期间除掉多余空格
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
::::

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

### [根据身高重建队列][05]

::: info Description
给定一群人的乱序的属性数组，其中各元素 $[h_i, k_i]$ 表示第 $i$ 个人的身高为 $h_i$ 且前面恰有 $k_i$ 个人的身高不低于 $h_i$ ，将属性数组重建为有序的并返回

input: `[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]`

output: `[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]`
:::
::: details Solution
分为两个部分来考虑，以什么顺序从原数组中抽出来人，还有将抽出来的人怎么插入新建的队列中去。实际上新建的队列只需对各人的第二属性负责即可，那么显然如果将人从高到低逐渐插入新队列，就不会对已插入的人的第二属性产生影响，并且当前插入者的第二属性恰好就是插入新队列的索引位置，由此可得从原数组中抽人的第一顺序应当是其第一属性（身高），当身高相同时考虑第二属性，因为其表示的是前面有多少个的问题，所以只需稍加试验即可得应按照升序进行抽取

```java
class Solution {
	public int[][] reconstructQueue(int[][] people) {
		Arrays.sort(people, new Comparator<int[]>() {
			@Override
			public int compare(int[] o1, int[] o2) {
				return o1[0] == o2[0] ? o1[1] - o2[1] : o2[0] - o1[0];
			}
		});
		List<int[]> res = new LinkedList<>();
		for (int[] p : people)
			res.add(p[1], p);
		return res.toArray(new int[res.size()][]);
	}
}
```

:::

### [分发糖果][06]

::: info Description
若干人站成一排，给定代表各位评分的整数数组，依据评分给每人发糖果，要求每人至少发一个，并且相邻两人评分更高的分给更多糖果，求满足要求的最少糖果数
:::
:::: details Solution
::: tabs
@tab 模拟
实际上“相邻两人评分更高的分给更多糖果”可以拆分为两个不同方向遍历时的单侧规则：若当前的评分高于上一个，则当前的糖果数比上一个的多一个，否则当前只给一个糖果（合理利用规则减少糖果数）。所以只需进行两次反向遍历，得到每人在两次遍历时最少需分得的糖果数，取其更大者即可

具体实现时，第一次遍历的糖果数需要数组暂存，但第二次只需要用单个变量进行记录当前位置的糖果数并同时计算答案即可

```java
class Solution {
	public int candy(int[] ratings) {
		int[] left = new int[ratings.length];
		left[0] = 1;
		for (int i = 1; i < ratings.length; ++i) {
			if (ratings[i - 1] < ratings[i])
				left[i] = left[i - 1] + 1;
			else
				left[i] = 1;
		}
		int res = left[ratings.length - 1];
		for (int i = ratings.length - 2, right = 1; i >= 0; --i) {
			if (ratings[i] > ratings[i + 1])
				++right;
			else
				right = 1;
			res += Math.max(left[i], right);
		}
		return res;
	}
}
```

@tab 优化
从左到右遍历，记前一个分得的糖果数量为`pre`，当前递减序列的长度为`down`、最近的递增序列的长度为`up`，进行判断：若当前比上一个评分高，说明正在最近的递增序列中，直接分配给该同学`pre + 1`个糖果即可；否则视作在一个递减序列中，直接分配给当前一个糖果，并为其所在的递减序列中所有人再多分配一个糖果，以保证糖果数量还是满足条件。实际上并不需要显式地额外分配糖果，因为需要额外分配的糖果数量即为`down`；同时需要注意当`down == up`时，需要把最近的递增序列的最后一个同学也并进递减序列中，因为其糖果数得同时满足两侧需求（参照解法一）

```java
class Solution {
	public int candy(int[] ratings) {
		int total = 1, up = 1, down = 0, pre = 1;
		for (int i = 1; i < ratings.length; ++i) {
			if (ratings[i - 1] <= ratings[i]) {
				down = 0;
				pre = ratings[i - 1] == ratings[i] ? 1 : pre + 1;
				total += pre;
				up = pre;
			} else {
				++down;
				if (down == up)
					++down;
				total += down;
				pre = 1;
			}
		}
		return total;
	}
}
```

:::
::::

### [非递减数列][07]

::: info Description
判断给定数组是否能在最多改变一个元素条件下成为非递减的
:::
::: details Solution
能变成非递减数组的话，原数组最多只能有一次递减发生。考虑发生递减的连续的三个元素`a, b, c`，其中`a <= b`且`b > c`，实际上只有两种情况：

- `a <= c`：既可将`b`降至`c`，也可将`c`升至`b`。但应尽可能使紧接着`c`的元素满足非递减，所以应将`b`降至`c`
- `a > c`: 只有将`c`升至`a`一种方式

在遍历检查时记录是否已有一次递减发生，若已发生则直接返回。基于此可知，在检测到可能存在的第二次递减时，一定用不到第一次递减的`b`元素，故上述第一种情况下无需实际地改变`b`的值

```java
class Solution {
	public boolean checkPossibility(int[] nums) {
		if (nums.length == 1)
			return true;
		boolean one = nums[0] > nums[1];
		for (int i = 1; i < nums.length - 1; ++i) {
			if (nums[i] > nums[i + 1]) {
				if (one)
					return false;
				one = true;
				if (nums[i - 1] > nums[i + 1])
					nums[i + 1] = nums[i];
			}
		}
		return true;
	}
}
```

:::

### [回文子串][08]

::: info Description
求给定字符串所有回文子串的数量
:::
::: details Solution
枚举所有可能的回文子串中心，将各中心向两侧尽可能延伸，以此枚举所有回文子串，时间复杂度比直接枚举子串两端再判断是否回文要低。

回文子串的中心有单字符和双字符两种，需要分开讨论扩展。枚举所有中心时有个小技巧：对于每个字符作为中心左端，中心右端要么是其本身，要么是右侧的下一个字符，故索引呈现强烈的奇偶规律性，可以将中心的左右端点并在一个循环中进行枚举，归纳可得共需枚举`2*n-1`次，左端点为`i/2`再取整，右端点为`i/2 + i%2`

```java
class Solution {
	public int countSubstrings(String s) {
		int res = 0;
		for (int i = 0; i < 2 * s.length() - 1; ++i) {
			int l = i >> 1, r = (i >> 1) + (i & 1);
			while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
				--l;
				++r;
				++res;
			}
		}
		return res;
	}
}
```

:::

### [找出游戏的获胜者][09]

::: info Description
`n`个人围成一圈，顺时针编号`1 ~ n`，从 1 号开始（含 1 号）往后数第`k`个淘汰，再从淘汰位置的下一个开始数，求如此淘汰到只剩最后一人的编号
:::
:::: details Solution
::: tabs
@tab 模拟
实际用数组模拟出每次的淘汰直至获得最后一人的编号。考虑到需常从数组中间删除元素，数组采用`LinkedList`实现

```java
class Solution {
    public int findTheWinner(int n, int k) {
        LinkedList<Integer> people = new LinkedList<>();
        for (int i = 1; i <= n; ++i)
            people.add(i);
        for (int idx = (k - 1) % n; n > 1; idx = (idx + k - 1) % --n)
            people.remove(idx);
        return people.get(0);
    }
}
```

@tab 约瑟夫环
典型的约瑟夫环问题，令`f(n, k)`表示`n`个人每次数第`k`个淘汰最终剩下的编号，在编号从 0 开始时，有递推关系`f(n, k) = [f(n-1, k) + k] % n`，且`f(1, k) = 0`。[【详细解释】][0A]

```java
class Solution {
    public int findTheWinner(int n, int k) {
        int res = 0;
        for (int i = 2; i <= n; ++i)
            res = (res + k) % i;
        return res + 1;
    }
}
```

:::
::::

### [盛最多水的容器][0B]

::: info Description
给定表示每个位置高度的整型数组，仅可选其中两条线与地面构成容器，求存储水的最大量
:::
::: details Solution
用双指针从两端相向逼近并维护最大储水量。指针如何移动？因为指针是相向移动的，故每次移动横向距离减小，而储水量的高取决于二者高度的较小值，故移动较高的指针必不可能获得更大的储水量，移动高度低的指针才有可能。

当二者一样高时可以同时移动两个指针，因为若只移动一个的话，不管新位置高度如何，横向距离变小且最小高度不会变大，储水量必变小。更进一步，移动的那个指针即使一直移到紧挨另一个，也不可能会获得更大的储水量，必须一个移动后另一个也移动才可能，故合并为两指针同时相向移动

```java
class Solution {
    public int maxArea(int[] height) {
        int res = 0;
        int left = 0, right = height.length - 1;
        while (left < right) {
            res = Math.max(res, (right - left) * Math.min(height[left], height[right]));
            if (height[left] < height[right])
                ++left;
            else if (height[left] > height[right])
                --right;
            else {
                ++left;
                --right;
            }
        }
        return res;
    }
}
```

:::

### [计算右侧小于当前元素的个数][0C]

::: info Description
给定整型数组`nums`，要求计算新数组`counts`，其中`counts[i]`的值是`nums[i]`右侧小于`nums[i]`的元素的数量
:::
::: details
可以转化为单点更新、区间查询型的离散化树状数组的应用。将原数组去重再排序并由此建立树状数组，从右至左遍历原数组的同时维护树状数组，并查询小于当前遍历值的所有数的数量和（因为是从右向左遍历的原数组，故树状数组中各值的数量即为当前遍历值右侧的数据）

还有基于归并排序变种的解法，见官方题解

```java
class Solution {
    public List<Integer> countSmaller(int[] nums) {
        List<Integer> res = new ArrayList<>();
        Set<Integer> set = new TreeSet<>();
        for (int n : nums)
            set.add(n);
        int[] a = new int[set.size()];
        int idx = 0;
        for (int n : set)
            a[idx++] = n;
        int[] c = new int[a.length + 1];
        for (int i = nums.length - 1; i >= 0; --i) {
            idx = Arrays.binarySearch(a, nums[i]) + 1;
            int sum = 0;
            for (int j = idx - 1; j > 0; j -= j & -j)
                sum += c[j];
            res.add(sum);
            for (; idx < c.length; idx += idx & -idx)
                c[idx] += 1;
        }
        Collections.reverse(res);
        return res;
    }
}
```

:::

### [翻转对][0E]

::: info Description
求给定数组`nums`所含翻转对的数量，其中翻转对指满足`i < j && nums[i] > 2*nums[j]`的索引对
:::
::: details Solution
求翻转对与归并排序过程十分契合，不断合并已排序子数组的过程中，可以顺便求出索引恰分别在左右子数组中的翻转对数量，而索引分布在同一子数组范围内的翻转对则在前一轮排序时已求出，故可借助整个归并排序过程逐渐求出所有翻转对。

在归并排序中合并两已升序排序的子数组过程中，设分别处于左右子数组的索引分别为`i`和`j`，本次待归并的总范围为`[left, right]`且`2*len == right-left+1`，右子数组起始索引为`left+len`，对于固定的`nums[i]`，在右侧维护最大的区间`[left+len, end)`，使得`end`处的元素为区间向右扩展遇到的首个不满足与`nums[i]`组成翻转对的元素，则对于`i`作为翻转对的左元素的情况来说，归并范围内本次需新增的数量为`end - (left + len)`，遍历左子数组中所有元素即可累加出所有新增翻转对数量，并且考虑到左右子数组的有序性，`end`在全过程随`i`单调不减。

本题还可用树状数组配合离散化来解，官方题解不好，可参考民间题解

```java
class Solution {
    public int reversePairs(int[] nums) {
        int cnt = 0;
        int[] tmp = new int[nums.length];
        for (int len = 1; len < nums.length; len <<= 1) {
            for (int left = 0; left < nums.length - len; left += len << 1) {
                int right = Math.min(nums.length - 1, left + (len << 1) - 1);
                for (int i = left; i <= right; ++i)
                    tmp[i] = nums[i];
                int l = left, r = left + len;
                int end = r; // [r, end)
                for (int i = l; i < r; ++i) {
                    while (end <= right && (long) tmp[i] > (long) tmp[end] << 1)
                        ++end; // end 随 i 单调不减
                    cnt += end - r; // end 最大是 right+1，恰表示开区间个数
                }
                for (int i = left; i <= right; ++i) {
                    if (l == left + len)
                        nums[i] = tmp[r++];
                    else if (r > right || tmp[l] <= tmp[r])
                        nums[i] = tmp[l++];
                    else
                        nums[i] = tmp[r++];
                }
            }
        }
        return cnt;
    }
}
```

:::

### [旋转数组][0D]

::: info Description
将给定数组向右轮转`k`个位置
:::
:::: details Solution
::: tabs
@tab 多重翻转
设`n`为数组长度，轮转`k`次后数组右侧的`k % n`个元素会移至左侧，而原本的其余元素会向右移动`k % n`个位置。故先翻转整个数组，使右侧的`k % n`个元素移到左侧，原左侧的其余元素移到右侧，但各自都是逆序的，再将两部分元素分别逆序即可

```java
class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        if (k != 0) {
            reverse(nums, 0, nums.length - 1);
            reverse(nums, 0, k - 1);
            reverse(nums, k, nums.length - 1);
        }
    }

    private void reverse(int[] nums, int left, int right) {
        for (; left < right; ++left, --right) {
            int t = nums[left];
            nums[left] = nums[right];
            nums[right] = t;
        }
    }
}
```

@tab 环状替换
题解见官方，补充解释见其评论

```java
class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        int count = gcd(nums.length, k);
        for (int start = 0; start < count; ++start) {
            int curIdx = start;
            int pre = nums[start];
            do {
                int nextIdx = (curIdx + k) % nums.length;
                int tmp = nums[nextIdx];
                nums[nextIdx] = pre;
                pre = tmp;
                curIdx = nextIdx;
            } while (curIdx != start);
        }
    }

    private int gcd(int x, int y) {
        return y == 0 ? x : gcd(y, x % y);
    }
}
```

:::
::::
<!-- ------------------------------------------------------- -->
[0E]:https://leetcode.cn/problems/reverse-pairs/
[0D]:https://leetcode.cn/problems/rotate-array/
[0C]:https://leetcode.cn/problems/count-of-smaller-numbers-after-self/
[0B]:https://leetcode.cn/problems/container-with-most-water/
[0A]:https://leetcode.cn/problems/find-the-winner-of-the-circular-game/solution/by-fuxuemingzhu-laof/
[09]:https://leetcode.cn/problems/find-the-winner-of-the-circular-game/
[08]:https://leetcode.cn/problems/palindromic-substrings/
[07]:https://leetcode.cn/problems/non-decreasing-array/
[06]:https://leetcode.cn/problems/candy/
[05]:https://leetcode.cn/problems/queue-reconstruction-by-height/
[04]:https://leetcode.cn/problems/majority-element-ii/
[03]:https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
[02]:https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
[01]:https://leetcode-cn.com/problems/longest-palindromic-substring/
[00]:https://leetcode-cn.com/problems/diagonal-traverse/
