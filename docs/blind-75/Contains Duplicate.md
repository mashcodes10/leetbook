---
sidebar_position: 2
---

# Contains Duplicate


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Question
    2. Sorting Approach
If we sort the array, duplicate elements will be adjacent.
Time Complexity: 

O(nlogn) (due to sorting)
Space Complexity: 

O(1) (if sorting in place)

Alternative Approach:
If we only need to track duplicates, we can use two sets.
Time Complexity: 

O(n)
Space Complexity: 

O(n) (for storing duplicates)
```




```py title="Solution.py"
def containsDuplicate(nums):
    nums.sort()
    for i in range(len(nums) - 1):
        if nums[i] == nums[i + 1]:
            return True
    return False


def findDuplicates(nums):
    seen = set()
    duplicates = set()

    for num in nums:
        if num in seen:
            duplicates.add(num)
        seen.add(num)

    return list(duplicates)


from collections import Counter

def findUniqueNumbers(nums):
    count = Counter(nums)
    return [num for num, freq in count.items() if freq == 1]


from collections import Counter

def findUniqueChars(s):
    count = Counter(s)
    return [char for char, freq in count.items() if freq == 1]


```


```md title="Rundown"

```
