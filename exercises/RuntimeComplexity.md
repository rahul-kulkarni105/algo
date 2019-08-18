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