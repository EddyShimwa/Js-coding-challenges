
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
