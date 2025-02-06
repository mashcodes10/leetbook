---
sidebar_position: 2
---

# Merge Two Sorted Lists


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Question
    Merge two sorted linked lists and return it as a sorted list.
    The list should be made by splicing together the nodes of the
    first two lists.

Thoughts Before Coding
    - We can implement a two pointer approach
        - One pointer will be inside 'l1'
        - Another pointer will be inside 'l2'
    - In each of the iteration
        - We will be comparing the node values at the current pointers
        - We will retrieve the node with a smaller value to be
          appended to our merged sorted list

Answer
    - Create the following variables
        - head, the sentinel head of the merged sorted list
        - tail, the sentinel tail of the merged sorted list
    - While 'l1' OR 'l2' is not equal to 'null'
        - If 'l2' is null OR 'l1' is not null AND 'l1.val' is less
          than 'l2.val'
            - Set 'tail.next' to 'l1'
            - Set 'tail' to 'l1'
            - Set 'l1' to 'l1.next'
        - Else
            - Set 'tail.next' to 'l2'
            - Set 'tail' to 'l2'
            - Set 'l2' to 'l2.next'
    - Return 'head.next'

What is the Time and Space Complexity?
    - Time Complexity = O(m + n), where m,n are the length of the
        two input list
        - O(m + n), visit each node once
    - Space Complexity = O(1)
```




```py title="Solution.py"
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_two_sorted_lists(l1, l2):
    # Create a dummy node to simplify edge cases
    dummy = ListNode()
    tail = dummy  # Tail pointer to construct the merged list

    # Iterate while either l1 or l2 is not None
    while l1 or l2:
        if l2 is None or (l1 is not None and l1.val < l2.val):
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next  # Move tail pointer forward

    # Return the merged linked list, skipping the dummy node
    return dummy.next

# Helper function to print linked list
def print_linked_list(head):
    values = []
    while head:
        values.append(str(head.val))
        head = head.next
    print(" -> ".join(values))

# Example usage:
l1 = ListNode(1, ListNode(2, ListNode(4)))
l2 = ListNode(1, ListNode(3, ListNode(4)))

merged_head = merge_two_sorted_lists(l1, l2)
print_linked_list(merged_head)  # Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4



        
```


```md title="Rundown"
Approach Breakdown (Your Thoughts in Code)
Initialize Sentinel Node:

Use a dummy node to simplify handling edge cases.
tail pointer starts at dummy.
Merge Lists Using Two Pointers (l1 and l2):

Iterate while either l1 or l2 exists.
Compare values:
If l1.val < l2.val, attach l1 and move l1 forward.
Otherwise, attach l2 and move l2 forward.
Move tail forward after appending a node.
Return Merged List:

dummy.next points to the merged list.
Example Walkthrough
Example Input:
plaintext
Copy
Edit
l1 = [1 -> 2 -> 4]
l2 = [1 -> 3 -> 4]
Step-by-step Execution:
plaintext
Copy
Edit
1. Compare 1 (l1) and 1 (l2) → Choose 1 (l1) → Move l1 forward
   Merged List: 1 ->

2. Compare 2 (l1) and 1 (l2) → Choose 1 (l2) → Move l2 forward
   Merged List: 1 -> 1 ->

3. Compare 2 (l1) and 3 (l2) → Choose 2 (l1) → Move l1 forward
   Merged List: 1 -> 1 -> 2 ->

4. Compare 4 (l1) and 3 (l2) → Choose 3 (l2) → Move l2 forward
   Merged List: 1 -> 1 -> 2 -> 3 ->

5. Compare 4 (l1) and 4 (l2) → Choose 4 (l1) → Move l1 forward
   Merged List: 1 -> 1 -> 2 -> 3 -> 4 ->

6. l1 is now None, append remaining l2 (4)
   Merged List: 1 -> 1 -> 2 -> 3 -> 4 -> 4
Time & Space Complexity
Time Complexity: 

O(m+n)
Each node is visited once.
Space Complexity: 

O(1)
Merging happens in-place without extra memory.
```
