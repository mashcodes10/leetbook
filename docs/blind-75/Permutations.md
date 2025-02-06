---
sidebar_position: 2
---

# K Closest Point to Origin


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
1. Initialize Variables
python
Copy
Edit
n = len(nums)  # Get the length of the input list
ans, soln = [], []  # ans stores all permutations, soln stores the current permutation
n: Stores the length of nums
ans: List that will store all the permutations
soln: Temporary list that keeps track of the current permutation being built
2. Define the Backtracking Function
python
Copy
Edit
def backtrack():
    if len(soln) == n:
        ans.append(soln[:])  # Add a copy of soln to ans
        return
If soln has the same length as nums, a valid permutation is found.
We append a copy of soln to ans (to avoid reference issues).
Return to explore other possibilities.
3. Loop Through nums and Generate Permutations
python
Copy
Edit
for x in nums:
    if x not in soln:
        soln.append(x)   # Choose the number
        backtrack()      # Recurse
        soln.pop()       # Undo the choice (backtrack)
Iterate over each number x in nums:
If x is not already in soln, we:
Add x to soln (choose)
Call backtrack() to generate further numbers
Remove x from soln (backtrack)
4. Start the Recursion
python
Copy
Edit
backtrack()  # Start the recursive process
return ans   # Return all generated permutations
We call backtrack() to start generating permutations.
Finally, return ans containing all permutations.


```




```py title="Solution.py"
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        ans, soln = [], []

        def backtrack():
            if len(soln) == n:
                ans.append(soln[:])
                return
            
            for x in nums:
                if x not in soln:
                    soln.append(x)
                    backtrack()
                    soln.pop()
        
        backtrack()
        return ans
```


```md title="Rundown"

Example Walkthrough
Input:
python
Copy
Edit
nums = [1, 2, 3]
Recursive Execution (Backtracking Tree)

[]
 ├── [1]
 │    ├── [1, 2]
 │    │    ├── [1, 2, 3] ✅ (Append to ans)
 │    │    └── Backtrack (Remove 3)
 │    ├── [1, 3]
 │    │    ├── [1, 3, 2] ✅ (Append to ans)
 │    │    └── Backtrack (Remove 2)
 │    └── Backtrack (Remove 1)
 ├── [2]
 │    ├── [2, 1]
 │    │    ├── [2, 1, 3] ✅ (Append to ans)
 │    │    └── Backtrack (Remove 3)
 │    ├── [2, 3]
 │    │    ├── [2, 3, 1] ✅ (Append to ans)
 │    │    └── Backtrack (Remove 1)
 │    └── Backtrack (Remove 2)
 ├── [3]
 │    ├── [3, 1]
 │    │    ├── [3, 1, 2] ✅ (Append to ans)
 │    │    └── Backtrack (Remove 2)
 │    ├── [3, 2]
 │    │    ├── [3, 2, 1] ✅ (Append to ans)
 │    │    └── Backtrack (Remove 1)
 │    └── Backtrack (Remove 3)
Final Output:

python
Copy
Edit
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
Time Complexity Analysis
The number of permutations for n elements is n! (factorial).
Each permutation is built recursively, leading to a worst-case time complexity of O(n!).
Space Complexity
The recursion depth is O(n) (stack calls).
The solution stores all n! permutations, making the worst-case 

O(n!).

```
