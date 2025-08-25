# Definition:- 
A nested loop means a loop inside another loop.
|> The outer loop runs first.
|> For each iteration of the outer loop, the inner loop runs completely.
This is often used for working with tables, matrices, patterns, or complex data structures.

# example
for (let i = 1; i <= 3; i++) {   // outer loop
  for (let j = 1; j <= 3; j++) { // inner loop
    console.log(`i = ${i}, j = ${j}`);
  }
}

output:- 
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3

