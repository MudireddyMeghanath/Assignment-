


const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Execution completed with a promise after a delay of 1sec");
    }, 1000);
  });
};

delay().then((result) => {
  console.log(result);
});
