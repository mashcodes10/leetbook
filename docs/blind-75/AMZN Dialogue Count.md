---
sidebar_position: 2
---

# AMZN Dialogue Count


Problem Link [https://leetcode.com/problems/word-ladder/](https://leetcode.com/problems/word-ladder/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Understanding Input and Constraints
What is the expected format of the input?

Is it always in the format "Time_Code", "Character", "Dialogue"?
Are there cases where the dialogue might contain commas?
What size constraints should we consider?

How large can the input file be? (e.g., thousands or millions of lines)
Do we need to optimize for memory or performance?
Can multiple characters have the same name?

If two characters have the same name but are different in the show, how should we handle them?
Are character names always capitalized, or should we normalize them?

Should "Midge" and "MIDGE" be treated as the same person?
How should we handle missing or malformed lines?

Should we ignore incomplete or corrupted lines?
How do we handle cases where the character name is missing?
Understanding Output Requirements
If two characters have the same number of lines, should we sort them alphabetically?

This was mentioned in the problem statement, but confirming expectations is good.
How should we handle ties when multiple characters have the same number of dialogue lines?

Should we return exactly K results, or can we return more if there are ties?
Do we need to return the results as a list of tuples, or is another format preferred?

JSON, dictionary, or printed output?

Edge Cases and Scalability
What should we do if K is greater than the number of unique characters?

Should we return all available characters or an empty list?
What happens if there are no dialogues in the input?

Should we return an empty list, an error message, or a default response?
Will the input always fit in memory, or do we need to process it line by line?
If the file is very large, should we consider a streaming approach?
Should we account for performance optimizations if we are reading multiple files in succession?
Is there a requirement to persist state across multiple reads efficiently?

Class:
Should DialogueReader reset counts when reading a new file, or should it accumulate across multiple reads?
Should we assume stateful behavior (persisting past reads) or stateless behavior?

```




```py title="Solution.py"
from typing import List, Tuple
from collections import defaultdict

# Function to find top K characters with most dialogues
def topKCount(dialogues_file: str, k: int) -> List[Tuple[str, int]]:
    dialogue_count = defaultdict(int)
    
    with open(dialogues_file, 'r', encoding='utf-8') as file:
        for line in file:
            parts = line.strip().split(', ')
            if len(parts) < 3:
                continue  # Skip invalid lines
            character = parts[1].strip('"')  # Remove surrounding quotes
            dialogue_count[character] += 1
    
    # Sort by count descending, then by character name ascending
    sorted_characters = sorted(dialogue_count.items(), key=lambda x: (-x[1], x[0]))
    return sorted_characters[:k]

# Class implementation for DialogueReader
class DialogueReader:
    def __init__(self, k: int):
        self.k = k
        self.dialogue_count = defaultdict(int)
    
    def readScriptFile(self, input_lines: List[str]):
        for line in input_lines:
            parts = line.strip().split(', ')
            if len(parts) < 3:
                continue  # Skip invalid lines
            character = parts[1].strip('"')  # Remove surrounding quotes
            self.dialogue_count[character] += 1
    
    def topKCount(self) -> List[Tuple[str, int]]:
        sorted_characters = sorted(self.dialogue_count.items(), key=lambda x: (-x[1], x[0]))
        return sorted_characters[:self.k]

```


```md title="Rundown"
This implementation provides:

topKCount(dialogues_file: str, k: int) function: Reads a file, counts character dialogue lines, and returns the top K characters sorted by count and name.
DialogueReader class:
readScriptFile(input_lines: List[str]) updates the dialogue count from multiple inputs.
topKCount() returns the top K characters based on aggregated counts.
```
