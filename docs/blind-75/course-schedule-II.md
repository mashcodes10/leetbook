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

    
    class Solution:
    def getBuildOrder(self, packageName):
        UNVISITED, VISITING, VISITED = 0, 1, 2
        states = {}  # Tracks package states
        order = []   # Stores the final build order

        def dfs(pkg):
            if pkg in states:
                if states[pkg] == VISITING:  # Cycle detected
                    return False
                if states[pkg] == VISITED:  # Already processed
                    return True

            states[pkg] = VISITING  # Mark as in-progress
            
            # Get dependencies dynamically
            for dep in getDependencies(pkg):
                if not dfs(dep):
                    return False  # Cycle detected
            
            states[pkg] = VISITED  # Mark as fully processed
            order.append(pkg)  # Append to build order
            return True

        # Start DFS from the given package
        if not dfs(packageName):
            return []  # Return empty list if cycle detected

        return order  # The order is already topologically sorted

    def getDependencies(packageName):
    dependencies = {
        "A": {"B", "C"},
        "B": {"E"},
        "C": {"D", "E", "F"},
        "D": set(),
        "E": set(),
        "F": set(),
        "G": {"C"}
    }
    return dependencies.get(packageName, set())  # Return empty if no dependencies


from collections import defaultdict

class Solution:
    def getBuildOrder(self, packages, dependencies, target_package):
        g = defaultdict(list)

        # Build the dependency graph
        for pkg, deps in dependencies.items():
            for dep in deps:
                g[pkg].append(dep)

        UNVISITED, VISITING, VISITED = 0, 1, 2
        states = {pkg: UNVISITED for pkg in packages}
        order = []

        def dfs(pkg):
            if states[pkg] == VISITING:  # Cycle detected
                return False
            if states[pkg] == VISITED:  # Already processed
                return True

            states[pkg] = VISITING
            for dep in g[pkg]:
                if not dfs(dep):
                    return False  # Cycle detected in recursion
            
            states[pkg] = VISITED
            order.append(pkg)  # Append to build order after dependencies are processed
            return True

        # Start DFS from the target package
        if not dfs(target_package):
            return []  # Return empty if a cycle is found

        return order  # The order is already in topological order

# Example Usage
dependencies = {
    "A": {"B", "C"},
    "B": {"E"},
    "C": {"D", "E", "F"},
    "D": set(),
    "E": set(),
    "F": set(),
    "G": {"C"}
}

packages = {"A", "B", "C", "D", "E", "F", "G"}
target_package = "A"

solution = Solution()
build_order = solution.getBuildOrder(packages, dependencies, target_package)
print(build_order)  # Example output: ['E', 'B', 'F', 'D', 'C', 'A']

        
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
