// returns a string of all the set values that start with a specific string

const cleanSet = (set, startString) => {
  const str = [];

  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      str.push(item.slice(startString.length));
    }
  }

  return str.join('-');
};

export default cleanSet;
