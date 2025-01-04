---
sidebar_position: 2
---

# Merge K Sorted List


Problem Link [https://leetcode.com/problems/merge-k-sorted-lists/description/](https://leetcode.com/problems/merge-k-sorted-lists/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Merge k Sorted Lists
Insight: Use a min-heap to efficiently manage merging k lists.

Approach:

Push the head of each list into a min-heap.
Extract the smallest element, add it to the merged list, and push its next node into the heap.
Repeat until the heap is empty.
Time Complexity: 

O(nlogk)

```




```py title="Solution.py"
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        heap = []
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))
        

        Dummy = ListNode()
        curr = Dummy

        while heap:
            val, i, node = heapq.heappop(heap)
            curr.next = node
            curr = node
            node = node.next

            if node:
                heapq.heappush(heap, (node.val, i, node))

        return Dummy.next


        
```


```md title="Rundown"
Execution Trace Example
Input:
𝑘
=
3
k=3, Lists:
List 1: [1, 4, 7]
List 2: [2, 5, 6]
List 3: [3, 8, 9]
Process:
Initial Heap Push:

Push heads of all lists: 

(1,0,node1),(2,1,node2),(3,2,node3).
Heap: [(1, 0, node1), (2, 1, node2), (3, 2, node3)].
First Extraction:

Extract smallest: (1, 0, node1).
Attach node1 to the merged list.
Push next node from List 1: (4, 0, node4).
Heap: [(2, 1, node2), (3, 2, node3), (4, 0, node4)].
Second Extraction:

Extract smallest: (2, 1, node2).
Attach node2 to the merged list.
Push next node from List 2: (5, 1, node5).
Heap: [(3, 2, node3), (4, 0, node4), (5, 1, node5)].
Third Extraction:

Extract smallest: (3, 2, node3).
Attach node3 to the merged list.
Push next node from List 3: (8, 2, node8).
Heap: [(4, 0, node4), (5, 1, node5), (8, 2, node8)].
Continue Extracting:

Repeat the process until the heap is empty.
Final Merged List:
[1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9]


Key Intuition
The min-heap ensures that only the smallest element across all lists is processed at each step, maintaining the sorted order efficiently.
By pushing the next node from the list of the extracted node, the heap always contains one element from each active list.

```
