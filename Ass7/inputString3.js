

let replaceStr = (S) => {
  try {
    let strArr = S.toString().split(" ");
    const str1 = strArr[1];
    const str2 = strArr[0];
    return str1.concat(" ").concat(str2);
  } catch (error) {
    return `Something went wrong, ${error.message}`;
  }
};

var output = replaceStr("Hii Boy");
console.log(output);
var output = replaceStr("Nice Day");
console.log(output);
