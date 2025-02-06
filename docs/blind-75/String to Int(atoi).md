---
sidebar_position: 2
---

# String to integer 


Problem Link [https://leetcode.com/problems/binary-tree-level-order-traversal/description/](https://leetcode.com/problems/binary-tree-level-order-traversal/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem: Implement atoi (String to Integer Conversion)
The String to Integer (atoi) problem requires implementing a function that converts a string to an integer, mimicking the behavior of atoi in C/C++.

Understanding the Problem
Given a string s, convert it into a 32-bit signed integer (int type). The conversion follows these rules:

✅ Trimming: Ignore leading whitespace.
✅ Sign Handling: Detect an optional '+' or '-' sign.
✅ Digit Extraction: Convert valid digits (0-9) into an integer.
✅ Handling Non-Numeric Characters: Stop processing at the first non-digit character.
✅ Bounds Checking: Clamp the result between -2³¹ and 2³¹ - 1 ([-2147483648, 2147483647]).

Approach
Trim leading whitespace.
Check for a sign (+ or -).
Extract valid digits and convert them to an integer.
Handle integer overflow/underflow.

```




```py title="Solution.py"
def myAtoi(s: str) -> int:
    """
    Converts a string to an integer following atoi rules.
    """
    s = s.lstrip()  # Step 1: Remove leading whitespace
    
    if not s:
        return 0  # Return 0 if string is empty after trimming
    
    # Step 2: Check for sign
    sign = 1  # Default positive
    if s[0] == '-':
        sign = -1
        s = s[1:]
    elif s[0] == '+':
        s = s[1:]
    
    # Step 3: Convert digits
    num = 0
    for char in s:
        if char.isdigit():
            num = num * 10 + int(char)
        else:
            break  # Stop at first non-digit character
    
    num *= sign  # Apply sign
    
    # Step 4: Handle integer limits (-2^31 to 2^31 - 1)
    int_min, int_max = -2**31, 2**31 - 1
    if num < int_min:
        return int_min
    if num > int_max:
        return int_max
    
    return num

# Example Usage:
print(myAtoi("42"))  # Output: 42
print(myAtoi("   -42"))  # Output: -42
print(myAtoi("4193 with words"))  # Output: 4193
print(myAtoi("words and 987"))  # Output: 0
print(myAtoi("-91283472332"))  # Output: -2147483648 (clamped)
        

        
```


```md title="Rundown"
Explanation of Code
Step 1: Trim Leading Whitespace
python
Copy
Edit
s = s.lstrip()  # Remove leading spaces
if not s:
    return 0  # If string is empty, return 0
This ensures we ignore any spaces at the beginning.
If the string is empty after trimming, return 0.
Step 2: Handle the Sign
python
Copy
Edit
sign = 1  # Default is positive
if s[0] == '-':
    sign = -1
    s = s[1:]  # Remove sign from the string
elif s[0] == '+':
    s = s[1:]  # Remove '+' sign
If the first character is '-', store sign = -1.
If it is '+', keep sign = 1.
Remove the sign from the string.
Step 3: Extract Digits
python
Copy
Edit
num = 0
for char in s:
    if char.isdigit():
        num = num * 10 + int(char)
    else:
        break  # Stop at first non-numeric character
Read only numeric characters (0-9).
Convert them into an integer.
Stop processing as soon as a non-digit character appears.
Step 4: Apply Sign and Handle Integer Limits
python
Copy
Edit
num *= sign  # Apply sign
int_min, int_max = -2**31, 2**31 - 1
if num < int_min:
    return int_min
if num > int_max:
    return int_max
Multiply num by sign to get the final integer.
If the number exceeds 2³¹ - 1 (2147483647), return 2147483647.
If it is below -2³¹ (-2147483648), return -2147483648.
Time Complexity Analysis
Step	Complexity
Trimming Whitespace	O(N) (in worst case, traversing the entire string)
Checking Sign	O(1)
Parsing Digits	O(N) (iterating through numeric characters)
Returning the Final Integer	O(1)
✅ Overall Complexity: O(N) (where N is the length of the input string).

Example Outputs
python
Copy
Edit
print(myAtoi("42"))  
# Output: 42

print(myAtoi("   -42"))  
# Output: -42

print(myAtoi("4193 with words"))  
# Output: 4193

print(myAtoi("words and 987"))  
# Output: 0

print(myAtoi("-91283472332"))  
# Output: -2147483648 (clamped to min int)
Final Thoughts
Handles whitespace, signs, and invalid inputs gracefully.
Prevents integer overflow using clamping.
Runs in O(N) time complexity, making it efficient.
🚀 This implementation accurately mimics the behavior of C's atoi() function in Python!

```
