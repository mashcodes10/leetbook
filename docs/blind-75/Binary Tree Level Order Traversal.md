---
sidebar_position: 2
---

# Binary Tree Level Order Traversal


Problem Link [https://leetcode.com/problems/binary-tree-level-order-traversal/description/](https://leetcode.com/problems/binary-tree-level-order-traversal/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach
Base Case:

If the root is None, return an empty list [].
Queue Initialization:

Use a queue (deque) to store nodes for processing.
Start by adding the root node to the queue.
Iterative Level Traversal:

While the queue is not empty:
Determine the number of nodes in the current level (n = len(queue)).
Create a temporary list level to store node values for this level.
Process each node in the current level:
Dequeue the node, add its value to level.
Enqueue the left and right children of the node (if they exist).
Append the level list to the final result.
Return Result:

Return the list of levels.
```




```py title="Solution.py"
from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        # check the base case
        ans = []
        if root is None:
            return ans
        
        
        queue = deque()
        queue.append(root)

        while queue:
            level = []
            n= len(queue)

            for i in range(n):
                node = queue.popleft()
                level.append(node.val)

                if node.left : queue.append(node.left)
                if node.right : queue.append(node.right)
            
            ans.append(level)

        return ans

        

        
```


```md title="Rundown"
Visual Explanation
Example Input
Input Tree:

markdown
Copy
Edit
        3
       / \
      9  20
         /  \
        15   7
Execution
Initialization:

queue = [3]
ans = []
First Level:

n = len(queue) = 1
Process node 3:
Add value 3 to level = [3].
Enqueue left child 9 and right child 20.
Append level to ans: ans = [[3]].
queue = [9, 20].
Second Level:

n = len(queue) = 2
Process node 9:
Add value 9 to level = [9].
Process node 20:
Add value 20 to level = [9, 20].
Enqueue left child 15 and right child 7.
Append level to ans: ans = [[3], [9, 20]].
queue = [15, 7].
Third Level:

n = len(queue) = 2
Process node 15:
Add value 15 to level = [15].
Process node 7:
Add value 7 to level = [15, 7].
Append level to ans: ans = [[3], [9, 20], [15, 7]].
queue = [].
Completion:

The queue is empty. Return ans.
Result
Output:


[[3], [9, 20], [15, 7]]
Complexity Analysis
Time Complexity
Each node is processed once: 

O(N), where 

N is the number of nodes in the tree.
Space Complexity
Space for the queue: In the worst case, the queue holds the largest number of nodes at a single level.
For a balanced tree, this is 

O(W), where 
𝑊
W is the width of the tree.
Total Space Complexity: 
𝑂
(
𝑁
)
O(N) in the worst case for a complete tree.

Edge Cases
Empty Tree:

Input: root = None
Output: []
Single Node Tree:

Input: root = TreeNode(1)
Output: [[1]]
Unbalanced Tree:

Input:
markdown
Copy
Edit
      1
     /
    2
   /
  3
Output: [[1], [2], [3]]


```
