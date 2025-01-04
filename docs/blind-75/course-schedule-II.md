---
sidebar_position: 2
---

# Course Schedule II


Problem Link [https://leetcode.com/problems/course-schedule-ii/](https://leetcode.com/problems/course-schedule-ii/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Course Schedule II
Insight: Perform topological sorting with a DFS to detect cycles and determine order.

Approach:

Build a graph with courses as nodes and prerequisites as edges.
Use a DFS function to check for cycles:
Mark nodes as "visiting" during traversal.
If a cycle is detected, return false.
Collect nodes in topological order.
Time Complexity: 

O(V+E)


```




```py title="Solution.py"
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        order = []
        g = defaultdict(list)

        #make the graph
        for a,b in prerequisites:
            g[a].append(b)
        
        UNVISITED, VISITING, VISITED = 0, 1, 2
        states = [UNVISITED] * numCourses
        def dfs(i):
            #Base cases :
            if states[i] == VISITING:
                return False
            elif states[i] == VISITED:
                return True
            states[i] = VISITING
            
            #now visit all the neighbours
            for neigbours in g[i]:
                if not dfs(neigbours):
                    return False

            #Didn't return true that means we found courses to return 
            states[i] = VISITED
            order.append(i)
            return True

        for i in range(numCourses):
            if not dfs(i):
                return []
        
        return order



        
```


```md title="Rundown"
Execution Trace Example
Input:
Courses: 4, Prerequisites: [[1, 0], [2, 1], [3, 2]]
Process:
Build Graph:

0: [1]
1: [2]
2: [3]
DFS Traversal:

Start with course 0:
Mark 0 as visiting. Explore 1.
Mark 1 as visiting. Explore 2.
Mark 2 as visiting. Explore 3.
Mark 3 as visited. Add to order: [3].
Backtrack: Mark 2 as visited. Add to order: [3, 2].
Backtrack: Mark 1 as visited. Add to order: [3, 2, 1].
Backtrack: Mark 0 as visited. Add to order: [3, 2, 1, 0].
Result:
Topological order: [0, 1, 2, 3]
```
