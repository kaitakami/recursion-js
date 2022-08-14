// Iteration

const fibonacciIteration = number => {
  let result = []
  for (let i = 0; i < number; i++) {
    if (i != 0 && i != 1) {
      result[i] = result[i - 1] + result[i - 2]
    } else {
      result.push(i)
    }
  }
  return result
}


// Recursive case

const fibonacciRecursive = (n, arr = [0, 1]) => {
  if (n <= 2) {
    return arr.slice(0, n)
  } else if (n > arr.length) {
    return [...fibonacciRecursive(n - 1), fibonacciRecursive(n - 1)[n - 2] + fibonacciRecursive(n - 1)[n - 3]];
  }
}
