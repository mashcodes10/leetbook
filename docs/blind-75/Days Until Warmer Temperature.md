---
sidebar_position: 2
---

# Days Until Warmer Temperature


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach:
Use a Stack: Maintain a stack that stores indices of temperatures in decreasing order.
Iterate Through the List:
For each temperature, check if it is warmer than the temperatures stored in the stack.
If it is warmer, pop elements from the stack and update their results with the difference in indices.
Push the current index onto the stack.
Remaining Elements: Any elements left in the stack don't have a warmer day in the future, so they remain 0.
```




```py title="Solution.py"
def dailyTemperatures(temperatures):
    n = len(temperatures)
    answer = [0] * n  # Initialize the result list with zeros
    stack = []  # Stack to store indices
    
    for i, temp in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temp:
            prev_index = stack.pop()
            answer[prev_index] = i - prev_index  # Calculate days until warmer temp
        stack.append(i)  # Push the current index onto the stack

    return answer

# Example Usage:
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
print(dailyTemperatures(temperatures))


def dailyTemperaturesBruteForce(temperatures):
    n = len(temperatures)
    answer = [0] * n  # Initialize result array with zeros
    
    for i in range(n):
        for j in range(i + 1, n):
            if temperatures[j] > temperatures[i]:  # Find the next warmer temperature
                answer[i] = j - i  # Store the difference in indices
                break  # Stop looking further
    
    return answer

# Example Usage:
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
print(dailyTemperaturesBruteForce(temperatures))

        
```


```md title="Rundown"
Brute Force Approach
The brute force method involves checking for the next warmer temperature for each day by scanning all the subsequent days.

Algorithm:
Iterate through each day's temperature (i).
For each day i, check the future days (j > i).
If a warmer temperature is found at j, store j - i in the result array.
Break out of the inner loop once the next warmer temperature is found.
If no warmer temperature is found, store 0.
Return the result array.

```
