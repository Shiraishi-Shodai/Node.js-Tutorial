const fs = require("fs");

const writeFile = (i) => {
  if (i >= 100) {
    return;
  }

  const text = `write ${i}`;
  fs.writeFile("./data.txt", text, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(i);
    writeFile(i + 1);
  });
};

writeFile(0);
