// Keep every promise you make and only make promise you can keep

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    /* eslint-disable */
    if (true) {
      resolve();
    } else {
      reject();
    }
    /* eslint-enable */
  });
}

export default getResponseFromAPI;
