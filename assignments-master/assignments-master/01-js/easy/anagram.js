/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  const formattedStr1 = str1.replace(/\s/g, '').toLowerCase();
  const formattedStr2 = str2.replace(/\s/g, '').toLowerCase();

  // Sort characters in both strings and compare them
  const sortedStr1 = formattedStr1.split('').sort().join('');
  const sortedStr2 = formattedStr2.split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

// Using CommonJS syntax (module.exports)
module.exports = isAnagram;

//calling the function to verify 
str=isAnagram("listen","silent");
console.log(str);
