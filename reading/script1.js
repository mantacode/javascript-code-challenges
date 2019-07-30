const myFunction = items => {
  items = Array.isArray(items) ? items : items.split(' ');
  return items.reduce((result, item) => {
    result[ item.length ] = result[ item.length ] || 0;
    result[ item.length ]++;
    return result;
  }, {});
};
