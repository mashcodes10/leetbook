---
sidebar_position: 2
---

# LRU Chache


Problem Link [https://leetcode.com/problems/lru-cache/description/](https://leetcode.com/problems/lru-cache/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
LRU Cache
Insight: Combine a doubly linked list with a hash map for efficient operations.

Approach:

Use a hash map to store key-to-node mappings.
Use a doubly linked list to manage LRU order:
On access, move the node to the front.
On capacity breach, remove the least recently used node (tail).
Time Complexity: 

O(1)


```




```py title="Solution.py"
class Node:
    def __init__(self, key,val):
        self.key, self.val = key, val
         
        self.prev = self.next = None
class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {} # maps key to values 
        self.left, self.right = Node(0,0), Node(0,0)
        self.left.next, self.right.prev = self.right, self.left
    
    def remove(self, node):
        prev, nxt = node.prev, node.next
        prev.next, nxt.prev = nxt, prev
    def insert(self, node):
        #we get the prev and nxt by using our rightmost pointer
        prev, nxt = self.right.prev, self.right
        prev.next = nxt.prev = node
        node.prev, node.next = prev, nxt 
    def get(self, key: int) -> int:
        if key in self.cache:
            #We wnat to make it most recently used
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        
        self.cache[key] = Node(key, value)
        self.insert(self.cache[key])

        if len(self.cache) > self.capacity:
            lru = self.left.next
            self.remove(lru)
            del self.cache[lru.key]


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
        
```


```md title="Rundown"
Key Operations
Initialization:

Create a hash map (cache) to store key-node mappings.
Create two dummy nodes (left and right) to represent the boundaries of the DLL.
left points to the least recently used node.
right points to the most recently used node.
Insert Node:

Add a node just before the right dummy node to make it the MRU.
Adjust the prev and next pointers of the involved nodes:
Example:
rust
Copy code
Before: ... <-> nodeA <-> right
After:  ... <-> nodeA <-> newNode <-> right
Remove Node:

Remove a node by linking its prev and next neighbors directly.
Example:
vbnet
Copy code
Before: prev <-> nodeToRemove <-> next
After:  prev <-> next
Get Key (get):

If the key exists:
Remove the node from its current position in the DLL.
Reinsert the node before the right dummy to mark it as MRU.
Return the node’s value.
If the key doesn’t exist, return -1.
Put Key (put):

If the key already exists:
Remove the existing node.
Insert a new node with the key-value pair.
If the cache exceeds its capacity:
Remove the node just after the left dummy (LRU).
Delete its entry from the hash map.
Execution Trace Example
Operations:
python
Copy code
cache = LRUCache(2)  # Capacity = 2
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # Returns 1
cache.put(3, 3)      # Evicts key 2
print(cache.get(2))  # Returns -1 (not found)
cache.put(4, 4)      # Evicts key 1
print(cache.get(1))  # Returns -1 (not found)
print(cache.get(3))  # Returns 3
print(cache.get(4))  # Returns 4
Process:
Initial State:

DLL: left <-> right
cache = {}
put(1, 1) and put(2, 2)

DLL: left <-> (1, 1) <-> (2, 2) <-> right
cache = {1: node1, 2: node2}
get(1)

Move (1, 1) to MRU position.
DLL: left <-> (2, 2) <-> (1, 1) <-> right
cache unchanged.
put(3, 3) (Evicts LRU, key 2)

DLL: left <-> (1, 1) <-> (3, 3) <-> right
cache = {1: node1, 3: node3}
get(2)

Key 2 not found. Return -1.
put(4, 4) (Evicts LRU, key 1)

DLL: left <-> (3, 3) <-> (4, 4) <-> right
cache = {3: node3, 4: node4}
get(3) and get(4)

Both keys exist. Return their values.
Complexity
Time Complexity: 

O(1) for all operations (get, put).
Space Complexity: 

O(capacity) for the cache and DLL.
```
