---
title: 哈希
icon: relation
category:
  - algorithm
tag:
  - hash
---

### [字母异位词分组][00]

::: info Description
`字母异位词`是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次

将字符串数组中的`字母异位词`组合在一起，如：

input: `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]`

output: `[["bat"],["nat","tan"],["ate","eat","tea"]]`

:::

::: details Solution
同种异位词字母排序后一致，可作为键来收集同种异位词

```java
class Solution {
	public List<List<String>> groupAnagrams(String[] strs) {
		Map<String, List<String>> map = new HashMap<>();
		for (String str : strs) {
			char[] s = str.toCharArray();
			Arrays.sort(s);
			String string = new String(s);
			List<String> list = map.getOrDefault(string, new ArrayList<>());
			list.add(str);
			map.put(string, list);
		}
		return new ArrayList<List<String>>(map.values());
	}
}
```

:::

### [存在重复元素 II][01]

::: info Description
对于整数数组 $nums$ 和整数 $k$ ，判断数组中是否存在：$(i\neq j)\ \And\ \{nums[i] = nums[j]\}\ \And\ [abs(i - j) \le k]$
:::
::: details Solution1
维护大小为 $k$ 的滑动窗口，判断其中是否出现相同值

```java
class Solution{
	public boolean containsNearbyDuplicate(int[] nums, int k) {
		Set<Integer> set = new HashSet<>();
		for (int i = 0; i < nums.length; ++i) {
			if (i > k)
				set.remove(nums[i - k - 1]);
			if (!set.add(nums[i]))
				return true;
		}
		return false;
	}
}
```

:::
::: details Solution2
用哈希表存各值最后出现的角标，下次出现相同值时取出判断

```java
class Solution{
	public boolean containsNearbyDuplicate(int[] nums, int k) {
		Map<Integer, Integer> map = new HashMap<>();
		for (int i = 0; i < nums.length; ++i) {
			if (map.containsKey(nums[i]) && i - map.get(nums[i]) <= k)
				return true;
			map.put(nums[i], i);
		}
		return false;
	}
}
```

:::

### [寻找重复的子树][02]

::: info Description
找出二叉树中所有重复的子树（同种重复子树找任一棵的根节点即可）
:::
::: details Solution1
DFS 时序列化当前树，并用哈希表保存以备后续查重

```java
class Solution {
	private Map<String, Integer> count = new HashMap<>();
	private List<TreeNode> res = new ArrayList<>();

	public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
		dfs(root);
		return res;
	}

	private String dfs(TreeNode root) {
		if (root == null)
			return "#";
		String serial = root.val + "," + dfs(root.left) + "," + dfs(root.right);
		count.put(serial, count.getOrDefault(serial, 0) + 1);
		if (count.get(serial) == 2)		// only pick one of duplicate
			res.add(root);
		return serial;
	}
}
```

:::
::: details Solution2
优化上一方法，用三元组 $[val,\ uid(left),\ uid(left)]$ 替代序列化来标识各子树

```java
class Solution {
	private int idCnt = 1;
	private Map<String, Integer> trees = new HashMap<>();
	private Map<Integer, Integer> count = new HashMap<>();
	private List<TreeNode> res = new ArrayList<>();

	public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
		dfs(root);
		return res;
	}

	private int dfs(TreeNode root) {
		if (root == null)
			return 0;
		String serial = root.val + "," + dfs(root.left) + "," + dfs(root.right);
		// same serial get same uid, otherwise get increasing uid
		int uid = trees.computeIfAbsent(serial, x -> idCnt++);
		count.put(uid, count.getOrDefault(uid, 0) + 1);
		if (count.get(uid) == 2)
			res.add(root);
		return uid;
	}
}
```

:::

### [最长连续序列][03]

::: info Description
求无序数组中最长数字连续子序列（不要求序列数字在原数组中也连续）的长度

要求时间复杂度为 $O(n)$
:::
::: details Solution

```java
class Solution {
	public int longestConsecutive(int[] nums) {
		int maxLen = 0;
		if (nums.length != 0) {
			Set<Integer> set = new HashSet<>();
			for (int num : nums)
				set.add(num);
			for (int num : set) {
				if (!set.contains(num - 1)) {
					int curLen = 1;
					int cur = num;
					while (set.contains(cur + 1)) {
						++curLen;
						++cur;
					}
					maxLen = Math.max(maxLen, curLen);
				}
			}
		}
		return maxLen;
	}
}
```

:::

<!-- ------------------------------------------------------- -->
[00]:https://leetcode-cn.com/problems/group-anagrams/
[01]:https://leetcode-cn.com/problems/contains-duplicate-ii/
[02]:https://leetcode-cn.com/problems/find-duplicate-subtrees/
[03]:https://leetcode-cn.com/problems/longest-consecutive-sequence/
