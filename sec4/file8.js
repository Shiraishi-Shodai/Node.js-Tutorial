const { promisify } = require("util");
const { readFile, writeFile, chmod } = require("fs");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const chmodAsync = promisify(chmod);

const backupFile = `${__filename}-${Date.now()}`;

readFileAsync(__filename)
  .then((data) => writeFileAsync(backupFile, data))
  .then(() => chmodAsync(backupFile, 0o400))
  .catch((err) => console.log(err));
