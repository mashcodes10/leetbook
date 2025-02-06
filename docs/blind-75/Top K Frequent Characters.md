---
sidebar_position: 2
---

# Top K Frequent Characters


Problem Link [https://leetcode.com/problems/merge-intervals/description/](https://leetcode.com/problems/merge-intervals/description/).

## Approch and Code

Alternative Naive:

Sorts by frequency in descending order.
Takes the first k elements.


Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach and Insight
1. Count the Frequency of Each Number
python
Copy
Edit
from collections import Counter
counter = Counter(nums)
Counter(nums) creates a dictionary where:
Key = unique number from nums
Value = count of occurrences (frequency)
Example:
python
Copy
Edit
nums = [1,1,1,2,2,3]
counter = {1: 3, 2: 2, 3: 1}
2. Use a Min Heap to Store the Top k Frequent Elements
python
Copy
Edit
heap = []
The heap will store k elements with their frequency.
Heap Insertion Logic
python
Copy
Edit
for key, value in counter.items():
    if len(heap) < k:
        heapq.heappush(heap, (value, key))
    else:
        heapq.heappushpop(heap, (value, key))
If the heap size is less than k, push (frequency, number).
If the heap size reaches k, use heappushpop(), which:
Pushes a new element.
Removes the smallest element (i.e., the least frequent).
Example Execution (k = 2)
Step 1: Initial Counter:

plaintext
Copy
Edit
{1: 3, 2: 2, 3: 1}
Step 2: Heap Operations:

plaintext
Copy
Edit
Heap = [(3,1)]   # Add 1 (frequency=3)
Heap = [(2,2), (3,1)]  # Add 2 (frequency=2)
Heap = [(2,2), (3,1)]  # Try to add 3 (frequency=1), but it's discarded (heappushpop)
The heap stores only the k most frequent elements.
3. Extract and Return the Top k Frequent Elements
python
Copy
Edit
return [i[1] for i in heap]
Extracts the numbers from heap tuples (frequency, number).
The result is not necessarily sorted.
Final Output:
python
Copy
Edit
[1, 2]  # These are the two most frequent numbers


```




```py title="Solution.py"
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key = lambda x : x[0])

        merge = []

        for interval in intervals:
            if not merge or merge[-1][1] < interval[0]:
                merge.append(interval)
            else:
                merge[-1] = [merge[-1][0], max(merge[-1][1],interval[1])]
        return merge


  def topKFrequent_sort(nums: List[int], k: int) -> List[int]:
    counter = Counter(nums)
    return [num for num, freq in sorted(counter.items(), key=lambda x: -x[1])[:k]]


```


```md title="Rundown"


```
