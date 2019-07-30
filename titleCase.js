// Create a function that converts a string to titleCase
// Ex) 'this is titlecase' => 'This Is Titlecase'

const titleCase = str => {
  // Code goes here ...
}

const assert = require('assert');
const tests = () => {
  try {
    assert(titleCase('') === '');
    assert(titleCase('Already Done') === 'Already Done');
    assert(titleCase('not already done') === 'Not Already Done');
    assert(titleCase('woah, this has a comma') === 'Woah, This Has A Comma');
    assert(titleCase('wOah, tHIs iS WeiRd') === 'Woah, This Is Weird');
    console.log('All tests passed!');
  } catch(e) {
    console.log(e.message);
  }
};
tests();
