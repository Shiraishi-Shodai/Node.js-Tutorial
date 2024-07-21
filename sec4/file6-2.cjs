const promiseX = (x) => {
  return new Promise((resolve, reject) => {
    if (typeof x === "number") {
      resolve(x);
    } else {
      reject(new Error("return error"));
    }
  });
};

promiseX(10)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
