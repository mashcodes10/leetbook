---
sidebar_position: 2
---

# Search Suggestions System


Problem Link [https://leetcode.com/problems/search-suggestions-system/](https://leetcode.com/problems/search-suggestions-system/).

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
class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        products.sort()

        l, r = 0, len(products) - 1
        res = []

        for i in range (len(searchWord)):

            ch = searchWord[i]
            

            #Eliminate the words that are not matched with prefix

            while l <= r and  (len(products[l]) <= i or products[l][i] != ch):
                l += 1 
            while l <= r and  (len(products[r]) <= i or products[r][i] != ch):
                r -= 1 

            remainingWords = r - l + 1
            res.append([])

            #return the list in max of 3
            for j in range(min(3,remainingWords)):
                res[-1].append(products[l + j])
        
        return res
        
```


```md title="Rundown"
Visual Explanation
Example Input
Products: ["mobile", "mouse", "moneypot", "monitor", "mousepad"]
Search Word: "mouse"
Execution
Sorted Products:

css
Copy code
["mobile", "moneypot", "monitor", "mouse", "mousepad"]
Prefix 1: "m"

Matches: All products.
Suggestions: ["mobile", "moneypot", "monitor"].
Prefix 2: "mo"

Matches: ["mobile", "moneypot", "monitor", "mouse", "mousepad"].
Suggestions: ["mobile", "moneypot", "monitor"].
Prefix 3: "mou"

Matches: ["mouse", "mousepad"].
Suggestions: ["mouse", "mousepad"].
Prefix 4: "mous"

Matches: ["mouse", "mousepad"].
Suggestions: ["mouse", "mousepad"].
Prefix 5: "mouse"

Matches: ["mouse", "mousepad"].
Suggestions: ["mouse", "mousepad"].
Complexity Analysis
Time Complexity
Sorting: 

O(PlogP), where 
𝑃
P is the number of products.
Prefix Search:
For each prefix, 

O(P) in the worst case (linear scan with two pointers).
Optimized to 

O(logP) per prefix using binary search.
Space Complexity

O(P) for storing the sorted products.
Comparison with Alternative Solutions
1. Trie-Based Solution
Approach: Store products in a Trie. Traverse the Trie to find matching products for each prefix.
Advantages:
Efficient prefix search (

O(L), where 
L is the length of the prefix).
Disadvantages:
Higher space usage due to the Trie structure.
Implementation complexity is higher than sorting + two-pointer.
2. Two-Pointer (Current Solution)
Approach: Use sorted products and adjust pointers for each prefix.
Advantages:
Simpler implementation.
Leverages sorted products to reduce complexity.
Disadvantages:
Less efficient for extremely large product lists or long prefixes.
```
