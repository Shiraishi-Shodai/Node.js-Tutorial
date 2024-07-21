const { readFile, writeFile, chmod } = require("fs");

const backupFile = `${__filename}-${Date.now()}`;

readFile(__filename, (err, data) => {
  if (err) {
    return console.log(err);
  }

  writeFile(backupFile, data, (err) => {
    if (err) {
      return console.log(err);
    }

    chmod(backupFile, 0o400, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("done");
    });
  });
});
