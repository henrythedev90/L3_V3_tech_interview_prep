// Reverse a string
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// Find max in array
function findMax(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

// Check if palindrome
function isPalindrome(word) {
  let right = word.length - 1;
  let left = 0;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = { reverseString, findMax, isPalindrome };
