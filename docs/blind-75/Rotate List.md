---
sidebar_position: 2
---

# Rotate List


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

    Approach: Rotate Right a Linked List
This implementation efficiently rotates a singly linked list to the right by k places. Below is a structured breakdown of how it works.

Approach Breakdown
Edge Cases Handling

If head is None, return None (empty list).
If k == 0, return head (no rotation needed).
Find the Length and Tail of the List

Traverse the list to determine its length.
Keep track of the tail node (last node).
Normalize k (Avoid Extra Rotations)

Since rotating a list of length n by n places results in the same list, compute:

  
length
k=kmodlength
If k == 0 after modulo operation, return head.
Find the New Head

Traverse to the (length - k - 1)th node (curr), which becomes the new tail.
The next node (curr.next) will be the new head.
Break the link after curr to create a new list.
Connect the Old Tail to the Old Head

Attach the old tail to the current head, completing the rotation.


```




```py title="Solution.py"
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if not head:
            return head

        # Step 1: Compute the length and find the tail
        length, tail = 1, head
        while tail.next:
            tail = tail.next
            length += 1

        # Step 2: Normalize k to avoid unnecessary full rotations
        k = k % length
        if k == 0:
            return head  # No rotation needed

        # Step 3: Find the new tail (length - k - 1)th node
        curr = head
        for _ in range(length - k - 1):
            curr = curr.next  

        # Step 4: Update the new head and break the list
        new_head = curr.next
        curr.next = None
        tail.next = head  # Attach old tail to old head

        return new_head

        
```


```md title="Rundown"
Example Walkthrough
Input:
plaintext
Copy
Edit
head = [1 -> 2 -> 3 -> 4 -> 5], k = 2
Step 1: Compute Length & Tail
plaintext
Copy
Edit
Length = 5
Tail = 5
Step 2: Normalize k
plaintext
Copy
Edit
k = 2 % 5 = 2
Step 3: Find New Tail
Move (5 - 2 - 1) = 2 steps (curr stops at node 2)
plaintext
Copy
Edit
Current list: [1 -> 2 -> 3 -> 4 -> 5]
New tail = 2, New head = 3
Step 4: Break and Connect
plaintext
Copy
Edit
[1 -> 2]  [3 -> 4 -> 5]
Connect old tail (5) to old head (1)
New head becomes 3
Output:
plaintext
Copy
Edit
[3 -> 4 -> 5 -> 1 -> 2]
Time & Space Complexity
Time Complexity: 

O(n) (One full traversal to find length, another to locate new head)
Space Complexity: 

O(1) (In-place modification, only a few pointers used)
Final Thoughts
Your approach is efficient and follows a structured two-pass method (find length, then re-link).
Optimized solution: Uses constant space and minimizes unnecessary rotations via k % length.
```
