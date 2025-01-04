---
sidebar_position: 2
---

# Design Add and Search Words Data Structure


Problem Link [https://leetcode.com/problems/design-add-and-search-words-data-structure/description/](https://leetcode.com/problems/design-add-and-search-words-data-structure/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem: Word Dictionary with Search Including Wildcard
Objective: Design a data structure to store words and support fast lookups, including words with the wildcard character . that can match any single letter.
Key Operations:
addWord(word): Adds a word to the dictionary.
search(word): Searches for a word, where . matches any character.
Insight
Trie (Prefix Tree): A tree-like data structure where each node represents a single character. It is efficient for prefix-based searches.
Each node contains:
A children dictionary to store subsequent characters.
A flag is_end_of_word to indicate the end of a valid word.
DFS (Depth-First Search): Enables efficient traversal to handle the wildcard character.

Approach
Data Structure Design:

Implement a TrieNode class:
children: A dictionary to store child nodes keyed by character.
is_end_of_word: A boolean flag to mark the end of a word.
Implement the WordDictionary class:
root: The root of the trie.
Adding a Word (addWord):

Traverse the trie starting from the root.
For each character in the word:
If the character doesn’t exist in the current node’s children, create a new TrieNode.
Move to the child node corresponding to the character.
Mark the final node as is_end_of_word = True.
Searching for a Word (search):

Use a recursive DFS to traverse the trie.
For each character in the word:
If the character is a . (wildcard), recursively search all child nodes.
If the character is not a wildcard, follow the corresponding child node.
If the traversal reaches the end of the word, check if the current node is marked as is_end_of_word.

```




```py title="Solution.py"
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word: str) -> bool:
        def dfs(index, node):
            if index == len(word):
                return node.is_end_of_word

            char = word[index]
            if char == '.':
                for child in node.children.values():
                    if dfs(index + 1, child):
                        return True
                return False
            else:
                if char not in node.children:
                    return False
                return dfs(index + 1, node.children[char])

        return dfs(0, self.root)

        
```


```md title="Rundown"
Examples of addWord and search
Adding Words
Input: addWord("car"), addWord("cat"), addWord("cart"), addWord("bat")

Trie Structure After Adding Words:

graphql
Copy code
root
├── b
│   └── a
│       └── t (is_end_of_word = True)
└── c
    └── a
        ├── r
        │   ├── t (is_end_of_word = True)
        │   └── (is_end_of_word = True)
        └── t (is_end_of_word = True)
Searching Words
Exact Match Search (search("cat"))

Process:
Start at root.
Traverse:
c → a → t.
At t, check is_end_of_word = True.
Result: True
Wildcard Search (search("ca."))

Process:
Start at root.
Traverse:
c → a.
At ., explore all children of a:
Check r → is_end_of_word = False.
Check t → is_end_of_word = True. Match found.
Result: True
Wildcard at Start (search(".at"))

Process:
Start at root.
At ., explore all children of root:
Check b:
Traverse b → a → t → is_end_of_word = True. Match found.
Check c:
Traverse c → a → t → is_end_of_word = True. Match found.
Result: True
No Match Search (search("cap"))

Process:
Start at root.
Traverse:
c → a.
p not found in a.children.
Result: False
Detailed Walkthrough of addWord
Input: addWord("car")

Start at the root.
Traverse the word:
Add c to root.children.
Add a to c.children.
Add r to a.children.
Mark the node for r as is_end_of_word = True.
Input: addWord("cart")

Start at the root.
Traverse the word:
c already exists in root.children.
a already exists in c.children.
r already exists in a.children.
Add t to r.children.
Mark the node for t as is_end_of_word = True.
Detailed Walkthrough of search
Wildcard Search (search("ca."))
Start at the root.
Traverse c → a.
At ., explore all children of the a node:
Option 1: Traverse r → is_end_of_word = False.
Option 2: Traverse t → is_end_of_word = True. Match found.
Search for Non-Existent Word (search("dog"))
Start at the root.
Traverse:
d not found in root.children. No match.
Edge Cases
Empty Word:
Adding or searching for "" would only affect the is_end_of_word flag of the root node.
Words with Repeated Characters:
addWord("aaa") and search("a..") would traverse the same node repeatedly.
Complexity Analysis
Time Complexity:
addWord(word):

𝑂
(
𝐿
)
O(L), where 
𝐿
L is the length of the word.
Traverses each character in the word once.
search(word):

Worst case 
𝑂
(
𝐿
⋅
𝑁
)
O(L⋅N), where 
𝐿
L is the word length and 
𝑁
N is the branching factor.
Wildcard . can explore all children of a node, increasing traversal.
Space Complexity:
Total number of nodes in the trie is proportional to the sum of all characters in the added words.

Step-by-Step Traversal for Specific Queries
Example 1: search("ca.")
Initial State:

Trie Structure:
css
Copy code
root
├── b
│   └── a
│       └── t (is_end_of_word = True)
└── c
    └── a
        ├── r
        │   └── t (is_end_of_word = True)
        └── t (is_end_of_word = True)
Input: "ca."
Traversal Steps:

Start at the root node.
Step 1: Match 'c' in root.children. Move to the child node for 'c'.
Step 2: Match 'a' in c.children. Move to the child node for 'a'.
Step 3: At '.', explore all children of 'a':
Traverse to the 'r' child:
Continue traversal to 't', which is marked is_end_of_word = True. Match found!
Result: True

Example 2: search(".at")
Initial State:

Input: ".at"
Traversal Steps:

Start at the root node.
Step 1: At '.', explore all children of the root:
Traverse to 'b':
Match 'a' in b.children. Move to the 'a' child.
Match 't' in a.children. Node marked is_end_of_word = True.
Traverse to 'c':
Match 'a' in c.children. Move to the 'a' child.
Match 't' in a.children. Node marked is_end_of_word = True.
Result: True

Example 3: search("dog")
Initial State:

Input: "dog"
Traversal Steps:

Start at the root node.
Step 1: 'd' not found in root.children. Return False.
Result: False

Comparison with Alternative Solutions
1. HashMap-Based Solution
Approach:

Use a HashMap to store words as keys.
For wildcard search, iterate through all keys in the HashMap and compare character by character.
Advantages:

Simple implementation for exact match queries.
No complex tree structures required.
Disadvantages:

Wildcard searches require 
𝑂
(
𝑁
⋅
𝐿
)
O(N⋅L), where 
𝑁
N is the number of stored words and 
𝐿
L is the word length. Every word must be checked.
Space usage is higher because duplicates are not consolidated (e.g., prefixes are stored separately for each word).
2. Set-Based Solution
Approach:

Use a Set to store unique words.
For wildcard searches, iterate through the Set.
Advantages:

Simple to implement for exact matches.
Ensures no duplicate words.
Disadvantages:

Wildcard search is inefficient, similar to HashMap.
No support for structured storage of prefixes.
3. Trie-Based Solution (Current Implementation)
Approach:

Use a Trie to consolidate prefixes and facilitate efficient traversal.
Support wildcards with DFS.
Advantages:

Exact matches: 

O(L), where  L is the word length.
Wildcard searches are efficient for small branching factors.
Reduces space usage by consolidating prefixes (e.g., "cat", "cart", and "car" share common nodes).
Disadvantages:

Implementation complexity is higher.
Wildcard searches can still be inefficient if the branching factor is high.
When to Use Each Approach
Use Case	Preferred Solution
Exact match queries only	HashMap or Set
Wildcard queries with small dataset	HashMap or Set
Wildcard queries with large dataset	Trie
Prefix-based operations (e.g., autocomplete)	Trie

```
