var myFunction = (function() {
  return function(things) {
    if (!(things instanceof Array)) {
      things = things.split(' ');
    }

    var result = [];

    outer:
    for (var i = 0; i < things.length; i++) {
      var thing = things[ i ];
      var len = result.length;
      var index = 0;

      inner:
      for (var j = 0; j < result.length; j++) {
        if (thing.length === result[ j ].length) {
          if (result[ j + 1] && result[ j ].length === result[ j + 1 ].length) {
            continue inner;
          }
          index = j + 1;
          break inner;
        } else if (thing.length < result[ j ].length) {
          index = j;
          break inner;
        } else {
          index = i;
        }
      };

      result.splice(index, 0, thing);
    }

    return result;
  };
})();

const assert = require('assert');
const tests = () => {
  try {
    // Fill in "result" to make these tests pass
    assert.deepStrictEqual(myFunction('The lost boy quickly ran home'), result);
    assert.deepStrictEqual(myFunction(['one', 'two', 'three', 'four', 'five', 'six']), result);
    console.log('All tests passed!');
  } catch(e) {
    console.log(e.message);
  }
};
tests();
