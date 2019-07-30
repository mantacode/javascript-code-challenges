const myFunction = items => {
  items = Array.isArray(items) ? items : items.split(' ');
  return items.reduce((result, item) => {
    result[ item.length ] = result[ item.length ] || 0;
    result[ item.length ]++;
    return result;
  }, {});
};

const assert = require('assert');
const tests = () => {
  try {
    // Fill in "result" to make these tests pass
    assert.deepStrictEqual(myFunction('The lost boy quickly ran home'), result);
    assert.deepStrictEqual(myFunction(['one', 'two', 'three', 'four', 'five', 'six']), result);
    console.log('All tests passed!');
  } catch (e) {
    console.log(e.message);
  }
};
tests();
