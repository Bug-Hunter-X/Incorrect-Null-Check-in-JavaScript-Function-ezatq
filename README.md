# Incorrect Null Check in JavaScript Function

This repository demonstrates a common error in JavaScript: an incorrect null check that leads to unexpected behavior.

## Bug

The `foo` function does not correctly handle the scenario where both input parameters, `a` and `b`, are null.  This results in unintended behavior because the function does not explicitly handle this edge case.

## Solution

The solution enhances the null check to include a specific condition for both parameters being null.  This ensures appropriate handling.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unexpected behavior (or lack thereof) due to the incomplete null check in the function.