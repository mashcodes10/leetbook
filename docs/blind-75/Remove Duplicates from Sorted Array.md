---
sidebar_position: 2
---

# Remove Duplicates from Sorted Array


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Question
    Given a sorted array nums, remove the duplicates in-place
    such that each element appears only once and returns the
    new length.

    Do not allocate extra space for another array, you must
    do this by modifying the input array in-place with O(1) extra memory.

Thoughts Before Coding
    - We can implement a two pointer approach
        - One pointer 'i' will be used to populate unique numbers
        - One pointer 'j' will scan forward to find unique numbers
    - We should note that the input array is sorted in ascending order
        - This means all of the duplicate numbers are grouped together
        - After we have accounted for the element at 'nums[j]'
            - We will want to skip all of the future elements that
              is equal to 'nums[j]'
    - After we have process all of the numbers with pointer 'j'
        - The value of 'i' will determine the size of the output array
          without duplicates

Answer
    - Create a variable 'i' to keep track of the current location
      we populating
    - Iterate through the indices of the input list, denoted as 'j'
        - Populate 'nums[j]' at 'nums[i]'
            - Increment 'i'
        - While 'j' is not at the last index AND 'nums[j + 1]' is equal
          to 'nums[j]'
            - Increment 'j'
    - Return 'i', the length of the new array without duplicates

What is the Time and Space Complexity?
    - Time Complexity = O(n), where n is the length of the input array
        - O(n), visit each index once
    - Space Complexity = O(1)
```




```py title="Solution.py"
def remove_duplicates(nums):
    if not nums:
        return 0  # Edge case: empty array

    i = 0  # Pointer for placing unique elements

    for j in range(len(nums)):
        # Place nums[j] at nums[i] and increment i
        nums[i] = nums[j]
        i += 1

        # Skip all duplicate occurrences
        while j < len(nums) - 1 and nums[j] == nums[j + 1]:
            j += 1

    return i  # New length of array with unique elements

# Example usage:
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
length = remove_duplicates(nums)
print(length)  # Output: 5
print(nums[:length])  # Output: [0, 1, 2, 3, 4]



        
```


```md title="Rundown"
Approach Breakdown (Your Thoughts in Code)
Initialize Two Pointers:

i: Pointer for placing unique elements.
j: Pointer for scanning the array.
Iterate Through the Array:

Place nums[j] at nums[i].
Increment i since we have added a unique element.
Skip Duplicates:

If nums[j] == nums[j + 1], increment j to move past duplicates.
Return the Length of the Modified Array:

i represents the count of unique elements.
Example Walkthrough
Example Input:
plaintext
Copy
Edit
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Step-by-step Execution:
plaintext
Copy
Edit
1. nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
   i = 0, j = 0 → nums[i] = nums[j] → i++

2. nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
   Skip duplicates → j moves to index 2
   nums[i] = nums[j] → i++

3. nums = [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
   Skip duplicates → j moves to index 5
   nums[i] = nums[j] → i++

4. nums = [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
   Skip duplicates → j moves to index 7
   nums[i] = nums[j] → i++

5. nums = [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
   Skip duplicates → j moves to index 9
   nums[i] = nums[j] → i++

Final `nums[:i] = [0, 1, 2, 3, 4]`
Time & Space Complexity
Time Complexity: 

O(n)
Each element is visited once.
Space Complexity: 

O(1)
No extra space is used, in-place modification.

```
