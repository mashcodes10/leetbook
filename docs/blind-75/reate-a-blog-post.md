

# Merge Two Sorted Lists

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Approch and Code

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
Merge Two Sorted Lists
Insight: Merge two sorted linked lists into one sorted list iteratively.

Approach:

Initialize a dummy node and pointer curr.
Compare the heads of both lists:
Attach the smaller node to curr.
Move the pointer of the list with the smaller node.
After one list is exhausted, attach the remaining list.
Time Complexity: 

O(n+m)
# Hello

This is my **first Docusaurus document**!
```




```py title="Solution.py"
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        tail = dummy 

        while list1 and list2:
            if list1.val < list2.val
                tail.next = list1
                list1 = list1.next
            else
                tail.next = list2
                list2 = list2.next
            tail = tail.next

            if list1:
                tail.next = list1
            else if list2:
                tail.next = list2
            return dummy.next        
```

```

