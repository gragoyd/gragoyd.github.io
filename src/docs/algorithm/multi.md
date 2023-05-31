---
title: 二进制&哈希&多线程&并查集
icon: relation
category:
  - algorithm
tag:
  - Binary
  - Hash
  - MultiThread
  - UnionFind
---

## 二进制

### [只出现一次的数字 III][0E]

::: info Description
给定整型数组，其中有两个数只出现一次，其余数都出现两次，找出两个只出现一次的数
:::
::: details
首先考虑简化版的问题，若只有一个数只出现一次，则只需要对整个数组进行异或操作，所得即为该数，因为其他数都两两异或为 0 了，而任何数与 0 异或都为其本身。

所以只需要将原数组分为类似上述简化问题的两组再进行组内异或即可，具体来说分组需要确保两个只出现一次的数分到不同组，且其余数的两次出现都分到同一组。为达此目的，首先对原始数组进行全体异或，结果等同于两个只出现一次的数的异或，则任取一位为 1 的二进制位，表示在该位上两数是不同的，以该位的值来对所有数进行分组，可以确保两数被分到不同组，且其他数的两次出现都分到同一组。

为方便起见，上述作为分组标准的数取全体异或的结果的最低位的 1。在大多情况下，结合补码知识，取最低有效位的方式为`x & -x`，但有一个特殊情况，当`x`为 $-2^31$ 时，取负操作会导致溢出，考虑到其补码表示为“负零”，故其最低有效为为其本身

```java
class Solution {
    public int[] singleNumber(int[] nums) {
        int x = 0;
        for (int n : nums)
            x ^= n;
        if (x != Integer.MIN_VALUE)
            x &= -x;
        int[] res = new int[2];
        for (int n : nums)
            if ((n & x) == 0)
                res[0] ^= n;
            else
                res[1] ^= n;
        return res;
    }
}
```

:::

## 哈希

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
:::: details Solution
::: tabs
@tab 滑动窗口
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

@tab 哈希表
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
::::

### [寻找重复的子树][02]

::: info Description
找出二叉树中所有重复的子树（同种重复子树找任一棵的根节点即可）
:::
:::: details Solution1
::: tabs
@tab DFS + 序列化
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

@tab:active 优化
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
::::

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

### [缺失的第一个正数][0F]

::: info Description
找出给定的无序整形数组中缺失的最小正整数，要求时间复杂度为`O(n)`且空间复杂度为`O(1)`
:::
::: tabs
@tab 哈希表
设数组长度为`N`，若数组恰完整包含`1 ~ N`则缺失的最小正整数为`N+1`，否则缺失的最小正整数在`[1, N]`中，故所求必在`[1, N+1]`中，结合数组长度恰为`N`，可以将数组复用为哈希表，将数组索引`0 ~ N-1`映射为数字`1 ~ N`是否在数组中出现，鉴于关注的数字范围已确定，可先将所有不在`[1, N]`范围内的数都先置为大于`N`的数，则数组元素全为正，可以将某位置的数添加负号来表示其对应的正整数已出现过，故遍历数组时对每个元素取绝对值，若在`[1, N]`范围内则检查相应位置的数，若还为正则添加负号，遍历完成后再次遍历，第一个正数出现的位置对应的数即为缺失的正整数，若全为负则缺失的为`N+1`
测试数字 1 我

```java
class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; ++i)
            if (nums[i] < 1 || nums[i] > n)
                nums[i] = n + 1;
        for (int i = 0; i < n; ++i) {
            int t = Math.abs(nums[i]);
            if (t > 0 && t <= n)
                nums[t - 1] = -Math.abs(nums[t - 1]);
        }
        for (int i = 0; i < n; ++i)
            if (nums[i] > 0)
                return i + 1;
        return n + 1;
    }
}
```

@tab 置换
基于数字`1 ~ N`对应索引`0 ~ N-1`的思想，若将数组中在`[1, N]`中的数都置于对应的位置，则首个与数不符的位置所对应的数即为所求。为放置数字而遍历数组`nums`，对于位置`i`，若`nums[i]`在`[1, N]`中，则将其与`nums[nums[i]-1]`的值交换，使原`nums[i]`的值处于正确的`i-1`位置，而新的`nums[i]`值需要再次放置直到不在`[1, N]`中或其与`nums[nums[i]-1]`值相同

```java
class Solution {
    public int firstMissingPositive(int[] nums) {
        for (int i = 0; i < nums.length; ++i)
            while (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[nums[i] - 1]) {
                int t = nums[nums[i] - 1];      // 交换时只能先暂存和改动 nums[nums[i]-1]
                nums[nums[i] - 1] = nums[i];    // 否则它用到的 nums[i] 的值会变动
                nums[i] = t;
            }
        for (int i = 0; i < nums.length; ++i)
            if (nums[i] != i + 1)
                return i + 1;
        return nums.length + 1;
    }
}
```

:::

## 多线程

### [交替打印 FooBar][04]

::: info Description
确保在多线程调用下，俩函数交替执行打印
:::

:::: details Solution
::: tabs
@tab BlockingQueue

```java
class FooBar {
	private BlockingQueue<Integer> foo = new LinkedBlockingDeque<>(1);
	private BlockingQueue<Integer> bar = new LinkedBlockingDeque<>(1);
	private int n;

	public FooBar(int n) {
		this.n = n;
	}

	public void foo(Runnable printFoo) throws InterruptedException {
		for (int i = 0; i < n; i++) {
			foo.put(i);
			printFoo.run();
			bar.put(i);
		}
	}

	public void bar(Runnable printBar) throws InterruptedException {
		for (int i = 0; i < n; i++) {
			bar.take();
			printBar.run();
			foo.take();
		}
	}
}
```

@tab yield

```java
class FooBar {
	private volatile boolean foo = true;
	private int n;

	public FooBar(int n) {
		this.n = n;
	}

	public void foo(Runnable printFoo) throws InterruptedException {
		for (int i = 0; i < n;) {
			if (foo) {
				printFoo.run();
				++i; // 注意变量得在真正 print 之后再增加
				foo = false;
			} else
				Thread.yield();
		}
	}

	public void bar(Runnable printBar) throws InterruptedException {
		for (int i = 0; i < n;) {
			if (!foo) {
				printBar.run();
				++i;
				foo = true;
			} else
				Thread.yield();
		}
	}
}
```

@tab ReentrantLock

```java
class FooBar {
	private ReentrantLock lock = new ReentrantLock(true);
	private final Condition condition = lock.newCondition();
	private volatile boolean foo = true;
	private int n;

	public FooBar(int n) {
		this.n = n;
	}

	public void foo(Runnable printFoo) throws InterruptedException {
		for (int i = 0; i < n; ++i) {
			lock.lock();
			try {
				while (!foo)
					condition.await();
				printFoo.run();
				foo = false;
				condition.signal();
			} finally {
				lock.unlock();
			}
		}
	}

	public void bar(Runnable printBar) throws InterruptedException {
		for (int i = 0; i < n; ++i) {
			lock.lock();
			try {
				while (foo)
					condition.await();
				printBar.run();
				foo = true;
				condition.signal();
			} finally {
				lock.unlock();
			}
		}
	}
}
```

@tab synchronized

```java
class FooBar {
	private volatile boolean foo = true;
	private final Object monitor = new Object();
	private int n;

	public FooBar(int n) {
		this.n = n;
	}

	public void foo(Runnable printFoo) throws InterruptedException {
		for (int i = 0; i < n; ++i) {
			synchronized (monitor) {
				while (!foo)
					monitor.wait();
				printFoo.run();
				foo = false;
				monitor.notify();
			}
		}
	}

	public void bar(Runnable printBar) throws InterruptedException {
		for (int i = 0; i < n; i++) {
			synchronized (monitor) {
				while (foo)
					monitor.wait();
				printBar.run();
				foo = true;
				monitor.notify();
			}
		}
	}
}
```

@tab Semaphore

```java
class FooBar {
	private Semaphore foo = new Semaphore(1);
	private Semaphore bar = new Semaphore(0);
	private int n;

	public FooBar(int n) {
		this.n = n;
	}

	public void foo(Runnable printFoo) throws InterruptedException {
		for (int i = 0; i < n; i++) {
			foo.acquire();
			printFoo.run();
			bar.release();
		}
	}

	public void bar(Runnable printBar) throws InterruptedException {
		for (int i = 0; i < n; i++) {
			bar.acquire();
			printBar.run();
			foo.release();
		}
	}
}
```

:::
::::

### [交替打印字符串][05]

::: info Description
实现多线程版本从 1 ~ n 输出代表相应数字的字符串的程序，依据以下规则调用相应函数进行输出：

- 若可被 3 整除，调用`fizz()`输出`fizz`
- 若可被 5 整除，调用`buzz()`输出`buzz`
- 若可同时被 3 和 5 整除，调用`fizzbuzz()`输出`fizzbuzz`
- 其他情况调用`number()`输出该数

比如当`n = 15`时输出`1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz`
:::
::: details Solution

```java
class FizzBuzz {
	private ReentrantLock lock = new ReentrantLock();
	private Condition con = lock.newCondition();
	private volatile int cur = 1;
	private int n;

	public FizzBuzz(int n) {
		this.n = n;
	}

	// printFizz.run() outputs "fizz".
	public void fizz(Runnable printFizz) throws InterruptedException {
		lock.lock();
		try {
			while (cur <= n) {
				if (cur % 3 == 0 && cur % 5 != 0) {
					printFizz.run();
					++cur;
					con.signalAll();
				} else
					con.await();
			}
		} finally {
			lock.unlock();
		}
	}

	// printBuzz.run() outputs "buzz".
	public void buzz(Runnable printBuzz) throws InterruptedException {
		lock.lock();
		try {
			while (cur <= n) {
				if (cur % 5 == 0 && cur % 3 != 0) {
					printBuzz.run();
					++cur;
					con.signalAll();
				} else
					con.await();
			}
		} finally {
			lock.unlock();
		}
	}

	// printFizzBuzz.run() outputs "fizzbuzz".
	public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
		lock.lock();
		try {
			while (cur <= n) {
				if (cur % 3 == 0 && cur % 5 == 0) {
					printFizzBuzz.run();
					++cur;
					con.signalAll();
				} else
					con.await();
			}
		} finally {
			lock.unlock();
		}
	}

	// printNumber.accept(x) outputs "x", where x is an integer.
	public void number(IntConsumer printNumber) throws InterruptedException {
		lock.lock();
		try {
			while (cur <= n) {
				if (cur % 3 != 0 && cur % 5 != 0) {
					printNumber.accept(cur);
					++cur;
					con.signalAll();
				} else
					con.await();
			}
		} finally {
			lock.unlock();
		}
	}

	// for local debug
	public static void main(String[] args) {
		FizzBuzz fb = new FizzBuzz(30);
		// number
		new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					fb.number(new IntConsumer() {
						@Override
						public void accept(int value) {
							System.out.print(value);
							System.out.println("\t" + Thread.currentThread().getName());
						}
					});
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}).start();
		// fizzbuzz
		new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					fb.fizzbuzz(new Runnable() {
						@Override
						public void run() {
							System.out.print("fizzbuzz");
							System.out.println("\t" + Thread.currentThread().getName());
						}
					});
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}).start();
		// fizz
		new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					fb.fizz(new Runnable() {
						@Override
						public void run() {
							System.out.print("fizz");
							System.out.println("\t" + Thread.currentThread().getName());
						}
					});
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}).start();
		// buzz
		new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					fb.buzz(new Runnable() {
						@Override
						public void run() {
							System.out.print("buzz");
							System.out.println("\t" + Thread.currentThread().getName());
						}
					});
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}).start();
	}
}
```

:::

### [哲学家进餐][06]

::: info Description
5 个哲学家围坐在圆桌前，每人面前一盘意面，两哲学家之间都有一把叉子，哲学家只会在思考和进餐两种行为间交替

哲学家只有同时拿到左边和右边的叉子才能吃面，而同一根叉子在同一时间只能被一个哲学家使用，哲学家吃完面后都需要把叉子放回桌面以供其他哲学家吃面。只要条件允许，哲学家可以拿起左边或者右边的叉子

利用多线程实现进餐规则，使得每个哲学家都能在不知道别人什么时候想吃东西或思考的情况下，在吃饭和思考之间一直交替下去

哲学家从 0 ~ 4 编号，请实现函数`void wantsToEat(philosopher, pickLeftFork, pickRightFork, eat, putLeftFork, putRightFork)`，其中：

- `philosopher` 哲学家的编号
- `pickLeftFork` 和 `pickRightFork` 表示拿起左边或右边的叉子
- `eat` 表示吃面
- `putLeftFork` 和 `putRightFork` 表示放下左边或右边的叉子
- 由于哲学家不是在吃面就是在想着啥时候吃面，所以思考这个方法没有对应的回调

给 5 个线程代表 5 个哲学家，请你使用类的同一个对象来模拟这个过程。在最后一次调用结束之前，可能会为同一个哲学家多次调用该函数
:::
::: details Solution

```java
class DiningPhilosophers {
	// 每个叉子相当于锁
	private ReentrantLock[] fork = new ReentrantLock[5];
	// 同时进餐人数上限【五人同时拿叉子会死锁】
	private Semaphore eatLimit = new Semaphore(4);

	public DiningPhilosophers() {
		for (int i = 0; i < 5; i++) {
			fork[i] = new ReentrantLock();
		}
	}

	// call the run() method of any runnable to execute its code
	public void wantsToEat(int philosopher,
			Runnable pickLeftFork,
			Runnable pickRightFork,
			Runnable eat,
			Runnable putLeftFork,
			Runnable putRightFork) throws InterruptedException {

		eatLimit.acquire();// 申请就餐名额
		int leftFork = philosopher;
		int rightFork = (philosopher + 1) % 5;
		fork[leftFork].lock();// 占据叉子
		fork[rightFork].lock();
		pickLeftFork.run();// 拿起叉子
		pickRightFork.run();
		eat.run();
		putLeftFork.run();// 放下叉子
		putRightFork.run();
		fork[leftFork].unlock();// 释放叉子
		fork[rightFork].unlock();
		eatLimit.release();
	}
}
```

:::

## 并查集

### [冗余连接][07]

::: info Description
给定无环连通无向图的所有边和一条冗余的边，找出那条冗余边

设所有节点为`1 ~ n`，边的信息由长度为`n`的二维数组`edges`给出：`edges[i] = [ai, bi]`表示节点`ai`和`bi`之间存在一条边
:::
::: details Solution
无环连通无向图若有`n`个节点，则必有且仅有`n-1`条边，故有且仅有唯一一条冗余边，该边令图出现了环

使用并查集随着遍历边的信息逐渐联合各节点，当某条边的两节点都已经在联合集中则说明该边冗余

```java
class Solution {
	public int[] findRedundantConnection(int[][] edges) {
		int n = edges.length;
		int[] parent = new int[n + 1];
		for (int i = 1; i <= n; ++i)
			parent[i] = i;
		for (int[] edge : edges) {
			int rx = find(parent, edge[0]);
			int ry = find(parent, edge[1]);
			if (rx == ry)
				return edge;
			parent[rx] = ry;
		}
		return null;
	}

	private int find(int[] parent, int x) {
		while (parent[x] != x)
			x = parent[x];
		return x;
	}
}
```

:::

### [除法求值][08]

::: info Description
'[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]'
给定字符串变量对数组`equations`和一个实数值数组`values`作为已知条件，即`equations[i] = [Ai, Bi]`和`values[i]`共同表示条件`Ai / Bi = values[i]`

另有一些以数组`queries`表示的问题，其中第`j`个问题`queries[j] = [Cj, Dj]`表示问题`Cj / Dj = ?`，根据已知条件推出结果

若存在无法推出的答案则用`-1.0`表示，保证输入有效（不存在除 0）且不存在矛盾
:::
::: details Solution
此类存在许多传递关系并需要记录的需求适合用并查集，`A / B = x`可看作`A -> B`的传递关系，其倍数关系用额外的权重数组记录，存在传递关系的若干变量视作在同一集合中，通过并查集的链式传递效果可以消去若干已知中间变量而求出问题的答案，在不断联合新变量的过程中就同时进行类似重量并查集的路径压缩，迭代压缩时累乘更新起始节点到各中间父节点的权重值，表示消去链式条件的中间变量，如此构建的并查集的所有节点都直接连接于根节点，其权重都更新到除以根节点变量的结果，即把问题中对零散变量相除求值转化为除相同额外变量，确保后续查询的效率

具体实现时，先给字符串变量编号以便并查集处理，在并查集中用`parent[A]=B`表示`A/B`的链式关系，其结果（传递关系权重）用`weight[A]`表示。合并节点时的权重更新参考平行四边形四条边的关系，如把`X`所在集合向`Y`所在集合联合，设`X/Y=v`，`X`根节点为`rx`，`Y`根节点为`ry`，则显然有`weight[rx] = v * weight[Y] / weight[X]`。查询时可以仅考虑所有节点直接相连于同一根节点，因为即使最后一次联合之后可能有节点不直接与根节点相连，但实际查询时会先进行带路径压缩操作的搜索，故查得结果时必所有节点都已直接相连与根节点

```java
class Solution {
	private int id = 0; // 用于给各变量编号，语法要求不能为局部变量

	public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
		UnionFind uf = new UnionFind(2 * equations.size());
		Map<String, Integer> map = new HashMap<>(2 * equations.size());
		for (int i = 0; i < equations.size(); ++i) {
			int i1 = map.computeIfAbsent(equations.get(i).get(0), x -> id++);
			int i2 = map.computeIfAbsent(equations.get(i).get(1), x -> id++);
			uf.union(i1, i2, values[i]);
		}
		double[] res = new double[queries.size()];
		for (int i = 0; i < queries.size(); ++i) {
			Integer i1 = map.get(queries.get(i).get(0));
			Integer i2 = map.get(queries.get(i).get(1));
			if (i1 == null || i2 == null)
				res[i] = -1.0d;
			else
				res[i] = uf.query(i1, i2);
		}
		return res;
	}

	private class UnionFind {
		private int[] parent;
		private double[] weight;

		UnionFind(int size) {
			parent = new int[size];
			weight = new double[size];
			for (int i = 0; i < size; ++i) {
				parent[i] = i;
				weight[i] = 1.0d;
			}
		}

		public double query(int x, int y) {
			if (find(x) == find(y))
				return weight[x] / weight[y];
			return -1.0d;
		}

		public void union(int x, int y, double value) {
			int rx = find(x);
			int ry = find(y);
			if (rx != ry) {
				parent[rx] = ry;
				// 仅需考虑节点高不大于 2 的情况，因为 find() 时已压缩
				weight[rx] = value * weight[y] / weight[x];
			}
		}

		public int find(int x) {
			while (parent[x] != parent[parent[x]]) {
				weight[x] *= weight[parent[x]];
				parent[x] = parent[parent[x]];
			}
			return parent[x];
		}
	}
}
```

:::

### [最小体力消耗路径][09]

::: info Description
求从给定矩阵的左上角到右下角的所有连通路径中路径差值的最小值

路径差值：路径可上下左右四方向连通，某一路径上所有两两相邻元素差值（绝对值）的最大值为该路径的差值
:::
::: details Solution
将所有相邻元素差值当作节点的边长进行排序，按从小到大拿边连接节点，当某条边连接后左上角和右下角变为连通，则该边即为所求，因为边是从小到大启用的，所以该边是当前连通路径的最大边，且对于全局来说最先连通的路径一定是差值最小的

因为要反复判断某两点是否连通，故采用并查集实现，矩阵格子编号采用顺序计数方式，边的记录形式需同时包含两节点的编号和边长（差值）

```java
class Solution {
	private int[] parent;

	public int minimumEffortPath(int[][] heights) {
		int m = heights.length, n = heights[0].length;
		parent = new int[m * n];
		for (int i = 0; i < m * n; ++i)
			parent[i] = i;
		List<int[]> edges = new ArrayList<>(2 * m * n - m - n);
		for (int i = 0; i < m; ++i) {
			for (int j = 0; j < n; ++j) {
				int id = i * n + j;
				if (i > 0)
					edges.add(new int[] { id - n, id, Math.abs(heights[i][j] - heights[i - 1][j]) });
				if (j > 0)
					edges.add(new int[] { id - 1, id, Math.abs(heights[i][j] - heights[i][j - 1]) });
			}
		}
		Collections.sort(edges, new Comparator<int[]>() {
			@Override
			public int compare(int[] o1, int[] o2) {
				return o1[2] - o2[2];
			}
		});
		int res = 0;
		for (int[] edge : edges) {
			union(edge[0], edge[1], edge[2]);
			if (find(0) == find(m * n - 1)) {
				res = edge[2];
				break;
			}
		}
		return res;
	}

	private void union(int x, int y, int delta) {
		int rx = find(x);
		int ry = find(y);
		if (rx != ry)
			parent[rx] = ry;
	}

	private int find(int x) {
		while (parent[x] != parent[parent[x]])
			parent[x] = parent[parent[x]];
		return parent[x];
	}
}
```

:::

### [水位上升的泳池中游泳][0D]

::: info Description
给定方形矩阵`grid`表示泳池，其中`grid[i][j]`表示位置`(i, j)`的池底高度。由于注水，在时间为`t`时，水池中的水位为`t`。当某块池底不高于泳池水位时认为其可达，可从周围可达的上下左右连通块游向该块。求何时泳池左上角到右下角才是连通的

注意：此题数据集各池底高度各不相同，且在`[0, n*n)`中
:::
::: details Solution
这题与 [最小体力消耗路径](#最小体力消耗路径 09) 十分相似，都是按照一定条件将网格内的格子逐渐分别连通，同时每次检查给定端点是否变为连通

考虑到数据集的特殊性，可以首先将索引与高度关系反转存储以备查询，随后每次时间增长时，都聚焦于高度数值等同于时刻的块，根据实际语义可以将其与四周不高于它的块连通，直到某时刻的操作令两角变得连通即为所求

```java
class Solution {
	private int[] parent;

	public int swimInWater(int[][] grid) {
		int n = grid.length;
		int size = n * n;
		int[][] dirs = { { 0, -1 }, { 0, 1 }, { -1, 0 }, { 1, 0 } };
		parent = new int[size];
		for (int i = 0; i < size; ++i)
			parent[i] = i;
		int[] index = new int[size];
		for (int i = 0; i < n; ++i)
			for (int j = 0; j < n; ++j)
				index[grid[i][j]] = i * n + j;
		for (int i = 0; i < size; ++i) {
			int row = index[i] / n;
			int col = index[i] % n;
			for (int[] d : dirs) {
				int r = row + d[0];
				int c = col + d[1];
				if (r >= 0 && r < n && c >= 0 && c < n && grid[r][c] <= grid[row][col])
					parent[find(r * n + c)] = find(index[i]);
			}
			if (find(0) == find(size - 1))
				return i;
		}
		return -1;
	}

	private int find(int x) {
		while (parent[x] != parent[parent[x]])
			parent[x] = parent[parent[x]];
		return parent[x];
	}
}
```

:::

### [交换字符串中的元素][0A]

::: info Description
给定字符串和其中若干索引对的数组`pairs`，其中`pairs[i] = [a, b]`表示字符串中的两个索引，可以任意多次交换索引对中任意一对索引处的字符，求在经过若干次交换后字符串能达到的按字典序最小的字符串
:::
::: details Solution
索引对实质上是连通两索引，所有索引对即表示某些索引连通成若干集合，不在索引对中的位置表示不可调换。所以先由并查集将所有索引对的信息翻译成字符串中的若干连通位置的集合，同一集合内的字符可以任意调换（直接按字典序排列），考虑到字符的可重复性，显然可以用字符对象的优先队列直接一步到位，各集合间用根节点位置来区分，所以用哈希表存各优先队列。最后拼成结果字符串时，各个位置都从其连通集合（即根节点对应的优先队列）中按已排好的顺序取出拼接即可

```java
class Solution {
	private int[] parent;

	public String smallestStringWithSwaps(String s, List<List<Integer>> pairs) {
		parent = new int[s.length()];
		for (int i = 0; i < s.length(); ++i)
			parent[i] = i;
		for (List<Integer> pair : pairs)
			union(pair.get(0), pair.get(1));
		HashMap<Integer, PriorityQueue<Character>> sets = new HashMap<>();
		for (int i = 0; i < s.length(); ++i)
			// 此处必须用 find(i)，因为还有一节点未直接与根节点相连
			sets.computeIfAbsent(find(i), x -> new PriorityQueue<>()).offer(s.charAt(i));
		char[] res = new char[s.length()];
		for (int i = 0; i < s.length(); ++i)
			res[i] = sets.get(parent[i]).poll();	// 此处可直接用 parent 索引
		return String.valueOf(res);
	}

	private int find(int x) {
		while (parent[x] != parent[parent[x]])
			parent[x] = parent[parent[x]];
		return parent[x];
	}

	private void union(int x, int y) {
		int rx = find(x);
		int ry = find(y);
		if (rx != ry)
			parent[rx] = ry;
	}
}
```

:::

### [合并账户][0B]

::: info Description
给定一个列表`accounts`，其中的`accounts[i]`是字符串列表，其中第一个元素`accounts[i][0]`为人名（账户），后续元素为账户下的若干邮箱。

一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。现在按实际的人来合并这些账户：若两个账户含相同邮箱地址，则认为两账户属于同一个人。但是即使两个账户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。

合并账户后的返回格式：不同账户间顺序随意，每个账户内的第一个元素是名称，其余元素是按字典序排列的邮箱地址

input:`accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]`
output:`[["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]`
:::
::: details Solution
针对不同账户（列表）间的合并，可以将`accounts[i]`视为独立区域，针对所有索引建立并查集，在遍历过程中若发现某邮箱已经遍历过，则将此时正遍历的账户与已存在邮箱所对应的账户进行合并，由此可见遍历时需要存储各邮箱对应的账户，又考虑到账户可能同名，故采用索引来避免直接使用人名，即遍历时用哈希表存`邮箱 - 索引`对，遍历完之后实际上完成了邮箱的去重和合并主体标记。

接下来就是实际上的合并，此时暂且还是用索引当作合并标识，遍历上一步构建的哈希表，将所有邮箱按合并标识进行合并。考虑到邮箱第一次出现的账户索引可能不是合并的主体标识，所以得到邮箱对应的索引后还需要经过并查集找到可以作为合并标识的根。由于题目要求账户内邮箱需要排序，容器使用`TreeSet`。完成之后只需要将答案整理成要求的返回格式即可

```java
class Solution {
	private int[] parent;

	public List<List<String>> accountsMerge(List<List<String>> accounts) {
		parent = new int[accounts.size()];
		for (int i = 0; i < accounts.size(); ++i)
			parent[i] = i;
		// all mails -> index, and union accounts[i]
		Map<String, Integer> mailToIdx = new HashMap<>();
		for (int i = 0; i < accounts.size(); ++i) {
			List<String> accs = accounts.get(i);
			for (int j = 1; j < accs.size(); ++j) {
				if (mailToIdx.containsKey(accs.get(j)))
					union(i, mailToIdx.get(accs.get(j)));
				else
					mailToIdx.put(accs.get(j), i);
			}
		}
		// merge accounts to index(person) with sort
		Map<Integer, TreeSet<String>> idxMail = new HashMap<>();
		for (String mail : mailToIdx.keySet()) {
			int idx = find(mailToIdx.get(mail));
			idxMail.computeIfAbsent(idx, k -> new TreeSet<>()).add(mail);
		}
		// just convert result
		List<List<String>> res = new ArrayList<>();
		for (Map.Entry<Integer, TreeSet<String>> entry : idxMail.entrySet()) {
			List<String> person = new ArrayList<>();
			person.add(accounts.get(entry.getKey()).get(0));
			person.addAll(entry.getValue());
			res.add(person);
		}
		return res;
	}

	private int find(int x) {
		while (parent[x] != parent[parent[x]])
			parent[x] = parent[parent[x]];
		return parent[x];
	}

	private void union(int x, int y) {
		parent[find(x)] = find(y);
	}
}
```

:::

### [打砖块][0C]

::: info Description
给定二维网格，其值为`1`表示砖块，`0`表示空白，某砖块稳定（不会掉落）是指其直接或间接（上下左右）与网格顶部相连，再给定若干表示依次消除的位置，若消除的位置本就无砖块则无事发生，否则指定位置砖块消失，从而导致相邻位置的砖块可能不再与网格顶部直接或间接相连而不稳定（掉落），砖块掉落就立即从网格内消失而不会落到其他砖块上。求因每次的消除而掉落的砖块数量
:::
::: details Solution
这实际上是一个求不断断开某些节点后连通量的问题，需要逆向思维，每次因消除而减少的连通数量，等效于逆序填补时增加的连通数量，由此利用并查集实现

具体实现时，并查集位置使用`i*m+j`规则编号，再额外多一个`m*n`编号表示顶部。由于需要时刻查询连通集合内节点数量，故需要维护各根节点的节点数量。开始时需将网格数据复制一份，保留原有数据，留备每次填充时先查询，若原本该位置就无砖块则填充后连通数量也必无变化。首先将所有消除一并执行，再将剩余的砖块连通成若干集合（分为与顶部相连的稳定集合与其他集合）。连通时由于是从左上往右下进行遍历，故每次只需考虑向左上的连通。完成之后就开始按消除顺序的逆序进行填充，每次填充前先记录稳定集合的砖块数量，再进行填充后的四周连通，此时需注意考虑填充位置与顶部的特殊连通，完成后再次获取此时稳定集合的砖块数量，则变化量减一（剪掉消除/填充的那块）即为正向消除的本次掉落数量，又因为变化量有减一的操作，考虑变化量为零的情况，需要进行保护性修正。最后别忘了在网格中实际地将其标为砖块

```java
class Solution {
	private int[] parent;
	private int[] weight;

	public int[] hitBricks(int[][] grid, int[][] hits) {
		int[][] dirs = { { 0, 1 }, { 0, -1 }, { 1, 0 }, { -1, 0 } };
		int m = grid.length, n = grid[0].length;
		int size = m * n;
		// init union find set, with [size] as ceiling
		parent = new int[size + 1];
		weight = new int[size + 1];
		for (int i = 0; i <= size; ++i) {
			parent[i] = i;
			weight[i] = 1;
		}
		// copy grid, because grid is useful later
		int[][] copy = new int[m][n];
		for (int i = 0; i < m; ++i)
			for (int j = 0; j < n; ++j)
				copy[i][j] = grid[i][j];
		// hit all
		for (int[] hit : hits)
			copy[hit[0]][hit[1]] = 0;
		// union ceiling
		for (int j = 0; j < n; ++j)
			if (copy[0][j] == 1)
				union(j, size);
		// union other sets, from left-up to right-down
		for (int i = 1; i < m; ++i)
			for (int j = 0; j < n; ++j)
				if (copy[i][j] == 1) {
					if (copy[i - 1][j] == 1)
						union(i * n + j, (i - 1) * n + j);
					if (j > 0 && copy[i][j - 1] == 1)
						union(i * n + j, i * n + j - 1);
				}
		// fill with reverse order
		int[] res = new int[hits.length];
		for (int i = hits.length - 1; i >= 0; --i) {
			int x = hits[i][0], y = hits[i][1];
			if (grid[x][y] == 0) // no meaning
				continue;
			// connect count to ceiling before filling
			int origin = weight[find(size)];
			// union the hit position to ceiling if its row == 0
			if (x == 0)
				union(y, size);
			// fill and union it arround
			for (int[] d : dirs) {
				int r = x + d[0], c = y + d[1];
				if (r >= 0 && r < m && c >= 0 && c < n && copy[r][c] == 1)
					union(x * n + y, r * n + c);
			}
			// connect count to ceiling after filling
			int filled = weight[find(size)];
			// delta count minus one is answer, but consider delta == 0
			res[i] = Math.max(0, filled - origin - 1);
			copy[x][y] = 1;
		}
		return res;
	}

	private int find(int x) {
		while (parent[x] != parent[parent[x]])
			parent[x] = parent[parent[x]];
		return parent[x];
	}

	private void union(int x, int y) {
		int rx = find(x);
		int ry = find(y);
		if (rx != ry) {
			parent[rx] = ry;
			weight[ry] += weight[rx];
		}
	}
}
```

:::
<!-- ------------------------------------------------------- -->

[0F]:https://leetcode-cn/problems/first-missing-positive/
[0E]:https://leetcode.cn/problems/single-number-iii/
[0D]:https://leetcode.cn/problems/swim-in-rising-water/
[0C]:https://leetcode-cn.com/problems/bricks-falling-when-hit/
[0B]:https://leetcode-cn.com/problems/accounts-merge/
[0A]:https://leetcode-cn.com/problems/smallest-string-with-swaps/
[09]:https://leetcode-cn.com/problems/path-with-minimum-effort/
[08]:https://leetcode-cn.com/problems/evaluate-division/
[07]:https://leetcode-cn.com/problems/redundant-connection/
[06]:https://leetcode-cn.com/problems/the-dining-philosophers/description/
[05]:https://leetcode-cn.com/problems/fizz-buzz-multithreaded/description/
[04]:https://leetcode-cn.com/problems/print-foobar-alternately/
[03]:https://leetcode-cn.com/problems/longest-consecutive-sequence/
[02]:https://leetcode-cn.com/problems/find-duplicate-subtrees/
[01]:https://leetcode-cn.com/problems/contains-duplicate-ii/
[00]:https://leetcode-cn.com/problems/group-anagrams/
