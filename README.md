# AlgoCasts

Companion repo to a course on Udemy.com

# Runtime Complexity

## What is a runtime complexity?
- How performant an algorithm is
- To compare different solutions or algorithms to a problem


## How much more processing power/time is required to run the algo if we double the inputs?

> Examples

 - Reverse string examples tried earlier.
 - Steps code

- N times N - Quadratic or N*N runtimes.
- Input to algorithm is sort of steps taken in an algorithm?!


## Some very common run times

### Constant time = 1 (Holy grail of all solutions)
  - No matter what input is the output is always in a constant time.
  - Find problems which can be solved in this time.

### Logarithimic time = log(n)
  - You have this if doubling the number of elements you are iterating over doesn't double the amount of work.
  - Always assume that searching operations are log(n).

### Linear Time = n
   - Iterating thorough some collection of data.
   - If you see for loop spanning from 0 to array.length, you probably have "n" or linear runtime.

### Quasilinear Time = n * log(n)
   - You have this doubling the number of elements you are iterating over doesn't double the amount of work.
   - Always assume that any sorting operation is n * log(n).

### Quadratic Time = n ^ 2
   - Every element in a collection has to be compared to every other elemnent. The handshake problem.

### Exponential Time = 2 ^ n
  - If you add a single element to a collection, the processing power required doubles.


# Big O Notation

- Efficiency of algorithm

## O(n) = Linear = Big O

## O(1) = Constant

## O(n^2) = Quadratic


## Identifying Runtime Complexity

### Iterating with a simple for loop through a single collection?
= Probably O(n) - Linear runtime

### Iterating through half a collection?
= Still O(n). There is no constants in runtime. No 3 times, 2 times.

### Iterating through differnent collections of data/ two SEPERATE for loops
= O(n + m) - That has runtime

### Two nested loopsiterating over the same collection?
= O(n^2) - Big Red flag. Two nested for loops.

### Two nested for loops over different collections?
= O(n*m)

### Sorting?
= O(n*log(n)) - Almost every sorting algo, best complexity will be

### Searching a sorted array
= O(log(n)) - Already soprted array and finding someting inside it.


# Space Complexity

	- How much more memory is required by doubling the problem set?
	- Generally you can apply the same rules as runtime complexity.
	- Reversing a string is a great example, every additional charc added to result set, was one to one mapped.


# Data Structures

- Ways of organizing information with optimal 'runtime complexity' for adding or removing records.
- Javascript natively implements several data structures.
