---
sidebar_position: 2
---

# Valid Parenthesis


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Question
    Given a string s containing just the characters '(', ')', '{', '}',
    '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

    Constraints:
        - 1 <= s.length <= 104
        - s consists of parentheses only '()[]{}'.

Thoughts Before Coding
    - For each of the closing bracket 'c'
        - We will want to check the previous opening bracket 'b'
        - If 'c' is a matching closing bracket with 'b'
            - Then we will need to remove 'b' from consideration
        - This will allow the next closing bracket 'd' to be compared
          with the previous opening bracket 'a'
    - We can keep track of the previous opening brackets inside a stack
        - Then for each of the closing brackets
            - We will check if the closing bracket matches the opening
              bracket that is on the top of the stack
            - If the brackets/parentheses do match
                - Then we will remove the opening bracket from the stack

Answer
    - Create a 'stack' to keep track of opening parentheses
    - Iterate through the indices of 's', denoted as 'i'
        - Retrieve the current character 'c' at index 'i'
        - If 'c' is an opening bracket
            - Push 'c' into the 'stack'
        - Else
            - If 'stack' is empty OR 'stack.pop()' (opening bracket) does
              not match 'c'
                - Return false
    - Return true only if 'stack' is empty, which means all
      of the opening brackets are paired up with closing brackets

What is the Time and Space Complexity?
    - Time Complexity = O(n), where n is the length of the input string
        - O(n), visit each index once
    - Space Complexity = O(n), where n is the length of the input string
         - O(n), stack
```




```py title="Solution.py"
def is_valid(s):
    stack = []
    bracket_map = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in bracket_map.values():  # If it's an opening bracket
            stack.append(char)
        else:  # If it's a closing bracket
            if not stack or stack.pop() != bracket_map[char]:
                return False

    return not stack  # Stack should be empty if all brackets are matched

# Example usage:
print(is_valid("()[]{}"))  # Output: True
print(is_valid("(]"))      # Output: False
print(is_valid("([)]"))    # Output: False
print(is_valid("{[]}"))    # Output: True



        
```


```md title="Rundown"
Approach Breakdown (Your Thoughts in Code)
Use a Stack:

Maintain a stack to track opening brackets.
Iterate Over the String:

If the character is an opening bracket, push it onto the stack.
If it is a closing bracket:
Check if the stack is empty (meaning there's no matching opening bracket).
Pop the last opening bracket from the stack and check if it matches the current closing bracket.
If it doesn’t match, return False.
Final Validation:

The stack must be empty at the end. If it's not empty, it means some brackets were not closed properly.
Example Walkthrough
Example 1: "([{}])"
plaintext
Copy
Edit
Stack: []

1. '(' → Push → Stack: ['(']
2. '[' → Push → Stack: ['(', '[']
3. '{' → Push → Stack: ['(', '[', '{']
4. '}' → Matches '{' → Pop → Stack: ['(', '[']
5. ']' → Matches '[' → Pop → Stack: ['(']
6. ')' → Matches '(' → Pop → Stack: []

Result: Stack is empty → Valid ✅
Example 2: "([)]"
plaintext
Copy
Edit
Stack: []

1. '(' → Push → Stack: ['(']
2. '[' → Push → Stack: ['(', '[']
3. ')' → Doesn't match '[' → Invalid ❌

Result: False
Time & Space Complexity
Time Complexity: 

n is the length of s.
Each character is processed once.
Space Complexity: 

O(n) in the worst case (all opening brackets stored in the stack).
```
