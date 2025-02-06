---
sidebar_position: 2
---

# Longest Palindromic String


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach: Longest Palindromic Substring (Expand Around Center)
This implementation efficiently finds the longest palindromic substring by expanding around possible centers.

Approach Breakdown
Iterate through each character in the string (i).

Consider it as a potential center of a palindrome.
Expand Around Center for both:

Odd-length palindromes (centered at s[i]).
Even-length palindromes (centered between s[i] and s[i+1]).
Expand left (l) and right (r) as long as s[l] == s[r] (valid palindrome).

If the found palindrome is longer than the previous longest, update res.
Return the longest palindrome found.



```




```py title="Solution.py"
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        resLen = 0

        for i in range(len(s)):
            # Odd-length palindrome (centered at i)
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = r - l + 1
                l -= 1
                r += 1

            # Even-length palindrome (centered between i and i+1)
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = r - l + 1
                l -= 1
                r += 1

        return res

        
```


```md title="Rundown"
Understanding i, l, and r Movement
Key Idea
We treat each character (or pair of adjacent characters) as a potential center of a palindrome.
i represents the center position.
l (left pointer) expands leftward to check symmetry.
r (right pointer) expands rightward to check symmetry.
Step-by-Step Execution with Example
Example Input
plaintext
Copy
Edit
s = "babad"
We iterate over each character i and expand both left (l) and right (r).

Step 1: Odd-length palindrome centered at i=0
Start: l = i = 0, r = i = 0
Expand: "b" is a palindrome (s[l] == s[r])
Cannot expand further (left bound reached).
Update res = "b".
Step 2: Odd-length palindrome centered at i=1
Start: l = i = 1, r = i = 1
Expand:
"a" (s[1] == s[1]) ✅
"bab" (s[0] == s[2]) ✅
Cannot expand further (l=-1 out of bounds).
Update res = "bab".
Step 3: Even-length palindrome centered at i=1 and i+1=2
Start: l = i = 1, r = i+1 = 2
Expand:
"a" != "b" ❌ (immediately fails)
No change to res.
Step 4: Odd-length palindrome centered at i=2
Start: l = i = 2, r = i = 2
Expand:
"b" (s[2] == s[2]) ✅
"aba" (s[1] == s[3]) ✅
Cannot expand further (s[0] != s[4]).
res remains "bab" (same length as "aba").
Step 5: Odd-length palindrome centered at i=3
Start: l = i = 3, r = i = 3
Expand:
"a" (s[3] == s[3]) ✅
Cannot expand further (s[2] != s[4]).
No change to res.
Step 6: Odd-length palindrome centered at i=4
Start: l = i = 4, r = i = 4
Expand:
"d" (s[4] == s[4]) ✅
Cannot expand further (right bound reached).
No change to res.
Final Output
plaintext
Copy
Edit
"bab" (or "aba")
Either "bab" or "aba" is a valid output, as both are the longest palindromes.

Visualization of l and r Expanding
For "babad", at i=1, l and r expand as follows:

plaintext
Copy
Edit
Initial:
b a b a d
  ↑
  i (center)

Expand once (s[l] == s[r]):
b a b a d
↑   ↑
l   r

Expand again (s[l] == s[r]):
b a b a d
↑     ↑
l     r

Stop (l = -1, out of bounds)
So, "bab" is stored in res.

How i, l, and r Move
i moves one step at a time (for i in range(len(s))).
l moves left (l -= 1) while expanding the palindrome.
r moves right (r += 1) while expanding.
Each palindrome expansion stops when:

Characters don’t match (s[l] != s[r]).
Left (l) goes out of bounds (l < 0).
Right (r) goes out of bounds (r >= len(s)).
Time Complexity
Each center expands up to O(n) in the worst case.
Total centers = O(n).
Final complexity = O(n^2).
Final Summary
i iterates over each character.
l and r expand outward symmetrically as long as s[l] == s[r].
Stops when a mismatch occurs or bounds are exceeded.
Keeps track of the longest palindrome found so far.
```
