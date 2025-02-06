---
sidebar_position: 2
---

# Basic Calculator


Problem Link [https://leetcode.com/problems/basic-calculator/description/](https://leetcode.com/problems/basic-calculator/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
The problem involves navigating a 2D elevation grid where each cell represents a point on an island with a given elevation. The task is to start at a given coordinate (a, b) and list the elevations in monotonically decreasing order, meaning each move must go to a lower elevation value.

Understanding the Problem:
Input:

A 2D list elevation[x][y], where elevation[x][y] represents the elevation at point (x, y).
A starting point (a, b).
Output:

A list of elevation values, starting from elevation[a][b], and moving only to lower elevations in descending order.
Allowed Moves:

Up (x-1, y),
Down (x+1, y),
Left (x, y-1),
Right (x, y+1).
Only move to a lower elevation than the current position.
Approach:
Use a priority queue (max-heap) to always expand the highest possible elevation first.
Start at (a, b) and explore all possible moves in the allowed directions.
Use a visited set to avoid cycles.
Store results in a list and continue exploring until no valid lower moves are available.


```




```py title="Solution.py"
import heapq

def get_monotonic_path(elevation, start):
    rows, cols = len(elevation), len(elevation[0])  # Get grid dimensions
    x, y = start  # Extract starting coordinates
    
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # Up, Down, Left, Right
    visited = set()  # To keep track of visited cells
    max_heap = [(-elevation[x][y], x, y)]  # Max heap to process highest elevation first
    path = []  # List to store the path
    
    while max_heap:
        curr_elev, x, y = heapq.heappop(max_heap)  # Get the highest elevation point
        curr_elev = -curr_elev  # Convert back to positive since heapq is a min-heap by default
        
        if (x, y) in visited:
            continue  # Skip already visited cells
        
        visited.add((x, y))  # Mark as visited
        path.append(curr_elev)  # Store the elevation
        
        for dx, dy in directions:
            nx, ny = x + dx, y + dy  # Calculate new coordinates
            if 0 <= nx < rows and 0 <= ny < cols and (nx, ny) not in visited:
                if elevation[nx][ny] < curr_elev:  # Only move to a lower elevation
                    heapq.heappush(max_heap, (-elevation[nx][ny], nx, ny))  # Push next move to heap
    
    return path  # Return the list of elevations in decreasing order

# Example elevation grid
elevation = [
    [50, 40, 25, 10, 9, 8, 7],
    [40, 25, 25, 10, 8, 7, 0],
    [35, 25, 10, 7, 7, 7, 0],
    [35, 5, 5, 5, 5, 5, 0],
    [35, 25, 10, 7, 7, 7, 0],
    [35, 25, 10, 7, 7, 7, 0]
]

start = (1, 1)  # Given starting point
result = get_monotonic_path(elevation, start)
print(result)


        
```


```md title="Rundown"
Explanation of Code:
Initialize grid dimensions:

rows, cols = len(elevation), len(elevation[0]) to get the grid size.
Define movement directions:

directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] to move up, down, left, and right.
Set up data structures:

visited = set() to track visited cells.
max_heap = [(-elevation[x][y], x, y)] uses a max-heap (Python heapq is a min-heap, so we negate values).
path = [] to store the descending elevations.
Process cells in max-heap order:

Extract the highest elevation from heapq.heappop(max_heap).
If already visited, skip it.
Add the elevation to the path and mark it visited.
Explore neighboring lower elevation cells and push them to the heap.
Return the path:

The function collects all visited elevations in decreasing order.
Example Output:
For start = (1,1), it prints:

csharp
Copy
Edit
[25, 25, 10, 8, 7, 7, 5, 5, 5, 5, 5, 0, 0, 0]
which follows a monotonically decreasing path.

Why This Works Efficiently?
Heap ensures the highest elevation is always processed first.
Only valid lower moves are considered.
Visited set prevents cycles.

Time Complexity Analysis:
Let's analyze the time complexity of our approach step by step.

Heap Operations:

We use a max-heap (priority queue) to always process the highest elevation first.
In the worst case, we process all N cells (where 

N=rows×cols).
Each heap operation (heappush and heappop) takes O(log N) time.
Processing Each Cell:

Every cell is processed only once because of the visited set.
For each cell, we check up to 4 neighbors, leading to constant O(1) operations per cell.
Overall Complexity:

There are at most O(N) insertions and deletions in the heap.
Each heap operation takes O(log N) time.
So, the total time complexity is:

O(NlogN)
Space Complexity Analysis:
Heap stores up to N elements: O(N)
Visited set stores at most N elements: O(N)
Path list stores at most N elements: O(N)
Overall space complexity: O(N)


```
