const { readFile } = require("fs");

try {
  readFile("error.txt", (err, data) => {
    // if (err) {
    //   console.error(`err1: ${err}`);
    //   return;
    // }

    console.log(data);
  });
} catch (err2) {
  console.error(`err2: ${err2}`);
}
