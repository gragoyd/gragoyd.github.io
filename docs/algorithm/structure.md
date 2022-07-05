---
title: 数据结构
icon: float
category:
  - algorithm
tag:
  - structure
---

## 链表

### [环形链表 II][00]

::: info Description
找出链表入环处的节点（有环的话）
:::

::: details Solution
先说结论：对于有环的情况，快慢指针会在环内相遇，相遇后拿一个到链表头，俩指针同时同速开始遍历，相遇处即为入环节点

证明：设链表入环前路径长度为 $x$ ，从入环处顺序到快慢指针相遇点路径长度为 $y$ ，环剩余长度为 $z$

设第一次相遇时，快指针走过的路径长度为 $fast$ ，慢指针走过的路径长度为 $slow$

由于不知道 $x$ 与 $y+z$ 的长短关系，不妨假设相遇时快指针已经在环内绕了 $N$ 圈。则有

$$
\left\{
	\begin{array}{lr}
	fast=2\ slow \\
	fast=x+N(y+z)+y  \\
	slow=x+y \\
	\end{array}
\right.
$$

其中，相遇时慢指针一定还未在环内走完一圈（可反证）

所以可得 $x=N(y+z)-y$ ，其在第二阶段同速遍历时的语义为：某一指针从头走到入环处时，另一指针恰好从快慢相遇点出发绕环若干圈后再回退距离 $y$ ，即两指针恰好在入环处相遇

也可以将上述等式进一步化为 $x=(N-1)y+Nz\ =(N-1)(y+z)+z$ ，可更清晰地看出语义为从快慢相遇点绕环若干圈后再走 $z$ 长度，也恰好相遇与入环处

```java
class Solution {
	public ListNode detectCycle(ListNode head) {
		if (head == null || head.next == null)
			return null;
		ListNode slow = head, fast = head;
		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow == fast)
				break;
		}
		if (slow == fast) {
			fast = head;
			while (fast != slow) {
				fast = fast.next;
				slow = slow.next;
			}
			return fast;
		} else
			return null;
	}
}
```

:::

### [相交链表][01]

::: info Description
找出两链表开始相交的节点（若不相交则为空）
:::
::: details Solution
两指针同时开始遍历，遍历到结尾后再从另一链表头开始遍历，两指针相等时即为所求

不管是否有公共节点，俩指针最多在遍历完俩链表之时一定会相等（分段求路径和可证）

```java
class Solution {
	public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
		ListNode a = headA, b = headB;
		while (a != b) {
			a = a == null ? headB : a.next;
			b = b == null ? headA : b.next;
		}
		return a;
	}
}
```

:::

### [旋转链表][02]

::: info Description
将链表向右循环指定次数（每次尾部节点都移到链表头）
:::

::: details Solution
实际上就是将链表最后若干个节点整体移到链表头

```java
class Solution {
	public ListNode rotateRight(ListNode head, int k) {
		if (head == null || head.next == null)
			return head;
		int len = 0;
		ListNode front = head, back = head;
		while (front != null) {
			front = front.next;
			++len;
		}
		k = k % len;

		front = head;
		while (k-- > 0)
			front = front.next;
		while (front.next != null) {
			front = front.next;
			back = back.next;
		}
		front.next = head;
		front = back.next;
		back.next = null;
		return front;
	}
}

```

:::

### [回文链表][03]

::: info Description
判断链表是否为回文链表
:::
::: details Solution
先二分链表，再逆序后一链表，最后依次比较

```java
class Solution {
	public boolean isPalindrome(ListNode head) {
		if (head == null || head.next == null)
			return true;
		// locate half node
		ListNode fast = head, slow = head;
		while (fast != null && fast.next != null) {
			fast = fast.next.next;
			slow = slow.next;
		}
		// 若节点为奇数，则需将中间单独节点划分到前一链表中，
		// 避免反转后一链表时将其当作头节点
		if (fast != null)
			slow = slow.next;
		// cut 复用 fast
		fast = head;
		while (fast.next != slow)
			fast = fast.next;
		fast.next = null;
		// reverse begain slow
		ListNode newHead = null;
		while (slow != null) {
			ListNode t = slow.next;
			slow.next = newHead;
			newHead = slow;
			slow = t;
		}
		// compare 后一链表不长于前一链表
		while (newHead != null) {
			if (head.val != newHead.val)
				return false;
			head = head.next;
			newHead = newHead.next;
		}
		return true;
	}
}
```

:::

### [合并 K 个升序链表][04]

::: details Solution
用定制的优先队列确定接下来接哪个链表头

```java
class Solution {
	public ListNode mergeKLists(ListNode[] lists) {
		if (lists == null || lists.length == 0)
			return null;
		PriorityQueue<Integer> que = new PriorityQueue<>(new Comparator<Integer>() {
			@Override
			public int compare(Integer o1, Integer o2) {
				return lists[o1].val - lists[o2].val;
			}
		});
		for (int i = 0; i < lists.length; i++)
			if (lists[i] != null)
				que.add(i);
		ListNode head = new ListNode(), tail = head;
		while (!que.isEmpty()) {
			int idx = que.poll();
			tail.next = lists[idx];
			lists[idx] = lists[idx].next;
			tail = tail.next;
			tail.next = null;
			if (lists[idx] != null)
				que.add(idx);
		}
		return head.next;
	}
}
```

:::

## 队列

### [滑动窗口最大值][05]

::: info Description
固定大小的滑动窗口遍历数组，求次迭代时窗口内的最大值
:::
::: details Solution1
维护大顶堆的优先队列，队头元素即为最大值

为确保已经不在窗口的值被丢弃，需要同时记录值的索引

```java
class Solution {
	public int[] maxSlidingWindow(int[] nums, int k) {
		int[] res = new int[nums.length - k + 1];
		PriorityQueue<int[]> que = new PriorityQueue<>(new Comparator<int[]>() {
			@Override
			public int compare(int[] o1, int[] o2) {
				return o2[0] - o1[0];
			}
		});
		for (int i = 0; i < k; ++i)
			que.offer(new int[] { nums[i], i });
		res[0] = que.peek()[0];
		for (int i = k; i < nums.length; ++i) {
			que.offer(new int[] { nums[i], i });
			while (!que.isEmpty() && que.peek()[1] <= i - k)
				que.poll();
			res[i - k + 1] = que.peek()[0];
		}
		return res;
	}
}
```

:::
::: details Solution2
依照上述思想进行优化，使用记录值的索引的单调队列替代优先队列

遍历数组时维护索引对应的值单调递减的队列，则队头索引对应最大值

考虑滑动窗口的限制，需要在入队并维护单调队列之后，并且在取最大值记录答案之前，将队头所有不在滑动窗口中的索引都去除

```java
class Solution {
	public int[] maxSlidingWindow(int[] nums, int k) {
		Deque<Integer> deque = new LinkedList<Integer>();
		for (int i = 0; i < k; ++i) {
			while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i])
				deque.pollLast();
			deque.offerLast(i);
		}
		int[] ans = new int[nums.length - k + 1];
		ans[0] = nums[deque.peekFirst()];
		for (int i = k; i < nums.length; ++i) {
			while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i])
				deque.pollLast();
			deque.offerLast(i);
			while (deque.peekFirst() <= i - k)
				deque.pollFirst();
			ans[i - k + 1] = nums[deque.peekFirst()];
		}
		return ans;
	}
}
```

:::

## 栈

### [最长有效括号][06]

::: info Description
求只包含`(`和`)`的字符串中最长有效（格式正确且连续）括号子串的长度
:::
::: details Solution1
参考用栈进行基础版括号匹配的做法，用栈维护待匹配的`(`的索引

考虑到边界条件的处理，特殊地，令栈底为最后未匹配成功的`)`的索引（初始时先入栈虚拟索引-1 以确保始终合规）

在遍历过程中更新以当前`)`为结尾（如果是的话）的最长有效子串长度：

- 若为`(`，则索引入栈
- 若为`)`，先将栈顶元素当作`(`弹出表示匹配，弹出后：
  - 若栈为空，说明弹出的是前一个未被匹配的`)`索引，当前`)`匹配失败，索引入栈替代更新前一个未被匹配的`)`索引
  - 若栈非空，则当前`)`匹配成功，更新最长有效子串长度（即当前索引减去栈顶索引）

```java
class Solution {
	public int longestValidParentheses(String s) {
		Stack<Integer> stack = new Stack<>();
		stack.push(-1);
		int max = 0;
		for (int i = 0; i < s.length(); ++i) {
			char c = s.charAt(i);
			if (c == '(')
				stack.push(i);
			else {
				stack.pop();
				if (stack.isEmpty())
					stack.push(i);
				else
					max = Math.max(max, i - stack.peek());
			}
		}
		return max;
	}
}

```

:::
::: details Solution2
令 $dp[i]$ 表示以 $i$ 为止最长有效子串长度，显然若 $s[i]='('$ 则 $dp[i]=0$ ，对于 $s[i]=')'$ 的情况，可分为两种：

- 若 $s[i-1]='('$ ，则有效子串形如`...()`，显然 $dp[i]=dp[i-2]+2$
- 若 $s[i-1]=')'$ ，则有效子串形如`...))`，与 $i$ 匹配的索引为 $i-dp[i-1]-1$（如果存在的话），故仅当 $s[i-dp[i-1]-1]='('$ 时 $i$ 才有效，此时有 $dp[i]=dp[i-1]+2$ ，再考虑到匹配到`(`的左侧可能还存在连续的有效子串，故最终应为 $dp[i]=dp[i-1]+2+dp[i-dp[i-1]-2]$

```java
class Solution {
	public int longestValidParentheses(String s) {
		int max = 0;
		int[] dp = new int[s.length()];
		for (int i = 1; i < s.length(); ++i) {
			if (s.charAt(i) == ')')
				if (s.charAt(i - 1) == '(')
					dp[i] = (i > 1 ? dp[i - 2] : 0) + 2;
				else if (i > dp[i - 1] && s.charAt(i - dp[i - 1] - 1) == '(')
					dp[i] = dp[i - 1] + 2 + ((i - dp[i - 1] >= 2) ? dp[i - dp[i - 1] - 2] : 0);
			max = Math.max(max, dp[i]);
		}
		return max;
	}
}
```

:::
::: details Solution3
在遍历字符串时用变量 $left$ 和 $right$ 分别记录`(`和`)`的数量

从左往右遍历时，只考虑`)`不少于`(`的情况，则：

- 若 $left=right$ ，则恰好匹配，更新最大有效子串长度
- 若 $left<right$ ，则表示已经无法匹配，将两变量都清零重新计数

再从右往左遍历，此时只考虑`(`不少于`)`的情况，变量更新与上面相反

通过正反两次遍历涵盖所有情况求得答案

```java
class Solution {
	public int longestValidParentheses(String s) {
		int left = 0, right = 0, max = 0;
		for (int i = 0; i < s.length(); i++) {
			if (s.charAt(i) == '(')
				left++;
			else
				right++;
			if (left == right)
				max = Math.max(max, 2 * right);
			else if (right > left)
				left = right = 0;
		}
		left = right = 0;
		for (int i = s.length() - 1; i >= 0; i--) {
			if (s.charAt(i) == '(')
				left++;
			else
				right++;
			if (left == right)
				max = Math.max(max, 2 * left);
			else if (left > right)
				left = right = 0;
		}
		return max;
	}
}
```

:::

### [字符串解码][07]

::: info Description
已编码字符串的编码规则为若干`k[string]`，表示`string`重复`k`次（`k`为正整数）

输入保证合规，但允许嵌套编码
:::
::: details Solution1
用俩栈分别存重复次数及相应的子串

遍历字符时维护当前解码串，当前子串结束时将其重复指定次数再拼接到之前的子串后

```java
class Solution {
	public String decodeString(String s) {
		StringBuilder ans = new StringBuilder();
		Stack<Integer> times = new Stack<>();
		Stack<StringBuilder> ansStack = new Stack<>();
		int time = 0;
		for (char c : s.toCharArray()) {
			if (Character.isDigit(c))
				time = time * 10 + c - '0';
			else if (c == '[') {
				ansStack.add(ans);
				times.add(time);
				ans = new StringBuilder();
				time = 0;
			} else if (Character.isLetter(c)) {
				ans.append(c);
			} else {
				StringBuilder tmp = ansStack.pop();
				int t = times.pop();
				while (t-- > 0)
					tmp.append(ans);
				ans = tmp;
			}
		}
		return ans.toString();
	}
}
```

:::
::: details Solution2
递归隐式用栈，从前往后处理时可分为两种情况：

- 若当前为字母，则解析结果为当前字母加上后续递归解析的结果
- 若当前为数字开头，则解析之，跳过`[`后递归解析`string`，再跳过`]`后将其重复要求次数获得本段解码结果，解析结果为本段结果加上后续解析结果

```java
class Solution {
	private int idx = 0;
	private String str;

	public String decodeString(String s) {
		str = s;
		return getString();
	}

	private String getString() {
		if (idx == str.length() || str.charAt(idx) == ']')
			return "";
		char ch = str.charAt(idx);
		if (Character.isDigit(ch)) { // '1 ~ 9'
			StringBuilder res = new StringBuilder();
			int repeat = getDigit();
			++idx;// skip '['
			String tmp = getString();
			++idx;// skip ']'
			while (repeat-- > 0)
				res.append(tmp);
			return res.toString() + getString();
		} else { // 'a ~ z'
			++idx;
			return ch + getString();
		}
	}

	private int getDigit() {
		int res = 0;
		for (; idx < str.length() && Character.isDigit(str.charAt(idx)); ++idx)
			res = res * 10 + (str.charAt(idx) - '0');
		return res;
	}
}
```

:::

### [每日温度][09]

::: info Description
给定代表每日温度的数组，要求找出对于每一天来说，多少天后气温将会升高（若后续没有更高气温则为 0）
:::
::: details Solution
实际上就是对于每个数，找出后续首个更大的数的位置

维护递减的单调栈来缓存等待更高气温的日子，在找到更高气温的日子时，将一部分找到答案的日子出栈时即可得出答案

```java
class Solution {
	public int[] dailyTemperatures(int[] temperatures) {
		Stack<Integer> idxes = new Stack<>(); // 存索引
		int[] res = new int[temperatures.length];
		for (int cur = 0; cur < res.length; ++cur) {
			while (!idxes.isEmpty() && temperatures[idxes.peek()] < temperatures[cur]) {
				int pre = idxes.pop();
				res[pre] = cur - pre;
			}
			idxes.push(cur);
		}
		return res;
	}
}
```

:::

### [下一个更大元素 I][0A]

::: info Description
给定两无重复元素的无序数组 $nums1$ 和 $nums2$，且有 $nums1 \in nums2$，找出 `nums1` 中每个元素在 $nums2$ 中右侧首个大于它的元素的索引（若右侧不存在更大的则为-1）
:::
::: details Solution
首先遍历 $nums2$ ，利用递减单调栈得出每个元素右侧首个更大元素的索引，将其缓存下来，再遍历 $nums1$ 查缓存得出所有答案

```java
class Solution {
	public int[] nextGreaterElement(int[] nums1, int[] nums2) {
		HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
		Stack<Integer> stk = new Stack<>();
		for (int i = nums2.length - 1; i >= 0; --i) {
			while (!stk.isEmpty() && nums2[i] >= stk.peek())
				stk.pop();
			map.put(nums2[i], stk.isEmpty() ? -1 : stk.peek());
			stk.push(nums2[i]);
		}
		int[] res = new int[nums1.length];
		for (int i = 0; i < nums1.length; ++i)
			res[i] = map.get(nums1[i]);
		return res;
	}
}
```

:::

### [最短无序连续子数组][0B]

::: info Description
给定部分无序的升序数组，求其中最短无序连续子数组的长度
:::
::: details Solution1
令左侧有序范围为 $A$ ，最短无序范围为 $B$ ，右侧有序范围为 $C$ ，则有

$$
\left\{
	\begin{array}{lr}
	max(A) \leq min(B \cup C) \\
	min(C) \geq max(A \cup B)  \\
	\end{array}
\right.
$$

所以可分两次遍历分别确定无序数组的左右边界，以从左向右遍历为例，遍历过程中维护当前遍历过的最大值，不断令小于最大值的值为右边界来进行必要的扩展。注意求的是最短连续子数组，故必须严格小于才能扩展。从右往左类似，可确定左边界。实现的时候可以一次遍历同时更新确定

```java
class Solution {
	public int findUnsortedSubarray(int[] nums) {
		int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
		int left = -1, right = -1, n = nums.length;
		for (int i = 0; i < n; ++i) {
			if (max > nums[i])
				right = i;
			else
				max = nums[i];
			if (min < nums[n - i - 1])
				left = n - i - 1;
			else
				min = nums[n - i - 1];
		}
		return right == -1 ? 0 : right - left + 1;
	}
}
```

:::
::: details Solution2
在遍历时维护递增的单调栈，对于存在非单调区间的数组，其需要重排的区间范围显然与该区间的最值有关，所以需要同时记录该区间的最值

如何确定某值属于无序区间呢？在遍历到递减元素时需要出栈部分元素以维持栈的单调性，如果某个值被出栈了，则说明它一定不小于前后元素，显然它一定属于无序区间，所以我们应该记录已弹出的最大值，即为无序区间的最大值

再继续想整个出栈的过程，各元素由大到小出栈直到栈顶元素小于等于当前递减元素为止，那么至少所有出栈的元素都需要重新排列（即都属于无序区间），所以我们可以通过出栈来更新无序区间的左边界，由于可以直接更新左边界，显然我们不需要记录无序区间的最小值

在继续向右遍历的过程中，不断更新的已弹出的最大值可以帮我们确定无序区间的右边界，若当前值小于无序区间最大值，那必属于当前已探明的无序区间，可以借此不断扩展无序区间的右边界

```java
class Solution {
	public int findUnsortedSubarray(int[] nums) {
		Deque<Integer> stk = new ArrayDeque<>();
		int popMax = Integer.MIN_VALUE;
		int res = 0, left = nums.length;
		for (int i = 0; i < nums.length; ++i) {
			while (!stk.isEmpty() && nums[stk.peek()] > nums[i]) {
				left = Math.min(left, stk.peek());
				popMax = Math.max(popMax, nums[stk.peek()]);
				stk.pop();
			}
			stk.push(i);
			if (popMax > nums[i])
				res = i - left + 1;
		}
		return res;
	}
}
```

:::

### 接雨水

::: info Description
在二维空间中，给定各索引位置柱子高度，求所有柱子形成的凹坑能接到雨水的总量
:::

::: details Solution1
只有形成了完整的凹坑才能接住水，所以一个凹坑至少需要左中右三根柱子支持，所以应该在可能形成凹坑右边时来确认装水量

遍历时维护索引对应高度递减的单调栈，当遍历到递增元素时可能能形成凹坑，若此时栈内仅有一个元素则无法形成凹坑，在栈内不止一个元素的情况下则形成了凹坑，将栈内对应高度小于（等于时也装不了水）递增元素的元素依次出栈，出栈时栈顶和紧接栈顶两两考虑再联合当前递增元素，则可以计算出此凹坑部分接水量

```java
class Solution {
	public int trap(int[] height) {
		Stack<Integer> stk = new Stack<>();
		int res = 0;
		for (int i = 0; i < height.length; ++i) {
			while (!stk.isEmpty() && height[stk.peek()] < height[i]) {
				int top = stk.pop();
				if (stk.isEmpty())
					break;
				int left = stk.peek();
				res += (i - left - 1) * (Math.min(height[i], height[left]) - height[top]);
			}
			stk.push(i);
		}
		return res;
	}
}
```

:::
::: details Solution2
某一柱子作为凹坑底能接的雨水量取决于其两侧（不一定紧挨着）最高柱子的较矮值，故可以先求出各柱子两侧最高柱子的高度，再逐一计算各柱子接水量

具体实现是分两次扫描分别得到各柱子两侧最高柱子高度，以从左到右扫描为例，用动态规划记录各柱子左侧（含本身）最高柱子高度，初始 $leftMax[0]=height[0]$ ，后续有 $leftMax[i]=max(leftMax[i-1], height[i])$ ，从右向左类似

两次扫描后再遍历计算各柱子接水量为 $min⁡(leftMax[i], rightMax[i])−height[i]$

```java
class Solution {
	public int trap(int[] height) {
		int[] leftMax = new int[height.length];
		leftMax[0] = height[0];
		for (int i = 1; i < height.length; ++i)
			leftMax[i] = Math.max(leftMax[i - 1], height[i]);
		int[] rightMax = new int[height.length];
		rightMax[height.length - 1] = height[height.length - 1];
		for (int i = height.length - 2; i >= 0; --i)
			rightMax[i] = Math.max(rightMax[i + 1], height[i]);
		int ans = 0;
		for (int i = 0; i < height.length; ++i)
			ans += Math.min(leftMax[i], rightMax[i]) - height[i];
		return ans;
	}
}
```

:::
::: details Solution3
按照上述思路可利用双指针优化掉存储空间。考虑到存储左侧最高柱高的数组是从左向右扫描，而另一数组恰好相反，可用两指针和两变量替代数组

维护两个指针 $left$ 和 $right$ 以及两个变量 $leftMax$ 和 $rightMax$ ，两指针由两端开始异步相向移动指向当前作为凹坑底部接水的柱子，而两变量则分别记录各自指针扫过的最高柱高

在两指针相向遍历时，先进行两变量的更新，然后判断：

- 若 $height[left]<height[right]$ ，则必有 $leftMax<rightMax$ ，得出此柱子接水量为 $leftMax−height[left]$ ，并将 $left$ 右移
- 若 $height[left]\geq height[right]$ ，则必有 $leftMax\geq rightMax$ ，得出此柱子接水量为 $rightMax−height[right]$ ，并将 $right$ 左移

注意，此处两指针所指柱子的高度关系与两变量的大小关系严格一致，是因为到底哪个指针能继续移动是由所指柱子高度关系决定的

```java
class Solution {
	public int trap(int[] height) {
		int left = 0, right = height.length - 1;
		int leftMax = height[left], rightMax = height[right];
		int res = 0;
		while (left < right) {
			if (height[left] < height[right]) {
				res += leftMax - height[left++];
				leftMax = Math.max(leftMax, height[left]);
			} else {
				res += rightMax - height[right--];
				rightMax = Math.max(rightMax, height[right]);
			}
		}
		return res;
	}
}
```

:::

### [柱状图中最大的矩形][0D]

::: info Description
给定各柱状图各位置高度，求能拼成最大矩形的面积
:::
::: details Solution1
聚焦导致拼凑成矩形面积变小的直观原因，是柱状图某根柱子向两端延伸拼凑矩形时新拼入的柱子变矮了，即对于各种拼接矩形来说，一定包含某根柱子的面积最大的矩形取决于其向两端延伸多少后的新柱子才会变矮

可以分两次遍历，求出各柱子往左和右延伸时到哪的柱子会变矮。以往右为例，遍历时维护递增的单调栈以找出各柱子左侧首个变矮的柱子，反之类似

最后遍历各柱子求出包含其能拼成最大矩形的面积的最大值

考虑到计算面积时索引相减的问题，将两侧不存在变矮柱子的情况进行符合计算的特殊值填充

```java
class Solution {
	public int largestRectangleArea(int[] heights) {
		Stack<Integer> stk = new Stack<>();
		int[] left = new int[heights.length];
		int[] right = new int[heights.length];
		for (int i = 0; i < heights.length; ++i) {
			while (!stk.isEmpty() && heights[stk.peek()] >= heights[i])
				stk.pop();
			left[i] = stk.isEmpty() ? -1 : stk.peek();
			stk.push(i);
		}
		stk.clear();
		for (int i = heights.length - 1; i >= 0; --i) {
			while (!stk.isEmpty() && heights[stk.peek()] >= heights[i])
				stk.pop();
			right[i] = stk.isEmpty() ? heights.length : stk.peek();
			stk.push(i);
		}
		int res = 0;
		for (int i = 0; i < heights.length; ++i)
			res = Math.max(res, heights[i] * (right[i] - left[i] - 1));
		return res;
	}
}
```

:::
::: details Solution2
按照上述思路可以发现，从左往右遍历时，接连被出栈的柱子肯定是由大到小但都不小于当前柱子的，这恰好可以说明出栈的那些柱子右侧首个变矮的柱子都是当前柱子，故可以一次遍历同时得到两侧信息

由于右侧信息是在出栈时才能收集到，考虑遍历完后栈内剩余柱子，显然它们右侧不存在首个变矮的柱子

```java
class Solution{
	public int largestRectangleArea(int[] heights) {
		Stack<Integer> stk = new Stack<>();
		int[] left = new int[heights.length];
		int[] right = new int[heights.length];
		for (int i = 0; i < heights.length; ++i) {
			while (!stk.isEmpty() && heights[stk.peek()] >= heights[i])
				right[stk.pop()] = i;
			left[i] = stk.isEmpty() ? -1 : stk.peek();
			stk.push(i);
		}
		while (!stk.isEmpty())
			right[stk.pop()] = heights.length;
		int res = 0;
		for (int i = 0; i < heights.length; ++i)
			res = Math.max(res, heights[i] * (right[i] - left[i] - 1));
		return res;
	}
}
```

:::

## 树

### [从前序与中序遍历序列构造二叉树][0E]

::: info Description
给定二叉树前序遍历与中序遍历节点值（各节点值都不同）的数组，构造该二叉树
:::
::: details Solution
前序遍历结构为`[root, [left sub tree preorder], [right sub tree preorder]]`，中序遍历结构为`[root, [left sub tree inorder], [right sub tree inorder]]`，故对于每一级的每棵树，都可以通过前序遍历的根节点找到其在中序遍历结果内的索引（先构建哈希表加速查询），从而确定左右子树中各有多少节点，进而在前序遍历中继续下一级划分，递归构造二叉树

```java
class Solution {
	private int[] preorder;
	private Map<Integer, Integer> index = new HashMap<>();

	public TreeNode buildTree(int[] preorder, int[] inorder) {
		this.preorder = preorder;
		for (int i = 0; i < inorder.length; ++i)
			index.put(inorder[i], i);
		return make(0, preorder.length - 1, 0, inorder.length - 1);
	}

	private TreeNode make(int preLeft, int preRight, int inLeft, int inRight) {
		if (preLeft > preRight)
			return null;
		TreeNode node = new TreeNode(preorder[preLeft]);
		int inIdx = index.get(node.val); // 根节点在中序遍历的索引
		node.left = make(preLeft + 1, preLeft + inIdx - inLeft, inLeft, inIdx - 1);
		node.right = make(preLeft + inIdx - inLeft + 1, preRight, inIdx + 1, inRight);
		return node;
	}
}
```

:::

### [二叉树的最近公共祖先][0F]

::: info Description
给定二叉树和其中的两节点，求其最近公共祖先（可以是其本身）
:::
::: details Solution
构造递归函数，每次递归返回该侧子树中某节点的最近公共祖先，由底至上逐级返回：

- 若根节点是某个指定节点，则直接返回根节点（祖先是本身）
- 若已遍历完或左右都未找到指定节点，则返回空
- 若指定两节点分别在左右子树，则返回根节点
- 若两节点都在同一侧，则返回该侧子节点

```java
class Solution {
	public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
		if (root == null || root == p || root == q)
			return root;
		TreeNode l = lowestCommonAncestor(root.left, p, q);
		TreeNode r = lowestCommonAncestor(root.right, p, q);
		// nn->n, lr->root, ln->l, nr->r
		return l == null ? r : r == null ? l : root;
	}
}
```

:::

### [验证二叉搜索树][10]

::: info Description
判断给定二叉树是否为搜索树【左子树仅含小于当前节点的数，右子树仅含大于当前节点的数，左右子树都是搜索树】

注意：此题的节点数据集的值覆盖所有`int`型
:::
::: details Solution
考虑节点值的范围，用`long`型存储辅助值

一种解法是利用搜索树中序遍历的单调性，在递归或者模拟隐式栈来进行中序遍历时维护上一个节点值，每次检查当前值是否合规，代码略

另一种是递归思想，利用左右子树值有界的特性，在递归时携带当前节点的上下界来快速判断，代码如下

```java
class Solution {
	public boolean isValidBST(TreeNode root) {
		return check(root, Long.MIN_VALUE, Long.MAX_VALUE);
	}

	private boolean check(TreeNode root, long low, long high) {
		if (root == null)
			return true;
		if (root.val <= low || root.val >= high)
			return false;
		return check(root.left, low, root.val) && check(root.right, root.val, high);
	}
}
```

:::

### [二叉搜索树中的插入操作][11]

::: info Description
将给定值插入给定的二叉搜索树中（保证给定值与所有节点值互不相同）
:::
::: details Solution1
如果值插入的地方不是搜索树底部的话，那势必将导致需要进行类似于堆的下沉操作那种额外开销，所以将值插入到搜索树底部是最优方案（一定可以插入到树底），所以只需要一直向下迭代判断，最后即可得出合适的底部插入位置

```java
class Solution {
	public TreeNode insertIntoBST(TreeNode root, int val) {
		if (root == null)
			return new TreeNode(val);
		TreeNode pos = root;
		while (pos != null) {
			if (val < pos.val) {
				if (pos.left == null) {
					pos.left = new TreeNode(val);
					break;
				} else
					pos = pos.left;
			} else {
				if (pos.right == null) {
					pos.right = new TreeNode(val);
					break;
				} else
					pos = pos.right;
			}
		}
		return root;
	}
}
```

### [删除二叉搜索树中的节点][12]

::: info Description
给定二叉搜索树的根节点和一个值，删除二叉搜索树中对应的节点（存在的话），并保证二叉搜索树的性质不变
:::
::: details Solution
向下搜索时若找到了对应节点就执行删除。因为删除后需要把新替代的节点连到上一级节点，故递归写法比较省事，但实际上只需要先判断根节点是否符合，后续就可以采用迭代实现以避免递归的隐式栈空间消耗。

在删除时分情况：若为叶子节点则直接删除；若仅有一侧有子节点则直接用该子节点替代对应节点；若左右子节点都存在，则寻找其前驱节点（左子树中最大的）或者后继节点（右子树中最小的）进行替代

```java
class Solution {
	public TreeNode deleteNode(TreeNode root, int key) {
		if (root == null)
			return null;
		if (root.val == key)
			return del(root);
		TreeNode cur = root;
		while (cur != null) {
			if (cur.left != null && cur.left.val == key) {
				cur.left = del(cur.left);
				break;
			}
			if (cur.right != null && cur.right.val == key) {
				cur.right = del(cur.right);
				break;
			}
			if (cur.val > key)
				cur = cur.left;
			else
				cur = cur.right;
		}
		return root;
	}

	private TreeNode del(TreeNode root) {
		if (root.left == null && root.right == null)
			return null;
		else if (root.left == null || root.right == null)
			return root.left == null ? root.right : root.left;
		else {	// find the successor node
			TreeNode res = root.right;
			while (res.left != null)
				res = res.left;
			res.left = root.left;
			return root.right;
		}
	}
}
```

:::

### [二叉树的锯齿形层序遍历][13]

::: info Description
对给定二叉树进行锯齿形层序遍历（即往下一层层遍历，各层从左往右与从右往左交替）
:::
::: details Solution
二叉树层序遍历可用广度优先遍历实现，但如此每层都是从左往右，故可以设指示变量来在交替的层之间进行方向记录，在记录每层遍历到的节点值时根据指示从头还是尾依次添加

```java
class Solution {
	public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
		List<List<Integer>> res = new ArrayList<>();
		Queue<TreeNode> que = new LinkedList<>();
		boolean leftToRight = true;
		if (root != null)
			que.offer(root);
		while (!que.isEmpty()) {
			int size = que.size();
			Deque<Integer> tmp = new LinkedList<>();
			while (size-- > 0) {
				TreeNode cur = que.poll();
				if (leftToRight)
					tmp.offerLast(cur.val);
				else
					tmp.offerFirst(cur.val);
				if (cur.left != null)
					que.add(cur.left);
				if (cur.right != null)
					que.add(cur.right);
			}
			res.add(new LinkedList<>(tmp));
			leftToRight = !leftToRight;
		}
		return res;
	}
}
```

:::

### [填充每个节点的下一个右侧节点指针 II][14]

::: info Description
给定节点带有仅初始化的额外指针参数的二叉树，要求在仅使用常量级额外空间前提下，令所有节点的该参数都指向同层右侧节点（若右侧无节点则仍为空）
:::
::: details Solution
若使用基于 BFS 的层序遍历则需要额外的队列来存储一层以及下一层相关节点，故应考虑利用节点自身的额外参数，在实现题目要求的同时起到队列的作用从而节省空间。考虑到队列的作用是遍历一层时准备好下一层遍历，若我们假设当前层已经实现题目需求（起始时根节点已符合要求），则可以用链表的形式进行遍历，进一步，若遍历此层的同时能将下一层也逐步通过额外参数进行连接，则可重复此过程而无需队列的额外空间。

具体来说，首先在即将开始遍历当前层的左侧头节点时，准备好下一层的哑节点作为下一层头节点的前驱节点，然后在从左到右遍历当前层的每个节点时，都将其左右子节点依次连到链表尾部（即前驱节点后），当该层遍历完之后只需要从哑节点的后继节点（即下一层的头节点）开始重复该过程即可

```java
class Solution {
	public Node connect(Node root) {
		Node dummy = new Node();
		Node cur = root, pre = dummy;
		while (cur != null) {
			if (cur.left != null) {
				pre.next = cur.left;
				pre = pre.next;
			}
			if (cur.right != null) {
				pre.next = cur.right;
				pre = pre.next;
			}
			cur = cur.next;
			if (cur == null) {
				cur = dummy.next;
				dummy.next = null;
				pre = dummy;
			}
		}
		return root;
	}
}
```

:::

### [二叉树的序列化与反序列化][15]

::: info Description
实现一个能将二叉树序列化为字符串并能将字符串反序列化为二叉树功能的类
:::
::: details Solution
在 DFS 时拼接字符串实现序列化，类似思路实现反序列化

```java
class Codec {
	private StringBuilder serial = new StringBuilder();
	private List<String> nodes = new LinkedList<>();

	// Encodes a tree to a single string.
	public String serialize(TreeNode root) {
		encode(root);
		return serial.toString();
	}

	private void encode(TreeNode root) {
		if (root == null)
			serial.append("#,");
		else {
			serial.append(root.val + ",");
			encode(root.left);
			encode(root.right);
		}
	}

	// Decodes your encoded data to tree.
	public TreeNode deserialize(String data) {
		nodes.addAll(Arrays.asList(data.split(",")));
		return decode();
	}

	private TreeNode decode() {
		if (nodes.get(0).equals("#")) {	// 注意字符串比较方式
			nodes.remove(0);
			return null;
		}
		TreeNode node = new TreeNode(Integer.valueOf(nodes.get(0)));
		nodes.remove(0);
		node.left = decode();
		node.right = decode();
		return node;
	}
}
```

:::

### [二叉树展开为链表][08]

::: info Description
将二叉树节点变为只存在右孩子的先序链表（所有节点左孩子都为空）
:::
::: details Solution1
直接先序遍历并存储各节点，再依次修改其左右孩子形成链表

```java
class Solution {
	private Queue<TreeNode> que = new LinkedList<>();

	public void flatten(TreeNode root) {
		fo(root);
		TreeNode head = new TreeNode();
		TreeNode cur = head;
		while (!que.isEmpty()) {
			cur.right = que.poll();
			cur = cur.right;
			cur.left = null;
		}
		cur.right = null;
	}

	private void fo(TreeNode root) {
		if (root != null) {
			que.offer(root);
			fo(root.left);
			fo(root.right);
		}
	}
}
```

:::

::: details Solution2
实际上就是迭代时将右孩子变为左子树最右下叶节点的右孩子，再将左孩子变为右孩子

此法在迭代到每个需要处理的节点时，需要遍历找出该节点左子树的最右下叶节点，看起来貌似更耗时，但实际上所有遍历过的节点都会在本次迭代立刻成为最终右链表的一部分，并且不会在迭代时搜索左子树时被再次遍历到，最终总体来看每个节点只需被遍历两次

```java
class Solution {
	public void flatten(TreeNode root) {
		TreeNode cur = root;
		while (cur != null) {
			if (cur.left != null) {
				TreeNode next = cur.left;
				TreeNode pre = next;
				while (pre.right != null) {
					pre = pre.right;
				}
				pre.right = cur.right;
				cur.right = next;
				cur.left = null;
			}
			cur = cur.right;
		}
	}
}
```

:::

### [监控二叉树][16]

::: info Description
在给定的二叉树的节点上安装摄像头，节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。求监控树的所有节点所需的最小摄像头数量
:::
::: details Solution
考虑哪些结构的树可以将摄像头的作用最大化，或考虑哪些节点可以省掉摄像头。显然在叶子节点上放摄像头并不好，因为其监控俩字节点的功能被浪费了，所以应从叶子节点的父节点开始放置摄像头，由此可以想到用 DFS，在由下往上返回时通过返回值将各子树的监控覆盖情况传递给父节点，由此决定上一层如何放置摄像头。实际上共有三种情况：

1. 俩子节点都能由之前放置的摄像头监控到，应跳过本节点但因此父节点必须放置摄像头
2. 至少有一个子节点未被之前放置的摄像头监控到，故应在本节点放置摄像头，而父节点因此会被覆盖（返回值需体现）
3. 俩子节点都已被监控覆盖，并至少有一个子节点放有摄像头，则此三节点树恰好完全覆盖但父节点未被覆盖（返回值应与空节点的相同）

接下来设计 DFS 函数返回值，令返回值为俩子节点对本节点监控的贡献度（还有特殊情况的特定值）：

- 从空节点开始考虑，返回 0，同时也是上述第三种情况，即子树恰与父节点完全无联系
- 接下来考虑俩子树返回值之和
  - 若为零则说明俩子节点都未将本节点纳入监控范围，所以应将本节点视作叶子节点，不放置摄像头，但父节点必须放置，令相应返回值为 3
  - 若为 1 或 2，则说明本节点已由子节点的摄像头纳入监控范围，对应上述第三种情况，返回 0
  - 若和大于 2，则说明至少有一个子节点的返回值为 3（未被监控覆盖），要求本节点必须放置摄像头，放置后返回 1

注意最后根节点的返回值也是含有监控覆盖信息的，所以也需要根据上述规则判断是否需要在根节点再放置一个摄像头

```java
class Solution {
	private int res = 0;

	public int minCameraCover(TreeNode root) {
		return dfs(root) > 2 ? res + 1 : res;
	}

	private int dfs(TreeNode node) {
		if (node == null)
			return 0;
		int val = dfs(node.left) + dfs(node.right);
		if (val == 0)
			return 3;
		if (val < 3)
			return 0;
		++res;
		return 1;
	}
}
```

:::
<!-- ------------------------------------------------------- -->
[00]:https://leetcode-cn.com/problems/linked-list-cycle-ii/
[01]:https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
[02]:https://leetcode-cn.com/problems/rotate-list/
[03]:https://leetcode-cn.com/problems/palindrome-linked-list/
[04]:https://leetcode-cn.com/problems/merge-k-sorted-lists/
[05]:https://leetcode-cn.com/problems/sliding-window-maximum/
[06]:https://leetcode-cn.com/problems/longest-valid-parentheses/
[07]:https://leetcode-cn.com/problems/decode-string/
[08]:https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
[09]:https://leetcode-cn.com/problems/daily-temperatures/
[0A]:https://leetcode-cn.com/problems/next-greater-element-i/
[0B]:https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
[0C]:https://leetcode-cn.com/problems/trapping-rain-water/
[0D]:https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
[0E]:https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
[0F]:https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
[10]:https://leetcode.cn/problems/validate-binary-search-tree/
[11]:https://leetcode.cn/problems/insert-into-a-binary-search-tree/
[12]:https://leetcode.cn/problems/delete-node-in-a-bst/
[13]:https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/
[14]:https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/
[15]:https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
[16]:https://leetcode.cn/problems/binary-tree-cameras/
