---
sidebar_position: 2
---

# Word Search


Problem Link [https://leetcode.com/problems/word-search/description/](https://leetcode.com/problems/word-search/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Word Search
Insight: Use DFS to explore all possible paths for matching a word.

Approach:

Define a DFS function:
Base case: Return true if the word is fully matched.
Mark cells as visited to avoid revisits.
Explore neighbors (up, down, left, right).
Backtrack after the recursive calls.
Time Complexity: 

O(N⋅3 ^L)

L is the word length.



```




```py title="Solution.py"
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        ROWS, COLS = len(board), len(board[0])
        n = len(word)
        path = set()

        def dfs(r,c,i): #n= current index of the word
            if i == n: # the current index of the word is the last index
                return True
            if(r < 0 or c < 0 or r >= ROWS or c >= COLS or word[i] != board[r][c] or (r,c) in path):
                return False 
            # we found a charcter that we need 
            path.add((r,c))

            #recursive backtracking- any of them finds the word it returns true
            result = (dfs(r+1, c, i+1) or
             dfs(r-1, c, i+1) or
             dfs(r, c+1, i+1) or
             dfs(r, c-1, i+1) )
            
            path.remove((r,c))
            return result  
        #bruteforce run through entire board
        for rows in range(ROWS):
            for cols in range(COLS):
                if dfs(rows,cols,0): #if our dfs ever returns true, that means word is found
                    return True
        
        return False

        
```


```md title="Rundown"
Execution Trace Example
Input:
Grid:

C A T
D E F
G H I

Word: "CAT"
Process:
Start DFS from C (0, 0):

Match first letter "C".
Mark (0, 0) as visited. path = {(0, 0)}.
Explore neighbors:
Down to D: No match.
Right to A: Match second letter.
Move to A (0, 1):

Match second letter "A".
Mark (0, 1) as visited. path = {(0, 0), (0, 1)}.
Explore neighbors:
Down to E: No match.
Right to T: Match third letter.
Move to T (0, 2):

Match third letter "T".
Mark (0, 2) as visited. path = {(0, 0), (0, 1), (0, 2)}.
Word found since i == len(word). Return True.
Key Intuition
Recursive Exploration: Each DFS call explores all possible paths starting from the current cell.
Backtracking: After exploring a path, the cell is unmarked to allow exploration of other potential paths.
Efficiency: The path set prevents revisiting cells and invalid paths.
Complexity
Time Complexity: 

O(N⋅3 ^L), where:

N: Number of cells in the grid.

L: Length of the word.
Each cell has up to 3 unvisited neighbors to explore.
Space Complexity: 

O(L), due to the recursion stack and path storage


```
