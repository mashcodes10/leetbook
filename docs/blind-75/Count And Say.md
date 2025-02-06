---
sidebar_position: 2
---

# Count And Say


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Question
    The count-and-say sequence is a sequence of digit strings defined by
    the recursive formula:
        - countAndSay(1) = "1"
        - countAndSay(n) is the way you would "say" the digit string
          from countAndSay(n-1), which is then converted into a different
          digit string.

    To determine how you "say" a digit string, split it into the minimal
    number of groups so that each group is a contiguous section all of
    the same character. Then for each group, say the number of characters,
    then say the character. To convert the saying into a digit string,
    replace the counts with a number and concatenate every saying.

Thoughts Before Coding
    - we will implement a recursive approach
        - For each of the number 'n'
            - We will first want to find the count and say (prev) for 'n - 1'
        - Then for each of the characters 'c' inside the 'prev'
            - We will want to keep track of the consecutive frequency of
              'c' inside 'prev'
            - Then if we are at the end of the string or the next character
              does not equal to 'c'
                - We will need to append 'count' and 'c' to our resulting
                  string for our current count and say for 'n'

Answer
    - Implement a recursive approach
        - What parameters do we need?
            - n, the current number we are processing
        - What is the base case?
            - If 'n' is equal to 1
                - Return "1"
        - In each of the recursive call
            - Recursively find the 'prev' string for 'n - 1'
                - n => n - 1
            - Create a StringBuilder 'cur' to keep track of the
              count and say for 'n'
            - Create a variable 'count' to keep track of the frequency
              of the current character
            - Iterate through the indices of 'prev', denoted as 'i'
                - Increment 'count'
                - If 'i' is at the last index OR the character at 'i + 1' does
                  not equal to the current character at 'i'
                    - Append 'count' to 'cur'
                    - Append the current character to 'cur'
                    - Reset 'count' to 0
            - Return a string representation of 'cur'

What is the Time and Space Complexity?
    - Time Complexity = O(n * k), where n is the input value and k is
      the average length of each string
        - O(n * k), there are up to 'n' recursive calls, and we iterate
          through 'k' indices each
    - Space Complexity = O(n) + O(k) = O(n + k), where n is the input value and k is
        the average length of each string
            - O(n), recursive call stack memory
            - O(k), the generated strings in each recursive call

```




```py title="Solution.py"
def count_and_say(n):
    # Base case
    if n == 1:
        return "1"

    # Recursive call to get the previous sequence
    prev = count_and_say(n - 1)
    cur = []  # StringBuilder equivalent
    count = 0  # Count consecutive characters

    # Iterate through previous sequence
    for i in range(len(prev)):
        count += 1  # Increment count for current character
        
        # If the next character is different or we are at the last character
        if i == len(prev) - 1 or prev[i] != prev[i + 1]:
            cur.append(str(count))  # Append count
            cur.append(prev[i])  # Append character
            count = 0  # Reset count

    return "".join(cur)  # Convert list to string

# Example usage:
print(count_and_say(1))  # Output: "1"
print(count_and_say(4))  # Output: "1211"
print(count_and_say(5))  # Output: "111221"



        
```


```md title="Rundown"
Approach Breakdown (Your Thoughts in Code)
Base Case:

If n == 1, return "1".
Recursive Call:

Get prev = count_and_say(n - 1).
Build the Next Sequence:

Initialize an empty list cur (StringBuilder equivalent).
Use a variable count to track the frequency of consecutive digits.
Iterate Through prev:

If the next character is different or end of string:
Append count and the current character to cur.
Reset count to 0.
Return the Final String:

Convert the list to a string using "".join(cur).
Example Walkthrough
Example: count_and_say(4)
plaintext
Copy
Edit
1. count_and_say(1) → "1"
2. count_and_say(2) → "11"  (one "1")
3. count_and_say(3) → "21"  (two "1s")
4. count_and_say(4) → "1211"  (one "2", one "1")
Step-by-Step for n=4
plaintext
Copy
Edit
Previous sequence: "21"
- '2' appears once → Append "12"
- '1' appears once → Append "11"

Final output: "1211"
Time & Space Complexity
Time Complexity: 

O(n×k)

O(n) recursive calls, each iterating through a string of length k.
Space Complexity: 

O(n+k)

O(n) recursive calls on stack.

O(k) space for generated strings.

```
