// Create a function that tests if two strings are anagrams
// Anagrams are words that have the same letters in different places
// Ex) I am Lord Voldemort == Tom Marvolo Riddle, Elvis == Lives

const isAnagram = (strA, strB) => {
  // Code goes here ...
};

const assert = require('assert');
const tests = () => {
  try {
    assert(isAnagram('', ''));
    assert(isAnagram('I am Lord Voldemort', 'Tom Marvolo Riddle'));
    assert(isAnagram('Elvis', 'Lives'));
    assert(!isAnagram('nope', 'yep'));
    assert(isAnagram('The eyes', 'They see'));
    console.log('All tests passed!');
  } catch(e) {
    console.log(e.message);
  }
};
tests();

