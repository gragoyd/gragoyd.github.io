---
title: 哈希&多线程
icon: relation
category:
  - algorithm
tag:
  - hash
  - multithread
---

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

## 多线程

### [交替打印 FooBar][04]

::: info Description
确保在多线程调用下，俩函数交替执行打印
:::

::: details BlockingQueue

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

:::
::: details yield

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

:::
::: details ReentrantLock

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

:::
::: details synchronized

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

:::
::: details Semaphore

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
<!-- ------------------------------------------------------- -->
[00]:https://leetcode-cn.com/problems/group-anagrams/
[01]:https://leetcode-cn.com/problems/contains-duplicate-ii/
[02]:https://leetcode-cn.com/problems/find-duplicate-subtrees/
[03]:https://leetcode-cn.com/problems/longest-consecutive-sequence/
[04]:https://leetcode-cn.com/problems/print-foobar-alternately/
[05]:https://leetcode-cn.com/problems/fizz-buzz-multithreaded/description/
[06]:https://leetcode-cn.com/problems/the-dining-philosophers/description/
