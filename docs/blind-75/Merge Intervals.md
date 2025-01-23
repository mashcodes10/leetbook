---
sidebar_position: 2
---

# Basic Calculator


Problem Link [https://leetcode.com/problems/merge-intervals/description/](https://leetcode.com/problems/merge-intervals/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach and Insight
Problem: Merge Intervals
Objective: Given a collection of intervals, merge overlapping intervals and return the resulting list of merged intervals.
Key Operations:
Sort intervals based on their starting points.
Compare each interval with the last merged interval to determine overlap.
Insight
Sorting by Start Time:
Sorting intervals ensures that overlaps can be identified sequentially.
Example: For [[1,3],[2,6],[8,10],[15,18]], sorting produces [[1,3],[2,6],[8,10],[15,18]].
Merge Conditions:
If the current interval does not overlap with the last merged interval, add it to the result.
If the current interval overlaps, merge them by updating the end of the last interval.
Approach
Sort Intervals:

Sort the intervals by their starting points using intervals.sort(key=lambda x: x[0]).
Iterate Through Intervals:

Use a list merge to store the merged intervals.
For each interval:
If merge is empty or the current interval does not overlap with the last merged interval (merge[-1][1] < interval[0]), append it to merge.
If the current interval overlaps, merge it by updating the last interval's end to max(merge[-1][1], interval[1]).
Return Result:

After processing all intervals, return merge.

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

        
```


```md title="Rundown"
Visual Explanation
Example Input
Input:

lua
Copy
Edit
intervals = [[1,3],[2,6],[8,10],[15,18]]
Execution
Sort Intervals:

lua
Copy
Edit
[[1,3], [2,6], [8,10], [15,18]]
Iterate Through Intervals:

Initialize merge = [].

Step 1: Interval [1,3]

merge is empty. Append [1,3] to merge.
merge = [[1,3]].
Step 2: Interval [2,6]

Overlaps with [1,3] (merge[-1][1] = 3, interval[0] = 2).
Merge: Update merge[-1] to [1, max(3,6)] = [1,6].
merge = [[1,6]].
Step 3: Interval [8,10]

Does not overlap with [1,6] (merge[-1][1] = 6, interval[0] = 8).
Append [8,10] to merge.
merge = [[1,6], [8,10]].
Step 4: Interval [15,18]

Does not overlap with [8,10] (merge[-1][1] = 10, interval[0] = 15).
Append [15,18] to merge.
merge = [[1,6], [8,10], [15,18]].
Final Result:

lua
Copy
Edit
[[1,6], [8,10], [15,18]]
Result
Output:

lua
Copy
Edit
[[1,6],[8,10],[15,18]]
Complexity Analysis
Time Complexity
Sorting: 

O(NlogN), where 
𝑁
N is the number of intervals.
Merging: 

O(N), as we iterate through the intervals once.
Total Complexity: 

O(NlogN).

Space Complexity
Sorting requires 

O(1) additional space if done in-place.
The result list merge uses 

O(N) space.
Total Complexity: 

O(N).

Edge Cases
No Overlap:

Input: [[1,2],[3,4],[5,6]]
Output: [[1,2],[3,4],[5,6]] (no merging needed).
All Overlap:

Input: [[1,4],[2,3],[3,6]]
Output: [[1,6]] (all intervals merge into one).
Single Interval:

Input: [[1,2]]
Output: [[1,2]] (only one interval).
Nested Intervals:

Input: [[1,10],[2,6],[3,4]]
Output: [[1,10]] (all intervals are nested within the first).


```
