---
sidebar_position: 2
---

# AMZN Browser History


Problem Link [https://leetcode.com/problems/basic-calculator/description/](https://leetcode.com/problems/basic-calculator/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
The problem requires implementing a Browser History class that mimics the navigation behavior of a web browser, allowing users to visit new pages, go back in history, and go forward when possible.

Understanding the Problem
Class Definition:

BrowserHistory(homepage): Initializes with a homepage.
visit(url): Moves to the given url and clears the forward history.
back(steps): Moves back up to steps history entries.
forward(steps): Moves forward up to steps history entries.
Operations:

When visiting a new URL, all forward history is cleared.
Going back in history means moving to a previous page if available.
Going forward means returning to a more recent page if not overwritten.
Approach
We use a list (history) to store visited pages.
A pointer (current) tracks the current position in history.
visit(url): Append URL to history, remove forward pages, and move pointer.
back(steps): Move pointer back up to steps positions.
forward(steps): Move pointer forward up to steps positions.

```




```py title="Solution.py"
class BrowserHistory:
    def __init__(self, homepage: str):
        """Initialize with homepage."""
        self.history = [homepage]  # Store history as a list
        self.current = 0  # Pointer to track current page
    
    def visit(self, url: str) -> None:
        """Visit a new URL and clear forward history."""
        self.history = self.history[:self.current + 1]  # Remove forward history
        self.history.append(url)  # Add new URL
        self.current += 1  # Move pointer to the new page
    
    def back(self, steps: int) -> str:
        """Move back in history by 'steps' positions."""
        self.current = max(0, self.current - steps)  # Move back but not past index 0
        return self.history[self.current]  # Return current page
    
    def forward(self, steps: int) -> str:
        """Move forward in history by 'steps' positions."""
        self.current = min(len(self.history) - 1, self.current + steps)  # Move forward but not past last page
        return self.history[self.current]  # Return current page

# Example Usage
browserHistory = BrowserHistory("amazon.com")
browserHistory.visit("google.com")  # Visit google.com
browserHistory.visit("facebook.com")  # Visit facebook.com
browserHistory.visit("youtube.com")  # Visit youtube.com
print(browserHistory.back(1))  # Move back to facebook.com
print(browserHistory.back(1))  # Move back to google.com
print(browserHistory.forward(1))  # Move forward to facebook.com
browserHistory.visit("linkedin.com")  # Visit linkedin.com, clearing forward history
print(browserHistory.forward(2))  # Cannot move forward
print(browserHistory.back(2))  # Move back to google.com
print(browserHistory.back(7))  # Move back to amazon.com


        
```


```md title="Rundown"
Explanation of Code
__init__ Constructor:

Initializes history list with the homepage.
Uses current pointer to track the current page.
visit(url):

Clears any forward history by slicing history[:current + 1].
Appends the new URL.
Moves the pointer to the new page.
back(steps):

Moves current pointer backward, ensuring it doesn't go below 0.
Returns the current URL.
forward(steps):

Moves current pointer forward, ensuring it doesn't exceed the last page.
Returns the current URL.
Time Complexity Analysis
Operation	Complexity
visit(url)	O(1) (List slicing removes forward history in O(1) amortized)
back(steps)	O(1) (Moves pointer directly)
forward(steps)	O(1) (Moves pointer directly)
Since all operations involve simple list operations or pointer movements, the overall time complexity is O(1) per operation.

```
