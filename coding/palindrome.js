// Create a function that tests if a string is a palindrome
// A palindrome is a string that is the same backwards and forwards
// Ex) racecar, taco cat

const isPalindrome = str => {
  // Code goes here ...
};

const assert = require('assert');
const tests = () => {
  try {
    assert(isPalindrome('racecar'));
    assert(isPalindrome('Racecar'));
    assert(!isPalindrome('Pizza Pie'));
    assert(isPalindrome('taco cat'));
    assert(!isPalindrome(''));
    console.log('All tests passed!');
  } catch(e) {
    console.log(e.message);
  }
};
tests();


