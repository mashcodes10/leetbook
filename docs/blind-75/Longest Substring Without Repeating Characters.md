---
sidebar_position: 2
---

# Best Time to Buy and Sell Stock 


Problem Link [https://leetcode.com/problems/binary-tree-level-order-traversal/description/](https://leetcode.com/problems/binary-tree-level-order-traversal/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem Statement
Given a string s, find the length of the longest substring without repeating characters.

✅ Approach: Sliding Window with HashSet (Two Pointers)
Key Idea
Use a sliding window approach with two pointers:

l = start of the window

r = end of the window

Use a set to store characters in the current window.

If a character repeats, slide the window forward by removing the leftmost character.



```




```py title="Solution.py"
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        l = 0
        max_len = 0

        for r in range(len(s)):
            while s[r] in char_set:
                char_set.remove(s[l])
                l += 1
            char_set.add(s[r])
            max_len = max(max_len, r - l + 1)

        return max_len

        
```


```md title="Rundown"
      Pointer Movement Explanation
You maintain a window [l, r]:
If s[r] is not in the set, it’s unique → add it and update max_len.

If it is in the set, slide the l pointer forward to remove duplicates.

Example: "abcabcbb"
l	r	s[r]	char_set	Action	max_len
0	0	a	{a}	Add a	1
0	1	b	{a, b}	Add b	2
0	2	c	{a, b, c}	Add c	3
0	3	a	a in set	Remove a, l=1 → add a	3
1	4	b	b in set	Remove b, l=2 → add b	3
2	5	c	c in set	Remove c, l=3 → add c	3
3	6	b	Add b		3
3	7	b	b in set	Remove a, b, l=5	3
Final max_len: 3 ("abc")

```
