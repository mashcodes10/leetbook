---
sidebar_position: 2
---

# Time Based Key and Value Store


Problem Link [https://leetcode.com/problems/time-based-key-value-store/](https://leetcode.com/problems/time-based-key-value-store/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem: Time-Based Key-Value Store
Objective: Design a data structure that:
Stores key-value pairs along with timestamps.
Retrieves the value of a key at a specific timestamp or the most recent value before the given timestamp.
Key Operations:
set(key, value, timestamp): Store a key-value pair with a timestamp.
get(key, timestamp): Retrieve the value of the key at the given timestamp or the most recent value before it.
Insight
Key-Value Mapping: Use a dictionary (store) where:
The key is the string key.
The value is a list of [value, timestamp] pairs.
Binary Search for Efficiency: Since timestamps are stored in sorted order, use binary search to quickly find the closest timestamp less than or equal to the queried timestamp.

Approach
Data Structure Design:

Dictionary (store):
Keys: Strings representing the keys.
Values: Lists of [value, timestamp] pairs, sorted by timestamp.
Setting a Value (set):

If the key is not in store, initialize it with an empty list.
Append the [value, timestamp] pair to the list.
Getting a Value (get):

Use binary search to find the largest timestamp less than or equal to the queried timestamp:
Initialize two pointers (l and r) for the search.
Compute the mid-point (m) and check:
If values[m][1] <= timestamp, update the result and search the right half.
Otherwise, search the left half.
Return the result, which is either the closest value or an empty string if no valid timestamp exists.

```




```py title="Solution.py"
class TimeMap:

    def __init__(self):
        self.store = {} # key :

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.store:
            self.store[key] = [] # create empty list
        self.store[key].append([value, timestamp])


    def get(self, key: str, timestamp: int) -> str:
        res = ""
        values = self.store.get(key,[])

        #binary search on the values
        l,r = 0, len(values) - 1
        while l <= r:
            m = (l + r) // 2
            if values[m][1] <= timestamp:
                res = values[m][0]
                l = m + 1
            else:
                r = m - 1
        return res


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
        
```


```md title="Rundown"
Example Operations
Operation: set("foo", "bar", 1)
Input:
Key: "foo", Value: "bar", Timestamp: 1
Process:
"foo" is not in store. Initialize store["foo"] = [].
Append [value="bar", timestamp=1] to store["foo"].
Result:
lua
Copy code
store = {
  "foo": [["bar", 1]]
}
Operation: set("foo", "baz", 3)
Input:
Key: "foo", Value: "baz", Timestamp: 3
Process:
Append [value="baz", timestamp=3] to store["foo"].
Result:
lua
Copy code
store = {
  "foo": [["bar", 1], ["baz", 3]]
}
Operation: get("foo", 2)
Input:
Key: "foo", Timestamp: 2
Process:
Retrieve store["foo"] = [["bar", 1], ["baz", 3]].
Perform binary search:
Initial pointers: l=0, r=1
Midpoint m=0: Check values[0][1]=1. Since 1 <= 2, update res="bar" and set l=1.
End of loop: l=1, r=1. Return res="bar".
Result: "bar"
Operation: get("foo", 3)
Input:
Key: "foo", Timestamp: 3
Process:
Retrieve store["foo"] = [["bar", 1], ["baz", 3]].
Perform binary search:
Initial pointers: l=0, r=1
Midpoint m=0: Check values[0][1]=1. Since 1 <= 3, update res="bar" and set l=1.
Midpoint m=1: Check values[1][1]=3. Since 3 <= 3, update res="baz" and set l=2.
End of loop: l=2, r=1. Return res="baz".
Result: "baz"
Operation: get("foo", 0)
Input:
Key: "foo", Timestamp: 0
Process:
Retrieve store["foo"] = [["bar", 1], ["baz", 3]].
Perform binary search:
Initial pointers: l=0, r=1
Midpoint m=0: Check values[0][1]=1. Since 1 > 0, set r=-1.
End of loop: l=0, r=-1. Return res="".
Result: ""
Edge Cases
No Entries for Key:

get("bar", 2) → Key "bar" does not exist in store. Return "".
Timestamp Smaller than All Stored Timestamps:

If queried timestamp is smaller than the smallest timestamp for the key, return "".
Exact Match for Timestamp:

Binary search directly finds the timestamp.
Complexity Analysis
Time Complexity:
set(key, value, timestamp):

O(1) to append to the list.
get(key, timestamp):

O(logN) for binary search, where 
N is the number of entries for the key.
Space Complexity:

O(K+V), where K is the number of unique keys, and  V is the total number of key-value-timestamp pairs stored.
Comparison with Alternative Solutions
1. Linear Search:
Approach: Perform a linear scan through the list of [value, timestamp] pairs for the queried key.
Advantages: Simple to implement.
Disadvantages: Inefficient for large datasets (

O(N) per query).
2. Balanced Binary Search Tree:
Approach: Use a tree-like structure for each key to store [value, timestamp] pairs.
Advantages: Efficient lookups (

O(logN)).
Disadvantages: Higher implementation complexity and space usage compared to a simple list and binary search.
3. Current Solution (List + Binary Search):
Approach: Store sorted [value, timestamp] pairs in a list and use binary search for efficient lookups.
Advantages:
Simple to implement.
Efficient for lookups (O(logN)) and inserts (O(1)).
Disadvantages:
Appending timestamps assumes they are always added in increasing order.
```
