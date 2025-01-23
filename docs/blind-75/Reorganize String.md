---
sidebar_position: 2
---

# Reorganize String


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach and Insight
Problem: Reorganize String
Objective: Rearrange the characters in a string such that no two adjacent characters are the same. If it's not possible, return an empty string.
Key Operations:
Use a max-heap to prioritize characters with the highest frequency.
Greedily place the most frequent characters apart by pairing them with other characters.
Insight
Feasibility Check:

If the frequency of the most common character exceeds 
(
len(s)
+
1
)
/
/
2
(len(s)+1)//2, it is impossible to reorganize the string.
Example: "aaabb" can be reorganized as "ababa", but "aaaabb" is invalid since a cannot be separated sufficiently.
Max-Heap for Character Frequency:

Use a max-heap (priority queue) to always extract the most frequent characters first.
Pair the two most frequent characters to avoid placing identical characters adjacent to each other.
Handle Remaining Characters:

After processing pairs, if one character remains, it can be placed at the end if its frequency is 1.
Approach
Build Frequency Counter:

Use Counter to compute the frequency of each character.
Example: "aaabb" → {'a': 3, 'b': 2}.
Feasibility Check:

If the frequency of any character exceeds 
(len(s)+1)//2, return "".
Build Max-Heap:

Create a max-heap of (-count, char) for all characters.
Negative counts are used because Python's heapq implements a min-heap by default.
Reorganize Characters:

Pop the two most frequent characters from the heap.
Append them to the result alternately to avoid adjacent duplicates.
Decrement their counts and push them back into the heap if their counts are greater than 1.
Handle Remaining Character:

If one character is left in the heap, add it to the result (valid only if its count is 1).
Join and Return Result:

Return the joined string.

```




```py title="Solution.py"
from collections import Counter
import heapq
class Solution:
    def reorganizeString(self, s: str) -> str:
        
        frequency = Counter(s) #s: no of occs 
        max_frequency = max(frequency.values())

        #check if it is actually possible
        if max_frequency > (len(s) + 1) // 2:
            return ""
        
        # heap-building 
        max_heap = [(-count, char) for char, count in frequency.items()]
        heapq.heapify(max_heap)

        result = []


        while len(max_heap) > 1:

            count1, char1 = heapq.heappop(max_heap)
            count2, char2 = heapq.heappop(max_heap)

            result.extend([char1, char2])

            #if there is count push it back 

            if -count1 > 1:
                heapq.heappush(max_heap, (count1 + 1, char1))
            
            if -count2 > 1:
                 heapq.heappush(max_heap, (count2 + 1, char2))

            
        #Handle remaining characters
        if max_heap:
            result.append(max_heap[0][1])
        
        return "".join(result)


        
```


```md title="Rundown"
Visual Explanation
Example Input
Input:

makefile
Copy
Edit
s = "aaabb"
Execution
Frequency Count:

css
Copy
Edit
frequency = {'a': 3, 'b': 2}
Feasibility Check:


(3>(len(s)+1)//2=3) → Valid.
Build Max-Heap:

css
Copy
Edit
max_heap = [(-3, 'a'), (-2, 'b')]
Reorganize Characters:

Step 1:
Pop: (-3, 'a'), (-2, 'b').
Append: "ab".
Push back: (-2, 'a').
Step 2:
Pop: (-2, 'a'), (-1, 'b').
Append: "aba".
Push back: (-1, 'a').
Step 3:
Pop: (-1, 'a').
Append: "abaa".
Final Result:

arduino
Copy
Edit
"ababa"
Result
Output:

arduino
Copy
Edit
"ababa"
Complexity Analysis
Time Complexity
Frequency Count: 

O(N), where 
𝑁
N is the length of the string.
Heap Operations:
Building the heap: 

K is the number of unique characters.
Processing the heap: 

O(NlogK), since each character is processed once.
Total Complexity: 

O(NlogK).

Space Complexity

O(K) for the frequency counter and heap storage.
Edge Cases
Impossible to Rearrange:

Input: "aaaabb"
Output: "" (The most frequent character cannot be separated sufficiently).
Single Character:

Input: "a"
Output: "a".
Already Valid:

Input: "ababab"
Output: "ababab".
All Identical Characters:

Input: "aaaa"
Output: "".


```
