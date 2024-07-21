const promiseA = new Promise((resolve, reject) => {
  resolve("return data");
});

const promiseB = new Promise((resolve, reject) => {
  reject(new Error("return error"));
});

promiseA.then((data) => console.log(data));
promiseB.catch((data) => console.log(data));
console.log("done");
