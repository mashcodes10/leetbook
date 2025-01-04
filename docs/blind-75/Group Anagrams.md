---
sidebar_position: 2
---

# Group Anagrams


Problem Link [https://leetcode.com/problems/group-anagrams/](https://leetcode.com/problems/group-anagrams/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Approach and Insight
Problem: Group Anagrams
Objective: Given a list of strings, group them into categories where all strings in a group are anagrams of each other.
Key Operations:
Group words by their sorted character sequence (canonical form).
Use a hash map to store groups of anagrams.
Insight
Canonical Form of Anagrams:
Sorting the characters of each word transforms all anagrams into the same canonical form.
Example: For "eat", "tea", and "ate", their sorted form is "aet".
Efficient Grouping:
Use a dictionary where:
The key is the canonical form.
The value is a list of all words matching that canonical form.
Approach
Sort and Map:

For each word, compute its sorted form.
Use the sorted form as a key in a dictionary.
Append the original word to the list corresponding to that key.
Return Groups:

Return all the lists from the dictionary as the grouped anagrams.

```




```py title="Solution.py"
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagramMap = defaultdict(list)
        res = []

        for s in strs:
            sorted_str = tuple(sorted(s))
            #now all anagrams are same
            # we will append the anagrams with this key 
            anagramMap[sorted_str].append(s)

            #defaultdict(<class 'list'>, {('a', 'e', 't'): ['eat', 'tea', 'ate'], ('a', 'n', 't'): ['tan', 'nat'], ('a', 'b', 't'): ['bat']})
        
        # we wil append the values i.e. the grouped anagrams
        for value in anagramMap.values():
            res.append(value)
        
        return res        
```


```md title="Rundown"
Visual Explanation
Example Input
Input:

css
Copy code
["eat", "tea", "tan", "ate", "nat", "bat"]
Execution
Initialization:

Create an empty dictionary: anagram_map = {}.
Process Each Word:

For "eat":
Sorted form: "aet".
Add "eat" to anagram_map["aet"].
makefile
Copy code
anagram_map = {"aet": ["eat"]}
For "tea":
Sorted form: "aet".
Add "tea" to anagram_map["aet"].
makefile
Copy code
anagram_map = {"aet": ["eat", "tea"]}
For "tan":
Sorted form: "ant".
Add "tan" to anagram_map["ant"].
makefile
Copy code
anagram_map = {"aet": ["eat", "tea"], "ant": ["tan"]}
For "ate":
Sorted form: "aet".
Add "ate" to anagram_map["aet"].
makefile
Copy code
anagram_map = {"aet": ["eat", "tea", "ate"], "ant": ["tan"]}
For "nat":
Sorted form: "ant".
Add "nat" to anagram_map["ant"].
makefile
Copy code
anagram_map = {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"]}
For "bat":
Sorted form: "abt".
Add "bat" to anagram_map["abt"].
makefile
Copy code
anagram_map = {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"]}
Return Groups:

Collect all values from anagram_map:
css
Copy code
[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
Complexity Analysis
Time Complexity
Sorting Words:
Sorting each word takes 
𝑂
(
𝐿
log
⁡
𝐿
)
O(LlogL), where 
𝐿
L is the average length of a word.
Total complexity: 

O(N⋅LlogL), where 

N is the number of words.
Grouping Words:
Insertion into the dictionary is 

O(1) per word.
Total complexity: 

O(N).
Space Complexity
The dictionary requires 

O(N⋅L) space to store all words.
Comparison with Alternative Solutions
1. Counting Characters
Approach:
Use the frequency of each character (e.g., [2, 1, 0, 0, ...]) as the key instead of sorting.
Advantages:
Avoids the 

O(LlogL) sorting step.
Disadvantages:
Handling frequency arrays adds complexity.
Space usage is higher due to the character frequency arrays.
2. Current Approach (Sorting)
Advantages:
Simple to implement.
Intuitive canonical form for anagrams.
Disadvantages:
Sorting can be expensive for very long strings.
Edge Cases
Empty Input:

Input: []
Output: []
Single Word:

Input: ["word"]
Output: [["word"]]
All Identical Words:

Input: ["aaa", "aaa", "aaa"]
Output: [["aaa", "aaa", "aaa"]]
```
