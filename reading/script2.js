var myFunction = (function() {
  return function(things) {
    if (!(things instanceof Array)) {
      things = things.split(' ');
    }

    var result = [];

    things.forEach(function(thing) {
      var len = result.length;
      var index = 0;
      for (var i = 0; i < len; i++) {
        if (thing.length === result[ i ].length) {
          if (result[ i + 1] && result[ i ].length === result[ i + 1 ].length) {
            continue;
          }
          index = i + 1;
          break;
        } else if (thing.length < result[ i ].length) {
          index = i;
          break;
        } else {
          continue;
        }
      }

      result.splice(index, 0, thing);
    });
  };
})();
