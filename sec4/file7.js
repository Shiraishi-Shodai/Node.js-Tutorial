const { readFile, writeFile, chmod } = require("fs");

const backupFile = `${__filename}-${Date.now()}`;

const readFileAsync = () => {
  return new Promise((resolve, reject) => {
    readFile(__filename, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const writeFileAsync = (path, data) => {
  return new Promise((resolve, reject) => {
    writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
};

const chmodAsync = (path, data) => {
  return new Promise((resolve, reject) => {
    chmod(path, 0o400, (err) => {
      if (err) {
        reject(err);
      }
      console.log("done");
      resolve();
    });
  });
};

readFileAsync()
  .then((data) => writeFileAsync(backupFile, data))
  .then((data) => chmodAsync(backupFile))
  .catch((error) => console.log(error));
