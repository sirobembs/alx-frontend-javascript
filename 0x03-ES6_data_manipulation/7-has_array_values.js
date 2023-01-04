// eturns a boolean if all the elements in the array exist within the set.

const hasValuesFromArray = (set, array) => {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }

  return true;
};

export default hasValuesFromArray;
