// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.
// Note: if looping is needed, use only primitive for/while/do-while loop  ( forearch, map, etc are not allowed).

const CheckPrimes = (arr) => {
  const primes = [];
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;

    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && arr[i] > 1) {
      primes.push(arr[i]);
    }
  }
  console.log(primes);
  return primes;
};

CheckPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

module.exports = CheckPrimes;