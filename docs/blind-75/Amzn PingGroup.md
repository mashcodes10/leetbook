---
sidebar_position: 2
---

# Amzn PingGroup


Problem Link [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
A brute force approach would involve iterating through the entire ping_group list multiple times to explicitly check and build relationships instead of using a dictionary for direct access.

Brute Force Approach
Iterate through each ping log entry and extract the sender-receiver relationship.
Check if the sender exists in a result structure (e.g., a dictionary or a list of lists).
If it doesn't exist, create a new entry; otherwise, append the receiver.
Repeat this for every entry without using efficient lookups.

This function:

Uses a defaultdict to store ping relationships.
Iterates over the list, extracts sender and receiver instances, and populates the dictionary.
Returns a dictionary where keys are instances and values are sets of instances they pinged.
The output for the given example would be:

nginx
Copy
Edit
i0 —> i1
i1 —> i2, i3
i2 —> i3

```




```py title="Solution.py"
from collections import defaultdict

def get_all_ping_groups(ping_group):
    ping_dict = defaultdict(set)
    
    for ping in ping_group:
        ping_list = ping.split(":")
        sender, receiver = ping_list[0], ping_list[1]
        ping_dict[sender].add(receiver)
    
    return ping_dict

# Example usage
ping_group = ["i0:i1:1234",
              "i1:i2:2344",
              "i1:i3:3456",
              "i2:i3:4567"]

ping_groups = get_all_ping_groups(ping_group)
for instance, group in ping_groups.items():
    print(f"{instance} —> {', '.join(group)}")

def get_all_ping_groups_bruteforce(ping_group):
    ping_groups = []  # A list to store sender and receiver pairs
    
    for ping in ping_group:
        sender, receiver, _ = ping.split(":")
        
        # Check if sender is already in the list
        found = False
        for group in ping_groups:
            if group[0] == sender:
                group[1].add(receiver)
                found = True
                break
        
        # If sender is not found, add a new group
        if not found:
            ping_groups.append([sender, {receiver}])
    
    return {group[0]: group[1] for group in ping_groups}

# Example usage
ping_group = ["i0:i1:1234",
              "i1:i2:2344",
              "i1:i3:3456",
              "i2:i3:4567"]

ping_groups = get_all_ping_groups_bruteforce(ping_group)
for instance, group in ping_groups.items():
    print(f"{instance} —> {', '.join(group)}")


```


```md title="Rundown"

```
