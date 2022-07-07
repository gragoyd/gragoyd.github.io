---
order: 1
icon: guide
date: 2022-04-11
title: 算法讲解
category:
  - algorithm
star: true
---

### 反转链表

::: code-tabs
@tab 头插法

```java
class Solution {
    public ListNode reverseList(ListNode head) {
		ListNode p = null;
		while (head != null) {
			ListNode n = head.next;
			head.next = p;
			p = head;
			head = n;
		}
		return p;
    }
}
```

@tab 递归

```java
class Solution {
    public ListNode reverseList(ListNode head) {
		if(head == null || head.next == null)
			return head;
		ListNode res = reverseList(head.next);
		head.next.next = head;
		head.next = null;
		return res;
    }
}
```

:::

### 队列和栈相互实现

::: code-tabs
@tab 用栈实现队列

```java
class CQueue {
	private Stack<Integer> in;
	private Stack<Integer> out;

	public CQueue() {
		in = new Stack<>();
		out = new Stack<>();
	}

	public void appendTail(int value) {
		in.push(value);
	}

	public int deleteHead() {
		if (out.isEmpty())
			while (!in.isEmpty())
				out.push(in.pop());
		if (out.isEmpty())
			return -1;
		else
			return out.pop();
	}
}
```

@tab 用队列实现栈

```java
class MyStack {
	private Queue<Integer> que;

	public MyStack() {
		que = new LinkedList<>();
	}

	public void push(int x) {
		que.add(x);
		int size = que.size();
		while (size-- > 1)
			que.add(que.poll());
	}

	public int pop() {
		return que.poll();
	}

	public int top() {
		return que.peek();
	}

	public boolean empty() {
		return que.isEmpty();
	}
}
```

:::

### BFS 模版

::: code-tabs
@tab 树

```java
class Solution {
	public List<List<Integer>> levelOrder(TreeNode root) {
		Queue<TreeNode> queue = new LinkedList<>();
		queue.add(root);
		while (!queue.isEmpty()) {
			int size = queue.size();
			for (int i = 0; i < size; i++) {
				TreeNode node = queue.poll();
				if (node.left != null)
					queue.add(node.left);
				if (node.right != null)
					queue.add(node.right);
			}
		}
	}
}
```

@tab 图

```java
class Solution {
	int BFS(Node root, Node target) {
		Queue<Node> queue = new LinkedList<>();
		Set<Node> used = new HashSet<>();
		int step = 0; // 根节点到目标节点的路径长
		queue.add(root);
		used.add(root);
		while (!queue.isEmpty()) {
			++step;
			int size = queue.size();
			while (size-- > 0) {
				Node cur = queue.poll();
				if (cur == target)
					return step;
				for (Node next : cur.neighbors) {
					if (!used.contains(next)) {
						queue.add(root);
						used.add(root);
					}
				}
			}
		}
		return -1; // 未找到
	}
}
```

:::

### 单调队列

貌似单调队列的作用常可以用优先队列来替代

```java
class MaxQueue {
	private Queue<Integer> queue;
	private Deque<Integer> deque;

	public MaxQueue() {
		queue = new LinkedList<>();
		deque = new LinkedList<>();
	}

	public int max_value() {
		return deque.isEmpty() ? -1 : deque.peekFirst();
	}

	public void push_back(int value) {
		queue.offer(value);
		while (!deque.isEmpty() && deque.peekLast() < value)
			deque.pollLast();
		deque.offerLast(value);
	}

	public int pop_front() {
		if (queue.isEmpty())
			return -1;
		if (deque.peekFirst().equals(queue.peek()))
			deque.pollFirst();
		return queue.poll();
	}
}
```

### 二叉树模拟隐式栈进行遍历

::: code-tabs
@tab 前序

```java
class Solution {
	public ArrayList<Integer> preorderTraversal(TreeNode root) {
		ArrayList<Integer> res = new ArrayList<>();
		if (root != null) {
			Deque<TreeNode> stack = new LinkedList<>();
			stack.push(root);
			while (!stack.isEmpty()) {
				root = stack.pop();
				res.add(root.val);
				// 右子节点先入栈，以保证出栈为前序
				if (root.right != null)
					stack.push(root.right);
				if (root.left != null)
					stack.push(root.left);
			}
		}
		return res;
	}
}
```

@tab 中序

```java
class Solution {
	public ArrayList<Integer> inorderTraversal(TreeNode root) {
		ArrayList<Integer> res = new ArrayList<>();
		Deque<TreeNode> stack = new LinkedList<>();
		while (root != null || !stack.isEmpty()) {
			while (root != null) {
				stack.push(root);
				root = root.left;
			}
			root = stack.pop();
			res.add(root.val);
			root = root.right;
		}
		return res;
	}
}
```

@tab 后序

```java
class Solution {
	public ArrayList<Integer> postorderTraversal(TreeNode root) {
		ArrayList<Integer> res = new ArrayList<>();
		if (root != null) {
			Deque<TreeNode> stack = new LinkedList<>();
			stack.push(root);
			while (!stack.isEmpty()) {
				root = stack.pop();
				res.add(root.val);
				// 需注意令右子节点先出栈
				if (root.left != null)
					stack.push(root.left);
				if (root.right != null)
					stack.push(root.right);
			}
		}
		Collections.reverse(res);
		return res;
	}
}
```

:::

### 图 DFS

::: code-tabs
@tab 隐式栈

```java
class Solution {
	boolean DFS(Node cur, Node target, Set<Node> visited) {
		if (cur == target)
			return true;
		for (Node next : cur.neighbor) {
			if (!visited.contains(next)) {
				visited.add(next);
				boolean result = DFS(next, target, visited);
				if (result)
					return true;
			}
		}
		return false;
	}
}
```

@tab 模拟调用栈

```java
public class Solution {
	boolean DFS(Node root, int target) {
		Set<Node> visited;
		Stack<Node> stk;
		stk.push(root);
		while (!stk.isEmpty()) {
			Node cur = stk.pop();
			if (cur == target) 
				return true;
			for (Node next : cur.neighbors) {
				if (!visited.contains(next)) {
					stk.push(next);
					visited.add(next);
				}
			}
		}
		return false;
	}
}
```

:::

### 单调栈

单调栈的思想与单调队列类似，即在入栈前将栈内不满足单调性的元素都出栈，确保当前元素入栈后整体保持原有单调性

单调栈的思想不难，但用到它的题一般不简单，在具体运用时经常需要依照实际情况判断栈内到底是存元素值本身还是存其索引

```java
class Solution {
	public void MonotoneStack(int[] nums) {
		Deque<Integer> stk = new ArrayDeque<>();
		for (int num : nums) {
			while (!stk.isEmpty() && stk.peek() < num)
				stk.pop();
			stk.push(num);
		}
	}
}
```

### 拓扑排序

有向图的拓扑排序是指满足上游节点一定排在下游节点前面的一种全节点排列，并且有：

- 若有向图中存在环，则其不存在拓扑排序（环中节点顺序亦先亦后，与排序中确定的先后矛盾）
- 若为有向无环图，则其拓扑排序可能不止一种（如无边图的任意节点排列都是拓扑排序）

所以对于有先后制约关系的遍历搜索可以套用拓扑排序模版，用 DFS 或 BFS 都可以实现

#### DFS 拓扑

假设节点有未搜索、搜索中、已完成三种状态，搜索完的节点入栈成为结果的一部分。若某节点的所有下游节点都已搜索完，则此节点可以入栈且满足拓扑排序的要求，在 DFS 情景中就是完成所有下游节点搜索后回溯时即为搜索完成

具体实现时，先由给定的制约关系构建有向图（二维数组），每轮搜索开始时随机取一个未搜索的节点进行搜索。对于当前节点，将其标记为搜索中，对于其所有下游节点：

- 若未搜索，则进入搜索
- 若搜索中，则图存在环，不存在拓扑排序，终止搜索
- 若已完成，无需操作

当所有下游节点都搜索完成后，当前节点标记为已完成并入栈，然后回溯

若全过程都不存在环，则最后从栈顶到栈底即为一种拓扑排序（栈可以用带额外指针的数组存）

#### BFS 拓扑

考虑套用 BFS 模版正向生成拓扑排序。若节点的入度为零，则说明其已无上游节点，此类节点都可以先加入排序中进行顺序固定，由于该类节点不再对其下游节点造成后续排序影响，故可将其的所有出边移除（即相应下游节点的入度减一），同时将入度新变为零的节点入队用于下一批搜索，重复搜索直到排序包含所有节点（得到一种拓扑排序）或者剩余节点入度都非零（存在环）

具体实现时先根据给定制约关系构建有向图（二维数组）同时统计各节点的入度，初始将所有入度为零的节点入队，对于队中每一批节点：

- 出队并加入答案
- 将其所有出边移除（相应下游节点入度减一），将入度新变为零的节点入队

完成搜索后若排序含所有节点则得到一种拓扑排序，否则说明图中存在导致相互入度不为零的节点（有环），不存在拓扑排序

#### 拓扑排序举例

[课程表 II](https://leetcode-cn.com/problems/course-schedule-ii/)：
给定所有必须得上的课的先修关系，求一种修完所有课的顺序（存在的话）

::: code-tabs
@tab DFS

```java
class Solution {
	private List<List<Integer>> edges = new ArrayList<>();
	private boolean valid = true;	// 是否无环，用于剪枝和返回答案判定
	private int[] state;	// 节点状态：0 未搜索，1 搜索中，2 已完成
	private int[] res;
	private int idx;

	public int[] findOrder(int numCourses, int[][] prerequisites) {
		for (int i = 0; i < numCourses; ++i)
			edges.add(new ArrayList<>());
		for (int[] info : prerequisites)
			edges.get(info[1]).add(info[0]);
		state = new int[numCourses];
		res = new int[numCourses];
		idx = numCourses - 1;
		// 开始若干轮搜索【注意此处需配合 dfs() 同步剪枝，否则出错】
		for (int i = 0; i < numCourses && valid; ++i)
			if (state[i] == 0)
				dfs(i);

		if (valid)
			return res;
		else
			return new int[] {};
	}

	private void dfs(int u) {
		state[u] = 1;
		for (int v : edges.get(u)) {
			if (state[v] == 0) {
				dfs(v);
				if (!valid)		// 剪枝
					return;
			} else if (state[v] == 1) {
				valid = false;
				return;
			}	// 下游节点已搜索完成则无需操作
		}
		state[u] = 2;
		res[idx--] = u;
	}
}
```

@tab BFS

``` java
class Solution {
	public int[] findOrder(int numCourses, int[][] prerequisites) {
		List<List<Integer>> edges = new ArrayList<>();
		for (int i = 0; i < numCourses; ++i)
			edges.add(new ArrayList<>());
		int[] res = new int[numCourses];
		int[] inDeg = new int[numCourses];
		int idx = 0;
		Queue<Integer> que = new LinkedList<>();
		for (int[] info : prerequisites) {
			edges.get(info[1]).add(info[0]);
			++inDeg[info[0]];
		}
		for (int i = 0; i < numCourses; ++i)
			if (inDeg[i] == 0)
				que.offer(i);
		while (!que.isEmpty()) {
			int u = que.poll();
			res[idx++] = u;
			for (int v : edges.get(u)) {
				--inDeg[v];
				if (inDeg[v] == 0)
					que.offer(v);
			}
		}
		if (idx == numCourses)
			return res;
		else
			return new int[] {};
	}
}
```

:::

### 并查集

并查集构建若干集合的缓存，用于快速查询某元素是否属于某集合，或者是俩元素是否属于同一集合

具体实现是在内部用数组记录节点的父节点，初始时默认各节点独立成集合（父节点都是自己），后续通过更改父节点值来将节点连至父节点（类似用数组存储的链表）。在将两节点合并至同一集合时，先找到代表各自集合的根节点，再将两根节点连接成父子关系，根据连接规则的不同可分为两种：

高度并查集：维护存储各节点的高度（自己和所有子节点的数量）的数组。因为集合高度就是查找集合根节点的最多迭代次数，所以合并原则是令合并后集合的高度最小，即两集合的根节点合并时高度大的为最终根节点，如此可确保合并后集合高度不会大于原有的两集合。若两集合高度一样则随机确立父子关系，但需注意更新最终根节点的高度

重量并查集：维护存储各节点的重量（自己和所有子节点的数量）的数组。合并原则是重量小的集合归入重量大的集合中去，即令小重量根节点成为大重量根节点的子节点。但仅如此的话对主要影响并查集查询速度的集合高度并并无优化，所以在每次迭代查找父节点时都可以顺便进行路径压缩，令起始节点归根（降低其高度），即在每次向根节点迭代的时候不断地更改起始节点的父节点直到根节点。这样一来每个节点查询过后都能成为根节点的直接子节点，而根节点的直接子节点是可以直接找到判定的，所以重量并查集的节点从第二次查询开始会变得非常快

::: warning 关于重量并查集路径压缩的两点注意

- 在迭代过程中更改起始节点的父节点后无需维护初始父节点和依次经过的父节点的重量，因为当前集合在后续合并时只会用到根节点的重量
- 路径压缩不适用于高度并查集，因为遍历更改后根节点的高度可能会变，需要重新计算
:::
::: code-tabs
@tab 高度并查集

```java
class UnionFindSet {
	private int[] parent; // 下标节点的父节点
	private int[] height; // 下标节点的高

	UnionFindSet(int size) {
		this.parent = new int[size];
		this.height = new int[size];
		for (int i = 0; i < size; ++i) {
			parent[i] = i;
			height[i] = 1;
		}
	}

	// 一直向上迭代找到 x 所属集合的根节点
	public int find(int x) {
		while (parent[x] != x)
			x = parent[x];
		return x;
	}

	// 判断俩元素是否属于同一集合（连接于同一根节点）
	public boolean isConnected(int x, int y) {
		return find(x) == find(y);
	}

	// 将两不同节点联合至同一集合（连接到同一根节点）
	public void union(int x, int y) {
		int rx = find(x);
		int ry = find(y);
		if (rx != ry){	// 已经在同一集合则无需合并
			if (height[rx] < height[ry])
				parent[rx] = ry;
			else if (height[rx] > height[ry])
				parent[ry] = rx;
			else {
				parent[ry] = rx;
				++height[rx];
			}
		}
	}
}
```

@tab 重量并查集

```java
class UnionFindSet {
	private int[] parent; // 下标节点的父节点
	private int[] weight; // 下标节点的重

	UnionFindSet(int size) {
		this.parent = new int[size];
		this.weight = new int[size];
		for (int i = 0; i < size; ++i) {
			parent[i] = i;
			weight[i] = 1;
		}
	}

	// 一直向上迭代找到 x 所属集合的根节点
	public int find(int x) {
		// 一直更改初始节点的父节点直到变成根节点
		while (parent[x] != parent[parent[x]])
			parent[x] = parent[parent[x]];
		return parent[x];
	}

	// 判断俩元素是否属于同一集合（连接于同一父节点）
	public boolean isConnected(int x, int y) {
		return find(x) == find(y);
	}

	// 将两不同节点联合至同一集合（连接到同一最父节点）
	public void union(int x, int y) {
		int rx = find(x);
		int ry = find(y);
		if (rx != ry) { // 已在同一集合则无需合并
			if (weight[rx] < weight[ry]) {
				parent[rx] = ry;
				weight[ry] += weight[rx];
			} else {
				parent[ry] = rx;
				weight[rx] += weight[ry];
			}
		}
	}
}

```

:::

### [Dijkstra 算法 - 知乎][00]

### 交换两不同值变量的值

仅限不同值的交换，若值相同则直接成 0

```java
a = a ^ b;	// a1 = a0 ^ b0
b = a ^ b;	// b1 = a1 ^ b0 = a0 ^ b0 ^ b0 = a0
a = a ^ b;	// a2 = a1 ^ b1 = a0 ^ b0 ^ a0 = b0
```

利用异或特性：

- `A ^ A = 0`
- `A ^ 0 = A`
- 异或满足结合律
- 异或满足交换律

### 回溯

#### 适用问题

- 组合问题：若干数字中按⼀定规则找出若干个数的集合
- 排列问题：若干数字按⼀定规则全排列的不同排列方式数量
- 切割问题：⼀个字符串按⼀定规则有⼏种切割⽅式
- ⼦集问题：若干数字的集合⾥有多少符合条件的⼦集
- 棋盘问题：N 皇后，解数独等等

#### 模版

::: code-tabs
@tab 总模版

```java
void backtracking(path, param){
	if (endCondition) {
		result.add(path);	// store result
		return;
	}
	for (el : elements) {
		if (notUseJudge) {	// remove duplication
			path.add(el);	// deal
			backtracking(path, param);	// recursion
			path.remove(el);	// undo deal
		}
	}
}
```

@tab 数据无序哈希表去重

```java
// 适用于数据无序或者不可重排序将重复值并到一起的情况
void backtracking(path, param){
	if (endCondition) {
		result.add(path);	// store result
		return;
	}
	HashSet<Integer> used = new HashSet<>();
	for (el : elements) {
		if (!used.contains(el)) {	// remove duplication
			path.add(el);	// deal
			used.add(el);	// mark
			backtracking(path, param);	// recursion
			used.remove(el);	// unmark
			path.remove(el);	// undo deal
		}
	}
}
```

@tab 数据有序条件去重

```java
// 适用于数据有序或者可重排序将重复值并到一起的情况
void backtracking(path, start){
	if (endCondition) {
		result.add(path);	// store result
		return;
	}
	HashSet<Integer> used = new HashSet<>();
	for (int i = start; i < nums.length; ++i) {
		if (start < i && nums[i - 1] != nums[i])	// remove duplication
			continue;
		path.add(el);	// deal
		backtracking(path, start + 1);	// recursion
		path.remove(el);	// undo deal
	}
}
```

:::

#### 实现要点

- 添加一条答案路径时必须由当前路径列表新建一个列表来添加，否则每次添加的都是贯穿回溯全过程的唯一的列表指针，最后一无所有
- 每层是否需要起始索引：
  - 对于组合问题：
    - 若在同一集合中求组合，则需起始索引控制各层循环的起始位置
    - 若是多个互不影响的集合取组合，则无需起始索引
  - 对于排列问题：每层都是从头开始搜索而无需起始索引，且
- 是否需要标记数组标记当前层回溯路径中已存在哪些元素：
  - 若元素可重复使用，则无需标记数组
  - 若元素仅可使用一次，则需要标记
- 实际上标记数组已经在功能上包含起始索引了，但起始索引能在下一层遍历选取时，先标记数组一步进行剪枝，进一步减少无效搜索；或者对于有序数组，因为每次下一层搜索都是基于当前层右边起始的，所以起始索引可以完全替代标记数组
- 若题目仅要求求出不同组合的个数，可考虑用动态规划来做，避免实际模拟每一种组合

### 动态规划

#### 思考流程

1. 明确问题存在哪几种状态；问题场景如何做状态选择，进而转换状态
2. 确定 dp 数组以及下标的含义
3. 根据【选择】的过程，确定递推公式
4. dp 数组如何初始化
5. 确定遍历顺序
6. 举例推导 dp 数组，进行问题模拟
7. 出错的情况，将 dp 数组打印出来，保证程序处理流程如设想运行
8. 优化：若每一 dp 状态仅与上一个状态有关，则可将 dp 数组进行降维压缩

#### 背包问题

::: code-tabs
@tab 01 背包

```java
// 每种物品仅有 1 个，且物品放入背包无顺序要求

// 多维背包相应地增加 dp 的维度即可，在转移方程内也需要同时处理
public class MyTest {
	public static void main(String[] args) {
		int[] weights = { 1, 2, 3, 4 };
		int[] values = { 2, 4, 4, 5 };
		System.out.println(origin01Bag(5, values, weights));
		System.out.println(zipped01Bag(5, values, weights));
	}

	public static int origin01Bag(int limit, int[] values, int[] weights) {
		int[][] dp = new int[values.length + 1][limit + 1];
		for (int i = 1; i <= values.length; ++i)
			for (int j = 1; j <= limit; ++j)
				if (j < weights[i - 1])
					dp[i][j] = dp[i - 1][j];
				else
					dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
		return dp[values.length][limit];
	}
	
	/*
	 * 空间压缩后内层循环必须得逆序，原因是选中第 i 个物品放入的 dp[i][j] 依赖于 dp[i-1][j - weight[i-1]]
	 * 也就是说某行的 dp 值的更新依赖于上一行左侧的某值，若内循环从左至右则会覆盖掉上一行左侧的值
	 */
	public static int zipped01Bag(int limit, int[] values, int[] weights) {
		int[] dp = new int[limit + 1];
		for (int i = 0; i < values.length; ++i)
			for (int j = limit; j >= weights[i]; --j)
				dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i]);
		return dp[limit];
	}
}
```

@tab 完全背包

```java
// 完全背包与 01 背包的不同在于每种物品的数量是无限的，可以无限次选取某种物品放入
public class MyTest {
	public static void main(String[] args) {
		int[] weights = { 1, 2, 3, 4 };
		int[] values = { 2, 4, 4, 5 };
		System.out.println(zippedCompleteBag(5, values, weights));
	}

	// 完全背包只需将 01 背包的内循环改为正向即可
	public static int zippedCompleteBag(int limit, int[] values, int[] weights) {
		int[] dp = new int[limit + 1];
		for (int i = 1; i <= values.length; ++i)
			for (int j = weights[i - 1]; j <= limit; ++j)
				dp[j] = Math.max(dp[j], dp[j - weights[i - 1]] + values[i - 1]);
		return dp[limit];
	}
}
```

@tab 顺序背包

```java
// 若要求放入背包的物品有顺序要求，则需将背包限制放到外循环，将各物品的遍历置于内循环，方能产生各种物品的不同顺序
// 若物品遍历在外循环则选中的物品的相对顺序永远固定
public class MyTest {
	public static void main(String[] args) {
		int[] weights = { 1, 2, 3, 4 };
		int[] values = { 2, 4, 4, 5 };
		System.out.println(zippedSort01Bag(5, values, weights));
		System.out.println(zippedSortCompleteBag(5, values, weights));
	}

	public static int zippedSort01Bag(int limit, int[] values, int[] weights) {
		int[] dp = new int[limit + 1];
		for (int i = limit; i >= 0; --i)
			for (int j = 1; j < values.length; ++j)
				if (i >= weights[j - 1])
					dp[i] = Math.max(dp[i], dp[i - weights[j - 1]] + values[j - 1]);
		return dp[limit];
	}

	public static int zippedSortCompleteBag(int limit, int[] values, int[] weights) {
		int[] dp = new int[limit + 1];
		for (int i = 1; i <= limit; ++i)
			for (int j = 1; j <= values.length; ++j)
				if (i >= weights[j - 1])
					dp[i] = Math.max(dp[i], dp[i - weights[j - 1]] + values[j - 1]);
		return dp[limit];
	}
}
```

@tab 多重背包

```java
// 多重背包指各种物品最多有若干个
// 若数据量较小，则偷懒的做法是先将各种若干个拆成若干种只有 1 个的物品，再套用其他背包的模版
// 但若数据量较大则需要进行二进制优化，再套用其他背包的模版

// 混合背包只需将数量无限的物品以背包总体的限制转换为有限数量，再套用多重背包模版即可
public class MyTest {
	public static void main(String[] args) {
		int[] weights = { 1, 2, 3, 4 };
		int[] values = { 2, 4, 4, 5 };
		int[] counts = { 3, 1, 3, 2 };
		System.out.println(zippedMultiBag(5, values, weights, counts));
	}

	/*
	 * 二进制优化的核心思想就是将单种物品的数量进行二进制分组，再将每组等效为新物品，以此降低时间复杂度
	 */
	public static int zippedMultiBag(int limit, int[] values, int[] weights, int[] counts) {
		int[] dp = new int[limit + 1];
		for (int i = 0; i < values.length; ++i) {
			for (int k = 1; k < counts[i]; k <<= 1) {
				for (int j = limit; j >= k * weights[i]; --j)
					dp[j] = Math.max(dp[j], dp[j - k * weights[i]] + k * values[i]);
				counts[i] -= k;
			}
			for (int j = limit; j >= counts[i] * weights[i]; --j)
				dp[j] = Math.max(dp[j], dp[j - counts[i] * weights[i]] + counts[i] * values[i]);
		}
		return dp[limit];
	}
}
```

:::

### 计算组合数

$$
\begin{split}
	C_n^m &= \frac{n!}{m!(n-m)!} = \frac{n(n-1)\cdots (n-m+1)}{m!} \\
		&= \frac{n}{1}\cdot \frac{n-1}{2}\cdots \frac{n-m+1}{m}
\end{split}
$$
对于上述最后的形式，若逐项除再相乘，不一定能保证每一项都是整数，直接计算会损失精度。但代码实现时基于已累乘结果，先乘下一项的分子，再除下一项的分母，则必可保证累乘结果始终为整数，因为在除分母`k`的时候，分子已经是连续的`k`个数相乘，其中必含分母的倍数。实际上分母不一定要逆序相乘，顺序亦可，代码如下

```java
long ans = 1;
for (int x = n, y = 1; y <= m; --x, ++y)
	ans = ans * x / y;
```
<!-- ---------------------------------- -->
[00]:https://zhuanlan.zhihu.com/p/338414118
