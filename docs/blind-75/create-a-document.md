---
sidebar_position: 2
---

# Two Sum

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
Two Sum
Insight: Efficiently find two numbers that sum up to a target using a HashMap.

Approach:

Create a HashMap to store numbers and their indices.
For each number nums[i]:
Check if target - nums[i] exists in the map.
If found, return indices [map[complement], i].
Otherwise, add nums[i] to the map.
Time Complexity: O(n)---

# Hello

This is my **first Docusaurus document**!
```




```py title="TwoSum.py"
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}

        for i in range(nums):
            differenece = target - i

            if diffrence in hashMap:
                return [nums[differnce], i]
            hashMap.add(i)
        
```
