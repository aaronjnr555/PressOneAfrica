# Bug Analysis: Duplicate Todos

## Steps to Reproduce
1. Add a todo with the text "Buy milk"
2. Add the same todo again ("Buy milk")

## Root Cause Hypothesis
- The component does not check for existing entries before adding a new one.
- No normalization of input (e.g., trimming whitespace)

## How to Prevent Regression
- Add logic to check if the new todo already exists
- Normalize input by trimming and converting to lowercase
- Write a unit test to prevent duplicates
