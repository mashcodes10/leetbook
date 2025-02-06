---
sidebar_position: 2
---

# Angle between Hands of CLock


Problem Link [https://leetcode.com/problems/basic-calculator/description/](https://leetcode.com/problems/basic-calculator/description/).

## Approch and Code

Please look at the **approach** and the `solution` below.

Add metadata to customize the sidebar label and position:

```md title="memo" {1-4}
---
Understanding the Problem
A clock has two hands:
Hour Hand: Moves 360° in 12 hours → 30° per hour.
Minute Hand: Moves 360° in 60 minutes → 6° per minute.
Given an hour (h) and minute (m), we need to calculate the angle between them.
Formula for Angle Calculation
Hour Hand Position (Degrees from 12:00)

Hour Angle

Hour Angle=30×h+ 2m
​
 
Moves 30° per hour.
Moves an extra 0.5° per minute.
Minute Hand Position (Degrees from 12:00)


Minute Angle=6×m
Moves 6° per minute.
Absolute Difference between Angles


Angle=∣Hour Angle−Minute Angle∣
The absolute difference gives the angle.
If the angle is greater than 180°, return the smaller angle using:
Final Angle

Final Angle=min(Angle,360−Angle)
```




```py title="Solution.py"
def clock_angle(hour: int, minute: int) -> float:
    """
    Calculate the angle between the hour and minute hands of a clock.
    """
    # Normalize hour to 12-hour format
    hour = hour % 12 
    
    # Calculate the angles
    hour_angle = (30 * hour) + (0.5 * minute)
    minute_angle = 6 * minute
    
    # Find the absolute difference
    angle = abs(hour_angle - minute_angle)
    
    # Return the smaller angle (<= 180 degrees)
    return min(angle, 360 - angle)

# Example Usage:
print(clock_angle(3, 15))  # Expected Output: 7.5 degrees
print(clock_angle(9, 45))  # Expected Output: 22.5 degrees
print(clock_angle(12, 0))  # Expected Output: 0 degrees
print(clock_angle(6, 0))   # Expected Output: 180 degrees


        
```


```md title="Rundown"
Explanation of Code
Normalize Hour to 12-Hour Format

hour = hour % 12 ensures input works correctly for 24-hour format.
Compute Hour and Minute Hand Angles

hour_angle = (30 * hour) + (0.5 * minute)
Moves 30° per hour.
Moves 0.5° per minute.
minute_angle = 6 * minute
Moves 6° per minute.
Compute the Absolute Difference

angle = abs(hour_angle - minute_angle)
Return the Smaller Angle

Since a clock forms a 360° circle, we return:
min
⁡

min(Angle,360−Angle)
Time Complexity Analysis
Each computation (multiplication, subtraction, absolute value) takes O(1) time.
The overall time complexity is O(1).
Example Outputs
Input (Hour, Minute)	Computed Angle
(3, 15)	7.5°
(9, 45)	22.5°
(12, 0)	0°
(6, 0)	180°

```
