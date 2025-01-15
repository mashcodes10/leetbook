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
Approach and Insight
Problem: Basic Calculator
Objective: Evaluate a mathematical expression string containing integers, +, -, (, ), and spaces, returning the result.
Key Operations:
Evaluate the expression left-to-right, respecting operator precedence and parentheses.
Insight
Simulate Evaluation:
Use a stack to handle parentheses by storing the current state (output and sign) before diving into a sub-expression.
For non-parenthetical expressions, evaluate using the current sign and cumulative sum.
Iterative Parsing:
Traverse the string character by character.
Handle digits, operators, and parentheses based on the current state.
Approach
Initialization:

output: Stores the cumulative sum.
cur: Stores the current number being parsed.
sign: Tracks the sign of the current number (+1 for positive, -1 for negative).
stack: Used to save the state when encountering parentheses.
Character Processing:

Digits (0-9):
Build the current number (cur = cur * 10 + int(c)).
Operators (+ or -):
Add the current number (with its sign) to the cumulative sum.
Reset cur to 0 and update sign based on the operator.
Left Parenthesis (():
Push the current state (output, sign) onto the stack.
Reset output and sign for the sub-expression.
Right Parenthesis ()):
Add the current number to the cumulative sum.
Multiply the result by the sign from the stack and add the saved output from the stack.
Reset cur to 0.
Spaces:
Ignore.
Final Number Addition:

After processing all characters, add any remaining number to the cumulative sum.

```




```py title="Solution.py"
class Solution:
    def calculate(self, s: str) -> int:
        output, cur, sign, stack = 0, 0, 1, []

        for c in s:
            # Digit
            if c.isdigit():
                cur = cur * 10 + int(c)
            # "+/-"
            elif c in "+-":
                # Add current number to the output
                output += (cur * sign)
                # Reset the number
                cur = 0
                # Update the sign
                sign = 1 if c == "+" else -1
            # "("
            elif c == "(":
                # Save current output and sign
                stack.append(output)
                stack.append(sign)
                # Reset output and sign for the sub-expression
                output = 0
                sign = 1
            # ")"
            elif c == ")":
                # Add the final number inside the parentheses
                output += (cur * sign)
                # Multiply the result by the sign from the stack
                output *= stack.pop()
                # Add the saved output from the stack
                output += stack.pop()
                # Reset the number
                cur = 0
        
        # Add any remaining number to the output
        output += (cur * sign)

        return output



        
```


```md title="Rundown"
Visual Explanation
Example Input
Input:

makefile
Copy code
s = "1 + (2 - (3 + 4))"
Execution
Initialization:

arduino
Copy code
output = 0, cur = 0, sign = 1, stack = []
Character Traversal:

'1':
Build cur = 1.
'+':
Add cur * sign to output: output = 1.
Reset cur = 0, set sign = 1.
'(':
Push output and sign onto the stack: stack = [1, 1].
Reset output = 0, sign = 1.
'2':
Build cur = 2.
'-':
Add cur * sign to output: output = 2.
Reset cur = 0, set sign = -1.
'(':
Push output and sign onto the stack: stack = [1, 1, 2, -1].
Reset output = 0, sign = 1.
'3':
Build cur = 3.
'+':
Add cur * sign to output: output = 3.
Reset cur = 0, set sign = 1.
'4':
Build cur = 4.
) (End of inner parentheses):
Add cur * sign to output: output = 7.
Multiply output by stack.pop() (-1): output = -7.
Add stack.pop() (2): output = -5.
Reset cur = 0.
) (End of outer parentheses):
Add cur * sign to output: output = -5.
Multiply output by stack.pop() (1): output = -5.
Add stack.pop() (1): output = -4.
Reset cur = 0.
Final Step:

Add any remaining number (cur * sign) to output.
Result
Output: -4

Complexity Analysis
Time Complexity

O(N), where 
𝑁
N is the length of the string:
Each character is processed once.
Space Complexity

O(N), where 
𝑁
N is the depth of nested parentheses:
Stack stores states for each parenthesis.
Edge Cases
Empty String:

Input: ""
Output: 0.
Single Number:

Input: "42"
Output: 42.
No Parentheses:

Input: "1 + 2 - 3"
Output: 0.
Multiple Nested Parentheses:

Input: "1 + (2 - (3 - (4 + 5)))"
Output: 5.

```
