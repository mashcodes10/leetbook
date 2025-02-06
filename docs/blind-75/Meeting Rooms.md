---
sidebar_position: 2
---

# Meeting Rooms


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Explanation of the Code:
The code is solving the minimum number of meeting rooms required problem. It determines how many rooms are needed to accommodate all meetings without overlap.

Step-by-Step Breakdown:
Class Definition (Not Shown in Code but Referenced)

python
Copy
Edit
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
The Interval class represents a meeting with a start and end time.
Function Definition

python
Copy
Edit
def minMeetingRooms(self, intervals: List[Interval]) -> int:
This function takes a list of Interval objects as input.
Extract Start and End Times

python
Copy
Edit
start = sorted([i.start for i in intervals])
end = sorted([i.end for i in intervals])
The start list stores all meeting start times, sorted in ascending order.
The end list stores all meeting end times, also sorted in ascending order.
Two-Pointer Approach to Count Rooms

python
Copy
Edit
s, e = 0, 0  # Pointers for start and end lists
count = 0  # Active meetings at a given time
result = 0  # Maximum rooms needed
s: Pointer for start times.
e: Pointer for end times.
count: Tracks active meetings at any time.
result: Stores the maximum number of rooms required.
Iterate Through Start Times

python
Copy
Edit
while s < len(intervals):
The loop continues until all start times are processed.
Handling Overlapping Meetings

python
Copy
Edit
if start[s] < end[e]:  # A new meeting starts before the earliest ending one
    s += 1  # Move to the next meeting start time
    count += 1  # Increase room count
If a meeting starts before another meeting ends, a new room is required.
Releasing a Room

python
Copy
Edit
else:  # The earliest meeting ends
    e += 1  # Move the end pointer
    count -= 1  # Free up a room
If the meeting at end[e] finishes before or at the same time as start[s], a room is freed.
Update the Maximum Rooms Needed

python
Copy
Edit
result = max(count, result)
Tracks the highest number of concurrent meetings at any point.
Return Result

python
Copy
Edit
return result
The function returns the maximum number of rooms required.



```




```py title="Solution.py"
"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        start = sorted([i.start for i in intervals])
        end = sorted([i.end for i in intervals])

        s,e = 0,0
        count = 0
        result = 0
        while(s < len(intervals)):
            if(start[s] < end[e]):
                s += 1
                count += 1
            else:
                e += 1
                count -= 1
            result = max(count, result)
        return result        
```


```md title="Rundown"
Example Execution
Input:
python
Copy
Edit
intervals = [Interval(0, 30), Interval(5, 10), Interval(15, 20)]
Step-by-Step Execution:
Extract and Sort Start & End Times:

python
Copy
Edit
start = [0, 5, 15]  
end = [10, 20, 30]
Two-Pointer Execution:

Iteration 1: start[0] = 0 < end[0] = 10 → count = 1, result = 1
Iteration 2: start[1] = 5 < end[0] = 10 → count = 2, result = 2
Iteration 3: start[2] = 15 >= end[0] = 10 → count = 1
Iteration 4: start[2] = 15 < end[1] = 20 → count = 2, result = 2
Iteration 5: start[3] out of bounds → Stop.
Output:
python
Copy
Edit
2
The minimum number of meeting rooms required is 2.

Time Complexity
Sorting: 

O(NlogN)
Iterating through start and end: 

O(N)
Overall: 

O(NlogN)

```
