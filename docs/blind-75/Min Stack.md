---
sidebar_position: 2
---

# Min Stack


Problem Link [https://leetcode.com/problems/min-stack/description/](https://leetcode.com/problems/min-stack/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Min Stack
Insight: Use a secondary stack to keep track of the minimum.

Approach:

Push values onto the main stack.
Push to the min stack only if the value is smaller or equal to the current minimum.
During pop:
Remove from the min stack if the top matches the popped value.
Time Complexity: 

O(1)


```




```py title="Solution.py"
class MinStack:

    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        #our approach is only put the value in the min stack if it is min
        self.stack.append(val)

        if not self.min_stack:
            self.min_stack.append(val)
        elif self.min_stack[-1] < val:
            self.min_stack.append(self.min_stack[-1])
        else:
            self.min_stack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
        
```


```md title="Rundown"
Execution Trace Example
Operations:
Push: push(5), push(2), push(8), push(1)
Get Minimum: getMin()
Pop: pop()
Get Minimum: getMin()
Process:
Initial State:

stack = []
minStack = []
Push 5:

stack = [5]
minStack = [5] (5 is the minimum).
Push 2:

stack = [5, 2]
minStack = [5, 2] (2 is the new minimum).
Push 8:

stack = [5, 2, 8]
minStack = [5, 2] (minimum remains 2).
Push 1:

stack = [5, 2, 8, 1]
minStack = [5, 2, 1] (1 is the new minimum).
Get Minimum:

getMin() = 1 (top of minStack).
Pop:

Pop top of stack: 1.
stack = [5, 2, 8]
Since 
1
=
minStack[-1]
1=minStack[-1], also pop from minStack.
minStack = [5, 2].
Get Minimum:

getMin() = 2 (top of minStack).
Key Intuition
The minStack mirrors the main stack but only updates when the current value is smaller or equal to the current minimum.
By synchronizing the two stacks, we ensure that getMin() is 

O(1).
Complexity
Time Complexity:
All operations (push, pop, top, getMin) are 

O(1).
Space Complexity:

O(n), where 

n is the number of elements pushed onto the stack, as both stacks grow simultaneously.

```
