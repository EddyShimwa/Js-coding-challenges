function isPrime(n) {
    if (n <= 1) return false; 
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false; 
    }
    return true;
}

function customSorting(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
  
    return filteredArr;
}

console.log(customSorting([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
