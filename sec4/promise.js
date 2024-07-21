const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
};

delay()
  .then(() => {
    console.log("A");
    return delay();
  })
  .then(() => {
    console.log("B");
    return delay();
  })
  .then(() => {
    console.log("C");
  });
