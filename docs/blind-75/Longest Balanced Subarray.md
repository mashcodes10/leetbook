---
sidebar_position: 2
---

# Lonngest Balanced Subarray


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem Statement:
Given an array of numbers consisting of only 0s and 1s, find the longest contiguous subarray that contains an equal number of 0s and 1s.

Example 1
Input:
python
Copy
Edit
nums = [0, 1]
Output:
python
Copy
Edit
2
Explanation:
The whole array [0,1] is balanced because it has one 0 and one 1.
Example 2
Input:
python
Copy
Edit
nums = [0, 1, 0]
Output:
python
Copy
Edit
2
Explanation:
The subarray [0,1] is balanced with one 0 and one 1.
Optimized Approach (Prefix Sum + Hash Map)
The key observation is that if we replace 0s with -1, then the problem transforms into finding the longest subarray with sum = 0.

Steps:
Replace 0 with -1, so we can track cumulative sums.
Maintain a hashmap (prefix_sum_map) that stores the first occurrence of each cumulative sum.
If the same sum appears again, it means the subarray between these indices has a sum of 0, which is balanced.
Keep track of the maximum subarray length encountered.

```




```py title="Solution.py"
def findMaxLength(nums):
    prefix_sum_map = {0: -1}  # Base case: sum = 0 at index -1
    max_length = 0
    prefix_sum = 0

    for i, num in enumerate(nums):
        # Convert 0s to -1 to balance sum calculation
        prefix_sum += 1 if num == 1 else -1

        # If the same sum is seen before, update max_length
        if prefix_sum in prefix_sum_map:
            max_length = max(max_length, i - prefix_sum_map[prefix_sum])
        else:
            prefix_sum_map[prefix_sum] = i  # Store first occurrence

    return max_length

```


```md title="Rundown"
To determine whether it is possible to win the game, we can use a Breadth-First Search (BFS) or Depth-First Search (DFS) approach to explore possible paths from the start to the end of the array.

Approach:
Use BFS or DFS: We explore all possible moves from each index to check if we can reach the last index.
Track Visited Indices: To avoid infinite loops or revisiting the same index.
Check Zero Condition: If we land on 0, we cannot proceed.
Base Case: If we reach the last index, return True.
Implementation (BFS Approach)
We use a queue to track the indices we can move to, ensuring we explore all valid paths.

Time & Space Complexity Analysis
Time Complexity: 

O(N) → We traverse the array once.
Space Complexity: 

O(N) → We store at most N prefix sums.
Example Walkthrough
Example Input:
python
Copy
Edit
nums = [0, 1, 0, 1, 1, 0, 0]
Transform 0s to -1s:
python
Copy
Edit
[-1, 1, -1, 1, 1, -1, -1]
```
