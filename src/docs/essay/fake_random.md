---
title: 假随机数组词造句
---

## 假随机数组词造句

在网上看到的，利用伪随机算法，通过设置特定的随机种子使生成的一系列特定数字，将数字对应的字符连起来可组成正常语义的词句。种子获取采用暴力搜索方法，一个一个数字试，看哪个数字生成的数字序列符合要求（自定义截止数字）

首先要控制随机数生成的区间，越大的区间随机到想要的数字的概率越低，符合要求的种子越难找，甚至有可能不存在

因为种子参数类型为`long`，故搜寻空间为`Long.MIN_VALUE ~ Long.MAX_VALUE`，再考虑到越短的数字看起来越简洁，故按照绝对值从小到大进行搜索

若待生成的词句为纯英文小写，则可利用 ASCII 码进行映射（`a ~ z <--> 97 ~ 123`），再考虑截止数字与区间的连续性，可取为 96。若待生成的词句为汉字则得用 Unicode 编码映射，但由于字符区间过长，很有可能找不到特定种子，不予实现

在进行稍长的查找时就会明显过长，后续可以考虑将区间分段用多线程分别同时查找

::: code-tabs
@tab demo

```java
import java.util.Random;

public class Whisper {
	public static void main(String[] args) {
		Random creater = new Random();
		long[] seeds = { -95, -3871351, 123439, -34025, -10835916, 2009213 };
		StringBuilder sentence = new StringBuilder();
		for (long seed : seeds) {
			creater.setSeed(seed);
			for (int code = creater.nextInt(96, 123); code != 96; code = creater.nextInt(96, 123))
				sentence.append((char) code);
			sentence.append(' ');
		}
		System.out.println(sentence.toString().stripTrailing());
	}
}
```

@tab:active 完整实现

```java
import java.util.NoSuchElementException;
import java.util.Random;

public class FakeRandom {
	private static final Random creater = new Random();
	private static String[] words = new String[] { "hello", "world" };
	private static long[] seeds = new long[] { -229985452L, -147909649L };

	/**
	 * @description Find seed of each word with smallest abs and positive firstly.
	 *              If the seed is not found, replaced by zero.
	 *              The result will be stored in {@code seeds}.
	 * @param text consists of a-z and space.
	 * @throws NoSuchElementException indicate which word not found correspond seed.
	 */
	private static void getSeed(String text) {
		words = text.split(" ");
		seeds = new long[words.length];
		for (int i = 0; i < words.length; ++i) {
			for (long seed = 1L; seed < Long.MAX_VALUE; ++seed) {
				if (isCorrespond(i, seed))
					break;
				if (isCorrespond(i, -seed))
					break;
			}
			if (seeds[i] == 0L)
				throw new NoSuchElementException("The " + (i + 1) + " word find seed failed.");
		}
	}

	/**
	 * @description Check if the seed is corresponding to the word or not.
	 *              If is correspond, set the seed directly.
	 * @param index The index of word in {@code words}, as well as the index of
	 *              seed in {@code words}.
	 * @param seed  The seed to be checked.
	 * @return True if seed is corresponding to word.
	 */
	private static boolean isCorrespond(int index, long seed) {
		creater.setSeed(seed);
		for (int i = 0; i < words[index].length(); ++i)
			if (words[index].charAt(i) != creater.nextInt(96, 123))
				return false;
		if (creater.nextInt(96, 123) == 96) {
			seeds[index] = seed;
			return true;
		} else
			return false;
	}

	/**
	 * @description Calculate text with {@code seeds} and output.
	 */
	private static void printText() {
		StringBuilder sb = new StringBuilder();
		for (long seed : seeds) {
			creater.setSeed(seed);
			for (int code = creater.nextInt(96, 123); code != 96; code = creater.nextInt(96, 123))
				sb.append((char) code);
			sb.append(' ');
		}
		System.out.println(sb.toString().stripTrailing());
	}

	public static void main(String[] args) {
		getSeed("the quick brown fox jumps over the lazy dog");
		for (int i = 0; i < seeds.length; ++i)
			System.out.println(words[i] + "\t" + seeds[i]);
		printText();
	}
}
```

:::
