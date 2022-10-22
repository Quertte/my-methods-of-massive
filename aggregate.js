function sum(arrayNumbers, sum = 0) {
  return arrayNumbers.reduce((acc, current) => acc + current, sum);
}
