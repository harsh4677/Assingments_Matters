/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  const lowercasedStr = str.toLowerCase();

  // Remove non-alphanumeric characters using regular expression
  const cleanedStr = lowercasedStr.replace(/[^a-z0-9]/g, '');

  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

module.exports = isPalindrome;
