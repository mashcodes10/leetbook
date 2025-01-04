---
sidebar_position: 2
---

# Word Ladder


Problem Link [https://leetcode.com/problems/word-ladder/](https://leetcode.com/problems/word-ladder/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem: Word Ladder
Objective: Given a beginWord, endWord, and a wordList, find the shortest transformation sequence from beginWord to endWord such that:
Only one letter can change at a time.
Each transformed word must exist in the wordList.
Key Operations:
Represent words as nodes in a graph, where edges exist between words that differ by one character.
Perform BFS to find the shortest path from beginWord to endWord.
Insight
Graph Representation:

Treat each word as a node.
Words are connected if they differ by exactly one character.
Example: ["hit", "hot", "dot", "dog", "cog"] can be visualized as:
Copy code
hit → hot → dot → dog → cog
BFS for Shortest Path:

BFS ensures that the shortest path is found first.
Use a queue to explore each word and its neighbors iteratively.
Approach
Preprocess Word List:

Convert the wordList into a set for 

O(1) lookups.
BFS Initialization:

Use a queue initialized with (beginWord, steps) where steps = 1.
Keep track of visited words to avoid cycles.
BFS Execution:

For each word, generate all possible one-character transformations.
If a transformation is in the wordList, add it to the queue and mark it as visited.
Stop if endWord is reached.
```




```py title="Solution.py"
from collections import deque
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        q = deque ([(beginWord, 1)])
        wordSet = set(wordList)
        wordSet.discard(beginWord)

        if endWord not in wordList:
            return 0
        
        while q:
            word, step = q.popleft()
            
            #first check the base case if it is the target or endWord
            if word == endWord:
                return step
            
            for i in range(len(word)):
                #replace the chars 
                orig_char = word[i]
                for char in (chr(i) for i in range(97,123)) : #26 letters
                    
                    transformed_word = word[:i] + char + word[i+1:]
                    if transformed_word in wordSet:
                        wordSet.remove(transformed_word)
                        q.append((transformed_word, step + 1))
                word = word[:i] + orig_char + word[i+1:]

        return 0
```


```md title="Rundown"
Visual Explanation
Example Input
Input:

makefile
Copy code
beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
Execution
Preprocess Word List:

makefile
Copy code
wordSet = {"hot", "dot", "dog", "lot", "log", "cog"}
BFS Execution:

Step 1:

Queue: [("hit", 1)]
Neighbors of "hit":
"hot" is valid (exists in wordSet).
Add "hot" to the queue: [("hot", 2)].
Remove "hot" from wordSet.
Step 2:

Queue: [("hot", 2)]
Neighbors of "hot":
"dot" and "lot" are valid.
Add "dot" and "lot" to the queue: [("dot", 3), ("lot", 3)].
Remove "dot" and "lot" from wordSet.
Step 3:

Queue: [("dot", 3), ("lot", 3)]
Neighbors of "dot":
"dog" is valid.
Add "dog" to the queue: [("lot", 3), ("dog", 4)].
Remove "dog" from wordSet.
Step 4:

Queue: [("lot", 3), ("dog", 4)]
Neighbors of "lot":
"log" is valid.
Add "log" to the queue: [("dog", 4), ("log", 4)].
Remove "log" from wordSet.
Step 5:

Queue: [("dog", 4), ("log", 4)]
Neighbors of "dog":
"cog" is valid.
Add "cog" to the queue: [("log", 4), ("cog", 5)].
Remove "cog" from wordSet.
Step 6:

Queue: [("log", 4), ("cog", 5)]
"cog" is reached. Return steps = 5.
Result
The shortest transformation sequence length is 5: ["hit" → "hot" → "dot" → "dog" → "cog"].

Complexity Analysis
Time Complexity
Word Transformations:
For each word of length 

L, generate  26×L transformations.
Total transformations: 

O(N⋅L⋅26), where 

N is the number of words in the list.
BFS:
Each word is visited once. Each neighbor lookup is 

O(L⋅26).
Overall complexity: 

O(N⋅L 2).
Space Complexity
Queue and visited set store up to 

O(N) words.
Total space: 

O(N⋅L), where 

L is the word length.
Edge Cases
No Path Exists:
If endWord is not in wordList, return 0.
Identical Words:
If beginWord == endWord, return 1.
Empty Word List:
Return 0.
```
