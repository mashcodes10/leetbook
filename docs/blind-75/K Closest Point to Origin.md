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
Sorting-Based Approach 

O(nlogn)
Compute distances and store them in a list along with coordinates.
Sort based on distance.
Pop k smallest distances.

Heap-Based Approach 

O(nlogk)
Use a max heap to store only the k smallest elements.
Push elements into the heap (with negative distance to simulate max heap).
Extract k closest elements.

```




```py title="Solution.py"
from typing import List
import math

def kClosest_sort(points: List[List[int]], k: int) -> List[List[int]]:
    distances = []
    
    # Compute distances and store them in a list
    for x, y in points:
        distance = x**2 + y**2  # Squared distance to avoid sqrt
        distances.append([distance, x, y])
    
    # Sort the list based on distance in descending order (largest first)
    distances.sort(key=lambda x: (-x[0]))  # Negative for sorting in descending order
    
    result = []
    while k > 0:
        distance, x, y = distances.pop()  # Remove the smallest distance
        result.append([x, y])  # Append only coordinates
        k -= 1
    
    return result




   import heapq
from typing import List

def kClosest_heap(points: List[List[int]], k: int) -> List[List[int]]:
    heap = []
    
    # Push elements into a max heap (using negative distance)
    for x, y in points:
        distance = x**2 + y**2
        heapq.heappush(heap, (distance, [x, y]))  # Push tuple (distance, [x,y])
    
    result = []
    for _ in range(k):
        _, point = heapq.heappop(heap)  # Extract k closest elements
        result.append(point)
    
    return result

```


```md title="Rundown"

```
