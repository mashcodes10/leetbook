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
Key Insight:
To find the longest subarray where:

max(subarray)−min(subarray)≤limit
We need to:

Keep track of the maximum and minimum elements in the current window

Use two monotonic deques to efficiently track:

maxDeque: stores decreasing values (for current max)

minDeque: stores increasing values (for current min)




```




```py title="Solution.py"
from collections import deque

class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        maxDeque = deque()
        minDeque = deque()
        l = 0
        max_len = 0

        for r in range(len(nums)):
            # Maintain maxDeque (descending)
            while maxDeque and nums[r] > maxDeque[-1]:
                maxDeque.pop()
            maxDeque.append(nums[r])

            # Maintain minDeque (ascending)
            while minDeque and nums[r] < minDeque[-1]:
                minDeque.pop()
            minDeque.append(nums[r])

            # Check window validity
            while maxDeque[0] - minDeque[0] > limit:
                if maxDeque[0] == nums[l]:
                    maxDeque.popleft()
                if minDeque[0] == nums[l]:
                    minDeque.popleft()
                l += 1  # Shrink window

            max_len = max(max_len, r - l + 1)

        return max_len

        
```


```md title="Rundown"
      Step-by-step:
Expand right pointer r.

Update deques to reflect the current window’s max and min.

If max - min > limit, shrink the window from the left (l).

Keep updating max_len = max(max_len, r - l + 1).


Input:
python
Copy
Edit
nums = [8, 2, 4, 7]
limit = 4
Execution:
Start with l=0, r=0, window = [8], max = 8, min = 8 → ✅

r=1, window = [8, 2], max = 8, min = 2 → diff = 6 > 4 → ❌ shrink from left

Remove 8 → window = [2]

r=2, window = [2, 4], max = 4, min = 2 → ✅

r=3, window = [2, 4, 7], max = 7, min = 2 → diff = 5 > 4 → ❌ shrink again

Final longest window = [2, 4] → length = 2
```
