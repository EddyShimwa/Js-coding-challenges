// Write a function that takes a string and returns true/false based on whether it is a palindrome or not (you can use a dictionary to know what a palyndrom is

const palindromeCheck = (str) => {
  let isPalindrome = false;

  let splitedString = str.split("").join("");

  let reversedString = str.split("").reverse().join("");

  if (splitedString === reversedString) {
    isPalindrome = true;
  }

  console.log(isPalindrome);
  return isPalindrome;
};

palindromeCheck("madam");

module.exports = palindromeCheck;
