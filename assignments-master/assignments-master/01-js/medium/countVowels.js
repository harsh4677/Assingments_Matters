/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  const lowercasedStr = str.toLowerCase();

  // Use a regular expression to match vowels and count them
  const vowelCount = (lowercasedStr.match(/[aeiou]/g) || []).length;

  return vowelCount;
}

module.exports = countVowels;
