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
Approach: Recursive Mirror Comparison
Key Idea
A tree is symmetric if the left subtree is a mirror of the right subtree.

Define a helper function isMirror(t1, t2) that returns True if:

t1.val == t2.val

The left subtree of t1 mirrors the right subtree of t2, and

The right subtree of t1 mirrors the left subtree of t2




```




```py title="Solution.py"
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def isMirror(t1, t2):
            if not t1 and not t2:
                return True  # Both nodes are null → symmetric
            if not t1 or not t2:
                return False  # One is null, one isn't → asymmetric
            return (
                t1.val == t2.val and
                isMirror(t1.left, t2.right) and
                isMirror(t1.right, t2.left)
            )

        return isMirror(root, root)

        
```


```md title="Rundown"
        1
       / \
      2   2
     / \ / \
    3  4 4  3

isMirror(1, 1) → True
├─ isMirror(2, 2) → True
│  ├─ isMirror(3, 3) → True
│  └─ isMirror(4, 4) → True
→ All True → Final result = True ✅

```
