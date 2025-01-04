---
sidebar_position: 2
---

# Valid Suduko


Problem Link [https://leetcode.com/problems/valid-sudoku/description/](https://leetcode.com/problems/valid-sudoku/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Problem: Valid Sudoku
From Your File:
Rows Validation: For each row, use a set to track numbers.
If a number is already in the set and is not ".", the board is invalid.
Columns Validation: For each column, use a set to track numbers.
Apply the same logic as rows.
Boxes Validation: Predefine the starting indices for each 3x3 sub-grid.
For each box, use a set to check uniqueness.
Predefined Box Indices:
css
Copy code
boxes = [(0, 3), (0, 6), (0, 9),          (3, 3), (3, 6), (3, 9),         (6, 3), (6, 6), (6, 9)]
Approach
Row Validation:

Loop through each row (0-8).
Create a set to track numbers.
For each number:
If it’s already in the set and not ".", return False.
Otherwise, add it to the set.
Column Validation:

Loop through each column (0-8).
Apply the same logic as rows.
Box Validation:

Use the predefined boxes indices.
For each box:
Create a set to track numbers.
Loop through the rows and columns inside the box:
If a number repeats, return False.
Return True:

If all validations pass, the board is valid.
```




```py title="Solution.py"
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(9):
            s= set()
            for j in range(9):
                item = board [i][j]
                if item in s:
                    return False
                elif item != '.':
                    s.add(item)
        
        for i in range(9):
            s= set()
            for j in range(9):
                item = board [j][i]
                if item in s:
                    return False
                elif item != '.':
                    s.add(item)
        
        # start = [(0,0),(0,3),(0,6),(3,0),(3,3),(3,6),(6,0),(6,3),(6,6) ]

        # for i,j in start:
        #     s = set()
        #     for row in range (i,i+3):
        #         for col in range (j,j+3):
        #             item = board [row][col]
        #             if item in s:
        #                 return False
        #             elif item != '.':
        #                 s.add(item)

        for i in range(0, 9, 3):
            for j in range(0, 9, 3):

                s = set()

                for k in range(i, i + 3):
                    for l in range(j, j + 3):
                        if board[k][l] != ".":
                            if board[k][l] not in s:
                                s.add(board[k][l])
                            else:
                                return False
        return True
```


```md title="Rundown"
Execution Example
Input Board:
css
Copy code
[ ["5","3",".",".","7",".",".",".","."],
 ["6",".",".","1","9","5",".",".","."],
 [".","9","8",".",".",".",".","6","."],
 ["8",".",".",".","6",".",".",".","3"],
 ["4",".",".","8",".","3",".",".","1"],
 ["7",".",".",".","2",".",".",".","6"],
 [".","6",".",".",".",".","2","8","."],
 [".",".",".","4","1","9",".",".","5"],
 [".",".",".",".","8",".",".","7","9"]
]
Row Validation:

For row 0: Validate {"5", "3", "7"} → Valid.
Repeat for all rows.
Column Validation:

For column 0: Validate {"5", "6", "8", "4", "7"} → Valid.
Repeat for all columns.
Box Validation:

For box (0, 0) (rows 0-2, columns 0-2): Validate {"5", "3", "6", "9", "8"} → Valid.
Repeat for all predefined boxes.
Final Check:

All validations pass. Return True.
Result
Output: True

Complexity Analysis
Time Complexity
Rows and Columns Validation: 

O(9 
2
 ), constant for a 9x9 grid.
Box Validation: 

O(9×9), constant for a 9x9 grid.
Total Complexity: 

O(1).

Space Complexity
O(9) for rows, columns, and box sets.
```
