---
sidebar_position: 2
---

# Minimum Path Sum


Problem Link [https://leetcode.com/problems/binary-tree-level-order-traversal/description/](https://leetcode.com/problems/binary-tree-level-order-traversal/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem: Minimum Path Sum
The Minimum Path Sum problem is a classic Dynamic Programming (DP) problem where we are given an m x n grid filled with non-negative numbers. The goal is to find a path from the top-left (0,0) to the bottom-right (m-1, n-1) such that the sum of all numbers along the path is minimized.

✅ Allowed Moves:

Right (→)
Down (↓)
Understanding the Problem
Input:

A m x n grid where grid[i][j] represents the cost of that cell.
Output:

The minimum sum path from (0,0) to (m-1, n-1).
Constraints:

Can only move right or down.
The grid contains non-negative integers.
Approach: Dynamic Programming (DP)
We define dp[i][j] as the minimum path sum to reach cell (i, j).
Using the recurrence relation:


dp[i][j]=grid[i][j]+min(dp[i−1][j],dp[i][j−1])
Base Case:
dp[0][0] = grid[0][0] (starting position)
Transition:
If moving from the left: dp[i][j-1]
If moving from the top: dp[i-1][j]
Take the minimum of these values and add grid[i][j].
```




```py title="Solution.py"
def minPathSum(grid):
    """
    Computes the minimum path sum in a grid from top-left to bottom-right.
    """
    if not grid or not grid[0]:
        return 0
    
    m, n = len(grid), len(grid[0])
    
    # Initialize the first row
    for j in range(1, n):
        grid[0][j] += grid[0][j-1]
    
    # Initialize the first column
    for i in range(1, m):
        grid[i][0] += grid[i-1][0]
    
    # Fill the DP table
    for i in range(1, m):
        for j in range(1, n):
            grid[i][j] += min(grid[i-1][j], grid[i][j-1])
    
    return grid[m-1][n-1]

# Example Usage:
grid1 = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
print(minPathSum(grid1))  # Expected Output: 7
        

        
```


```md title="Rundown"
Explanation of Code
Initialize the First Row and First Column

Since we can only move right or down, the first row can only be reached from the left, and the first column can only be reached from above.
We precompute these values.
Fill the DP Table Using the Formula

For each cell (i, j), calculate the minimum path sum by taking the minimum of the cell above (dp[i-1][j]) and the cell to the left (dp[i][j-1]).
Return the Minimum Path Sum at Bottom-Right Corner

grid[m-1][n-1] stores the final minimum sum.
Time Complexity Analysis
Step	Complexity
Initialize first row	O(n)
Initialize first column	O(m)
Fill the DP table	O(m × n)
Overall Complexity	O(m × n)
Space Complexity:
Since we modify grid in place, we use only O(1) extra space.
Example Execution
For:

python
Copy
Edit
grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
print(minPathSum(grid))
✅ Output: 7

✅ Path Taken: 1 → 3 → 1 → 1 → 1

This approach efficiently finds the minimum path sum using O(m × n) time and O(1) space. 


```
