---
sidebar_position: 2
---

# Move Zeros


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach: Move Zeroes (Two-Pointer Method)
This problem requires modifying the array in-place while preserving the relative order of non-zero elements and pushing all zeroes to the end.

Approach Breakdown
Two-pointer technique:

Left pointer (l) tracks where the next non-zero element should be placed.
Right pointer (r) scans the array for non-zero elements.
Iterate through the array (r from 0 to n-1).

If nums[r] != 0, swap nums[l] and nums[r].
Move the left pointer (l) forward since a non-zero has been placed correctly.
Zeros naturally get pushed to the right as all non-zero elements shift forward.


```




```py title="Solution.py"
from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l = 0  # Left pointer

        for r in range(len(nums)):  # Right pointer scans the list
            if nums[r] != 0:  # If non-zero found
                nums[l], nums[r] = nums[r], nums[l]  # Swap with left pointer
                l += 1  # Move left pointer forward


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        count = 0  # Count of non-zero elements
        
        # Move non-zero elements forward
        for num in nums:
            if num != 0:
                nums[count] = num
                count += 1

        # Fill remaining places with zeroes
        for i in range(count, len(nums)):
            nums[i] = 0

```


```md title="Rundown"
Brute Force Approach
The brute force method involves checking for the next warmer temperature for each day by scanning all the subsequent days.

Algorithm:
Iterate through each day's temperature (i).
For each day i, check the future days (j > i).
If a warmer temperature is found at j, store j - i in the result array.
Break out of the inner loop once the next warmer temperature is found.
If no warmer temperature is found, store 0.
Return the result array.

Example Walkthrough
Input:

Copy
Edit
nums = [0, 1, 0, 3, 12]
Final Output:
[1, 3, 12, 0, 0]
All zeros pushed to the end, while non-zero elements preserve relative order.

Visualization of l and r Movement
For nums = [0, 1, 0, 3, 12]:

plaintext
Copy
Edit
Initial:
0  1  0  3 12
↑  ↑
l  r   (r starts scanning)

After first swap:
1  0  0  3 12
   ↑  ↑
   l  r   (l moves forward)

After next swap:
1  3  0  0 12
      ↑  ↑
      l  r   (l moves forward)

After last swap:
1  3 12  0  0
         ↑  ↑
         l  r   (l moves forward)

Final Output:
1  3 12  0  0
l always marks where the next non-zero should be placed.
r scans for non-zeros and swaps when found.
Time & Space Complexity
Time Complexity: 

O(n)
Each element is visited once.
Space Complexity: 

O(1)
In-place modifications, no extra memory used.

Alternative Approach: Count Zeroes & Shift
Count the number of non-zero elements (count).
Overwrite array with non-zero elements (keeping order).
Fill remaining spaces with 0.

```
