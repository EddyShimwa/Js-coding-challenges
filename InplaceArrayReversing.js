// Write a Javascript function that takes an array of numbers and return a reversed version. Note: here you are not allowed to use an intermediary array. You need to use the same array passed in the parameter and just reverse its content. Do not use inbuilt functions like reverse(). Just use loops and conditions.

const reverseArr = (arr) => {
    let left = 0;
    let right = arr.length - 1;
  
    while(left < right) {
      let temp = arr[left]
  
      arr[left] = arr[right]
      arr[right] = temp
  
      left++
      right--;
    }
    return arr
  }
  
  
  console.log(reverseArr([1, 2, 3, 4, 5, 6, 3, 8]))

  module.exports = reverseArr;