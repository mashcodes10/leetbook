---
sidebar_position: 2
---

# Reorder Data In Log Files


Problem Link [https://leetcode.com/problems/reorder-data-in-log-files/](https://leetcode.com/problems/reorder-data-in-log-files/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach and Insight
Problem: Reorder Data in Log Files
Objective: Reorder a list of log files so that:
Letter-logs come before digit-logs.
Letter-logs are ordered lexicographically by content, and in case of ties, by identifier.
Digit-logs remain in their original relative order.
Insight
Classification of Logs:

Logs are classified as:
Letter-logs: If the content (after the first space) consists of letters.
Digit-logs: If the content consists of numbers.
Example:
bash
Copy code
"dig1 8 1 5 1" → Digit-log
"let1 art can" → Letter-log
Custom Sorting:

For Letter-logs:
Sort by the content (lexicographically).
If the content is identical, sort by the identifier.
For Digit-logs:
Preserve their original order (stable sorting).

Approach
Separate Logs:

Iterate through the logs and classify them as Letter-logs or Digit-logs.
Sort Letter-logs:

Use a custom sorting function:
Primary key: Log content.
Secondary key: Log identifier.
Combine Results:

Append the sorted Letter-logs followed by the Digit-logs.

```




```py title="Solution.py"
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        letter_logs = []
        digit_logs = []

        for let in logs:
            if let[-1].isdigit():
                digit_logs.append(let)
            else:
                letter_logs.append(let)
        #sort the letter logs alphabetically
        letter_logs.sort(key = lambda x: (x.split()[1:] ,x.split()[0]))
        result = []
        result = letter_logs + digit_logs 
        return result 
```


```md title="Rundown"
isual Explanation
Example Input
Input:

css
Copy code
logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]
Execution
Separate Logs:

Letter-logs: ["let1 art can", "let2 own kit dig", "let3 art zero"]
Digit-logs: ["dig1 8 1 5 1", "dig2 3 6"]
Sort Letter-logs:

Extract content and identifier:
arduino
Copy code
"let1 art can" → Content: "art can", Identifier: "let1"
"let2 own kit dig" → Content: "own kit dig", Identifier: "let2"
"let3 art zero" → Content: "art zero", Identifier: "let3"
Sort by content, then identifier:
Sorted: ["let1 art can", "let3 art zero", "let2 own kit dig"]
Combine Results:

Append the sorted Letter-logs followed by the original Digit-logs:
css
Copy code
["let1 art can", "let3 art zero", "let2 own kit dig", "dig1 8 1 5 1", "dig2 3 6"]
Result
Output:

css
Copy code
["let1 art can", "let3 art zero", "let2 own kit dig", "dig1 8 1 5 1", "dig2 3 6"]
Complexity Analysis
Time Complexity
Separation: 

O(N), where 
N is the number of logs.
Sorting Letter-logs:
Custom sorting involves comparing log content and identifiers.
Sorting complexity: 

O(MlogM), where M is the number of letter-logs.
Combining Results: 

O(N).
Total Complexity: 

O(MlogM+N).

Space Complexity

O(M+D) for storing the separated Letter-logs and Digit-logs, where 
𝑀
M and 
𝐷
D are their respective counts.
Edge Cases
All Letter-logs:

Input: ["let1 abc", "let2 def"]
Output: ["let1 abc", "let2 def"] (sorted lexicographically).
All Digit-logs:

Input: ["dig1 1 2 3", "dig2 3 4 5"]
Output: ["dig1 1 2 3", "dig2 3 4 5"] (original order).
Mixed Logs with Identical Contents:

Input: ["let1 abc", "let2 abc", "dig1 1 2 3"]
Output: ["let1 abc", "let2 abc", "dig1 1 2 3"] (sorted by identifier for ties).
```
