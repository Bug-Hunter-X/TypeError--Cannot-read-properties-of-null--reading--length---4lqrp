# JavaScript Bug: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of null (reading 'length')`.  The error occurs when attempting to access the `length` property of a variable that is unexpectedly `null` or `undefined`. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version with robust error handling.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` in your terminal.
3. Observe the `TypeError`.
4. Run `node bugSolution.js` to see the corrected behavior.

## Solution

The solution involves explicitly checking if the variable is `null` or `undefined` before accessing the `length` property.  Type checking is also included for better code robustness.