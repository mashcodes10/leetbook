---
sidebar_position: 2
---

# Climbing Stairs


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Question
    You are climbing a staircase. It takes n steps to reach the top.

    Each time you can either climb 1 or 2 steps. In how many
    distinct ways can you climb to the top?

    Constraints:
        - 1 <= n <= 45

Thoughts Before Coding
    - In the recursive approach
        - The recursive solution is very inefficient due to overlapping
          recursive calls
        - We can avoid overlapping recursive calls using memoization
    - What do we need to cache?
        - In each of the recursive call
            - We are trying to find the total number of distinct 'ways'
              at the current value 'n'
            - This means we can cache 'n' with 'ways'

Answer
    - Create an array 'memo' to cache previously calculated results
        - The indices represent 'n'
        - The values represent 'ways'
    - Implement the top down memoization approach
        - What parameters do we need?
            - n, our current step
            - memo, cache
        - What is the base case?
            - If 'n' is equal to 0, OR 'n' is equal to '1'
                - Return 1
            - If 'memo[n]' is not equal to 0
                - return 'memo[n]'
        - In each of the recursive call
            - Recursively find the number of 'ways1' when we take
              1 step
                - n => n - 1
            - Recursively find the number of 'ways2' when we take
              2 steps
                - n => n - 2
            - Put 'ways1 + ways2' at 'memo[n]'
            - Return 'memo[n]'

What is the Time and Space Complexity?
    - Time Complexity = O(n), where n is the input value
        - O(n), there is 'n' possible states
    - Space Complexity = O(n) + O(n) = O(n), where n is the input value
         - O(n), 'memo' array
         - O(n), recursive call stack memory

Approach 1: Bottom-Up Dynamic Programming (Your Approach)
Key Idea:
Use an array dp where dp[i] stores the number of ways to reach step i+1.
The recurrence relation:

dp[i]=dp[i−1]+dp[i−2]
since you can either take 1 step from (i-1) or 2 steps from (i-2).
This ensures each step is computed efficiently in O(n) time.
Steps:
Base Cases:

dp[0] = 1 → One way to climb 1 step.
dp[1] = 2 → Two ways to climb 2 steps (1+1 or 2).
Loop from 2 to n-1 to compute dp[i] = dp[i-1] + dp[i-2].

Return dp[n-1], which stores the total ways to reach the top.

Approach 2: Optimized DP (Two Variables, O(1) Space)
Key Idea:
Instead of storing all previous values in an array, store only the last two computed values.
This reduces space complexity from O(n) → O(1).
We only need two variables to track prev1 (ways to reach step n-1) and prev2 (ways to reach n-2).
Steps:
Base Cases:

prev1 = 2 (ways to climb 2 steps)
prev2 = 1 (ways to climb 1 step)
Loop from 3 to n, calculating:

cur = prev1 + prev2 (Current step count)
Shift prev2 = prev1, prev1 = cur.
Return prev1, which stores the total ways to reach n.



```




```py title="Solution.py"
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2

        dp = [0] * n
        dp[0] = 1
        dp[1] = 2

        for i in range(2, n):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[n - 1]


class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2

        prev1, prev2 = 2, 1  # Ways to reach n-1 and n-2

        for _ in range(3, n + 1):
            cur = prev1 + prev2  # Compute current step count
            prev2 = prev1  # Shift values forward
            prev1 = cur

        return prev1

        
```


```md title="Rundown"
Approach Breakdown (Your Thoughts in Code)
Base Case:

If n == 1, return "1".
Recursive Call:

Get prev = count_and_say(n - 1).
Build the Next Sequence:

Initialize an empty list cur (StringBuilder equivalent).
Use a variable count to track the frequency of consecutive digits.
Iterate Through prev:

If the next character is different or end of string:
Append count and the current character to cur.
Reset count to 0.
Return the Final String:

Convert the list to a string using "".join(cur).
Example Walkthrough
Example: count_and_say(4)
plaintext
Copy
Edit
1. count_and_say(1) → "1"
2. count_and_say(2) → "11"  (one "1")
3. count_and_say(3) → "21"  (two "1s")
4. count_and_say(4) → "1211"  (one "2", one "1")
Step-by-Step for n=4
plaintext
Copy
Edit
Previous sequence: "21"
- '2' appears once → Append "12"
- '1' appears once → Append "11"

Final output: "1211"
Time & Space Complexity
Time Complexity: 

O(n×k)

O(n) recursive calls, each iterating through a string of length k.
Space Complexity: 

O(n+k)

O(n) recursive calls on stack.

O(k) space for generated strings.

```
