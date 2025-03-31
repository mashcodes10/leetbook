---
sidebar_position: 2
---

# Best Time to Buy and Sell Stock 


Problem Link [https://leetcode.com/problems/binary-tree-level-order-traversal/description/](https://leetcode.com/problems/binary-tree-level-order-traversal/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
You're given an array prices[], where prices[i] represents the stock price on day i.
You want to buy on one day and sell on another later day to maximize your profit.

Approach: Two-Pointer Sliding Window (One-Pass)
Key Idea
Use two pointers:

l = buy day

r = sell day

Move the right pointer r to check for higher selling prices.

Update max_profit when a better profit is found.

If prices[r] < prices[l], move the buy pointer (l) to r because we found a new minimum.


```




```py title="Solution.py"
from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l, r = 0, 1  # l = buy, r = sell
        max_profit = 0

        while r < len(prices):
            if prices[l] < prices[r]:
                profit = prices[r] - prices[l]
                max_profit = max(max_profit, profit)
            else:
                l = r  # New lower price found, move buy pointer
            r += 1

        return max_profit

        
```


```md title="Rundown"
Buy at l
Sell at r (moving forward)

Only update profit if prices[r] > prices[l]

If prices[r] < prices[l], we’ve found a cheaper stock → move l = r


```
