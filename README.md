# JavaScript Overview

JavaScript is a programming language that powers the interaction and dynamic behavior of web pages, making it the "brain" of a webpage.

---

## Variables

A variable is a container used to store information or data.

### Rules for Variable Names:
- Variable names are **case-sensitive**.
- They must start with a letter, underscore (_), or dollar sign ($), followed by letters or digits.
- Special characters or spaces cannot be used to start variable names.
- Reserved words cannot be used as variable names.

---

## How to Declare Variables

Variables are declared using the keywords `let`, `const`, or `var`.

### Key Differences:
- **const**: 
  - Block-scoped.
  - The value cannot be updated or the variable name re-declared.
- **let**: 
  - Block-scoped.
  - The value can be updated, but the variable name cannot be re-declared.
- **var**: 
  - Globally-scoped.
  - Both the value and variable name can be updated or re-declared.
  - *Not recommended post-* **ES6** *due to scope issues.*

---

## Data Types in JavaScript

### 1. Primitive Data Types:
- **number**: Includes integers, whole numbers, and decimals.
- **string**: Represents characters, words, or sentences.
- **boolean**: Logical values, either `true` or `false`.
- **bigInt**: For very large integers.
- **symbol**: Unique and immutable data, often used for object property keys.

### 2. Non-Primitive Data Types:
- **Objects**: A collection of key-value pairs.
- **Arrays**: Ordered collections of values.
- **Functions**: Blocks of reusable code.

---
