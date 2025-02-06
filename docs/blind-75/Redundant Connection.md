---
sidebar_position: 2
---

# Redundant Connections


Problem Link [https://leetcode.com/problems/binary-tree-level-order-traversal/description/](https://leetcode.com/problems/binary-tree-level-order-traversal/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Explanation of Code
Union-Find Class (UnionFind)

find(x): Uses path compression for efficiency.
union(x, y): Uses union by rank to merge smaller trees under larger ones.
If union(x, y) returns False, the edge [x, y] is redundant.
Find Redundant Edge

Iterate over edges, applying union().
If union() returns False, return that edge (since it forms a cycle).
```




```py title="Solution.py"
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n + 1))  # Parent array
        self.rank = [1] * (n + 1)  # Rank array (for path compression)
    
    def find(self, x):
        """Find with path compression."""
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        """Union by rank. Returns False if x, y are already connected."""
        root_x = self.find(x)
        root_y = self.find(y)
        
        if root_x == root_y:
            return False  # Cycle detected
        
        if self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        elif self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1
        
        return True  # No cycle, union successful

def findRedundantConnection(edges):
    """
    Finds and returns the redundant edge that forms a cycle in the graph.
    """
    n = len(edges)
    uf = UnionFind(n)
    
    for u, v in edges:
        if not uf.union(u, v):
            return [u, v]  # The edge that forms a cycle
    
    return []  # Should never reach here

# Example Usage:
edges1 = [[1, 2], [1, 3], [2, 3]]
print(findRedundantConnection(edges1))  # Output: [2, 3]

edges2 = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
print(findRedundantConnection(edges2))  # Output: [1, 4]
        

        
```


```md title="Rundown"
Example Outputs
Example 1
python
Copy
Edit
edges = [[1, 2], [1, 3], [2, 3]]
print(findRedundantConnection(edges))
Output: [2, 3]

The edge [2,3] creates a cycle.
Example 2
python
Copy
Edit
edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
print(findRedundantConnection(edges))
Output: [1, 4]

The edge [1,4] creates a cycle.
Final Thoughts
Uses Union-Find efficiently (O(N) time complexity).
Detects the first redundant edge that forms a cycle.
Handles any arbitrary tree with an extra edge.



```
