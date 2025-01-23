---
sidebar_position: 2
---

# 108. Convert Sorted Array to Binary Search Tree


Problem Link [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach and Insight
Problem: Convert Sorted Array to Binary Search Tree
Objective: Given a sorted array, construct a height-balanced binary search tree (BST). A height-balanced BST is one where the depth of the two subtrees of every node differs by at most one.
Key Operations:
Use the middle element of the sorted array as the root of the BST.
Recursively apply the same process for the left and right halves of the array to build the left and right subtrees.
Insight
Middle Element as Root:

Choosing the middle element ensures that the left and right subtrees are approximately equal in size, maintaining the balance of the tree.
Example:
yaml
Copy
Edit
Input: nums = [-10, -3, 0, 5, 9]
Middle: 0 (root)
Left subtree: [-10, -3]
Right subtree: [5, 9]
Divide and Conquer:

Use recursion to divide the array into smaller subarrays for each subtree.
Base Case: When the subarray is empty (l > r), return None.
Approach
Recursive Helper Function:

The function helper(l, r) constructs the BST for the subarray nums[l:r+1].
Base Case:

If l > r, the subarray is empty. Return None.
Recursive Steps:

Compute the middle index: m = (l + r) // 2.
Create a new TreeNode with nums[m] as its value.
Recursively construct the left subtree using the left half of the array: helper(l, m-1).
Recursively construct the right subtree using the right half of the array: helper(m+1, r).
Return Root:

The helper function returns the root of the BST.


```




```py title="Solution.py"
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        
        # Input: nums = [-10,-3,0,5,9]
        # How middle root ?
        def helper(l,r):
            
            if l > r:
                return None

            m = (l + r) // 2
            root = TreeNode(nums[m])
            root.left = helper(l, m-1)
            root.right = helper(m+1, r)
            return root
        
        return helper(0, len(nums)-1)


        
```


```md title="Rundown"

Visual Explanation
Example Input
Input:

css
Copy
Edit
nums = [-10, -3, 0, 5, 9]
Execution
First Call (helper(0, 4)):

Middle index: 

m=(0+4)//2=2.
Root: TreeNode(0).
Left subtree: helper(0, 1) for [-10, -3].
Right subtree: helper(3, 4) for [5, 9].
Left Subtree (helper(0, 1)):

Middle index: 

m=(0+1)//2=0.
Root: TreeNode(-10).
Left subtree: helper(0, -1) → None.
Right subtree: helper(1, 1) for [-3].
Right Subtree of -10 (helper(1, 1)):

Middle index: 

m=(1+1)//2=1.
Root: TreeNode(-3).
Left subtree: helper(1, 0) → None.
Right subtree: helper(2, 1) → None.
Right Subtree (helper(3, 4)):

Middle index: 

m=(3+4)//2=3.
Root: TreeNode(5).
Left subtree: helper(3, 2) → None.
Right subtree: helper(4, 4) for [9].
Right Subtree of 5 (helper(4, 4)):

Middle index: 

m=(4+4)//2=4.
Root: TreeNode(9).
Left subtree: helper(4, 3) → None.
Right subtree: helper(5, 4) → None.
Resulting Tree
markdown
Copy
Edit
        0
       / \
    -10   5
       \    \
       -3    9
Result
Output: The root of the BST, represented as:

sql
Copy
Edit
TreeNode {
    val: 0,
    left: TreeNode {
        val: -10,
        left: None,
        right: TreeNode {
            val: -3,
            left: None,
            right: None
        }
    },
    right: TreeNode {
        val: 5,
        left: None,
        right: TreeNode {
            val: 9,
            left: None,
            right: None
        }
    }
}
Complexity Analysis
Time Complexity
Each element is processed once as the root of some subtree.
Recursive division of the array takes 

O(logN) depth of recursion.
Total Complexity: 


Space Complexity
Space required for the recursion stack is 

O(logN) in the case of balanced recursion.
Edge Cases
Empty Array:

Input: []
Output: None.
Single Element:

Input: [1]
Output: TreeNode with val = 1.
All Elements Identical:

Input: [2, 2, 2]
Output: Balanced tree with one 2 at each level.

```
