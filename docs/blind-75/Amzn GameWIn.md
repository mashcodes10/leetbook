---
sidebar_position: 2
---

# Meeting Rooms


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem Explanation:
You are given an array of positive integers. You start at index 0 and want to reach the last index of the array. However, you can only move forward a certain number of steps based on the value at your current index.

Rules for Movement:
At each index i, you can move forward up to arr[i] steps.
You must move forward (no backward movement).
If you land on an index where the value is 0, you cannot move further—this results in a loss.
Your goal is to check whether it is possible to reach the last index.
Example Walkthrough:
Example 1:
python
Copy
Edit
arr = [2, 3, 1, 1, 4]
Steps:
Start at index 0, value = 2. You can jump to index 1 or index 2.
Choose index 1 (value 3). Now, you can jump up to 3 steps (to index 2, index 3, or index 4).
Jump to index 4 (last index).
You reached the last index → WIN!
✅ Output: True (You can reach the end)

Example 2:
python
Copy
Edit
arr = [3, 2, 1, 0, 4]
Steps:
Start at index 0, value = 3. You can jump to index 1, index 2, or index 3.
Move to index 1 (value 2). Now, you can jump up to 2 steps.
Move to index 2 (value 1). Now, you can only move 1 step forward.
Move to index 3 (value 0). You are stuck! No more moves.
You did not reach the last index → LOSS!
❌ Output: False (You cannot reach the end)

Key Considerations:
If the first element is 0, you lose immediately.
Zeros block movement if they are unavoidable.
Multiple paths may exist—finding at least one successful path means a win.
Efficiency matters—brute force checking every path can be slow.


```




```py title="Solution.py"
from collections import deque

def can_win_game(arr):
    if not arr or arr[0] == 0:  # Edge case: Empty array or first element is 0
        return False

    n = len(arr)
    queue = deque([0])  # Start at index 0
    visited = set()  # To avoid cycles

    while queue:
        index = queue.popleft()
        
        if index == n - 1:  # If we reach the last index, we win
            return True

        if arr[index] == 0:  # If we land on a zero, we lose
            continue

        for step in range(1, arr[index] + 1):  # Explore moves
            next_index = index + step
            if next_index < n and next_index not in visited:
                queue.append(next_index)
                visited.add(next_index)
    
    return False  # If we exhaust all possibilities, we lose

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
```
