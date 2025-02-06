---
sidebar_position: 2
---

# Longest Common Prefix


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Question
    Write a function to find the longest common prefix string amongst an
    array of strings.

    If there is no common prefix, return an empty string "".

    Constraints:
        - 0 <= strs.length <= 200
        - 0 <= strs[i].length <= 200
        - strs[i] consists of only lower-case English letters.

Thoughts Before Coding
    - Initially we have the longest common prefix 'length', which is equal
      to the length of the first word
        - We will be comparing the first word with every other word
        - But, we will only compare up the index up to 'length'
            - This is because there is no point in checking for character
              after this index
    - ["flower","flow","flight"]
        - Initially we have a length of '6'
            - We will only compare the indices from '0 -> 5' (0th index)
            - 'flower' with 'flow'
                - Since 'flow' has a shorter length than '6'
                    - We will need to update '6' to '4'
                    - We will compare the characters from 0 -> 3
        - Current length is equal to 4
            - 'flow' 'flig'
            - We will need to update our 'length' to 2
        - Then we can generate a substring from indices 0 -> 1

Answer
    - Lets validate the input parameter first
        - if 'strs' is empty
            - return empty string
    - Create a variable 'length' to keep track of the current longest common
      prefix length, initially 'strs[0].length()'
    - Iterate through the indices from 1 -> strs.length - 1, denoted as 'i'
        - Update 'length' to 'strs[i].length()' if the current string is
          shorter
        - Iterate through the characters from 0 -> length - 1, denoted as 'j'
            - Retrieve the character 'c' and 'd' from 'strs[0]' and 'strs[i]'
            - If 'c' does not equal to 'd'
                - Update 'length' to 'j'
                - break out of loop
    - Return a substring of 'strs[0]' from '0 -> length - 1'

What is the Time and Space Complexity?
    - Time Complexity = O(n * k) + O(k) = O(n * k), where n is the number of
        strings and k is the number of characters associated with each string
        - O(n * k), compare the first string with every other string
        - O(k), generate result substring
    - Space Complexity = O(k), where k is the number of characters
        associated with each string
        - O(k), resulting substring


```




```py title="Solution.py"
def longest_common_prefix(strs):
    if not strs:
        return ""

    length = len(strs[0])

    for i in range(1, len(strs)):
        length = min(length, len(strs[i]))

        for j in range(length):
            if strs[0][j] != strs[i][j]:
                length = j
                break

    return strs[0][:length]

# Example usage:
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings))  # Output: "fl"


        
```


```md title="Rundown"
Visual Representation
Let's take an example:

plaintext
Copy
Edit
Input: ["flower", "flow", "flight"]

Step 1: Start with "flower"
Length = 6

Step 2: Compare "flower" with "flow"
- "flow" has length 4 → update `length = 4`
- Compare characters: "f" == "f", "l" == "l", "o" == "o", "w" == "w"
- No mismatch found within `length = 4`

Step 3: Compare "flow" with "flight"
- Compare characters up to `length = 4`
- "f" == "f", "l" == "l", "o" != "i" → mismatch found at index 2
- Update `length = 2`

Final result: substring from index 0 to 1 → "fl"
Time & Space Complexity Analysis
Time Complexity: 

k is the maximum length of a string.
We iterate through all the strings and compare characters up to length, leading to worst case 

O(n×k).
Space Complexity: 

O(k)
We store the resulting prefix of maximum length 
𝑘
k, so auxiliary space is minimal.

```
