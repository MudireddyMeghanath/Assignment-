

let replaceChar = (S) => {
  try {
    let str = S.toString().replace("a", "x"); // Replace first letter by the second in the string ('a' by 'x')
    return str;
  } catch (error) {
    return `Something went wrong, ${error.message}`;
  }
};

var output = replaceChar("“apple”");
console.log(output);
var output = replaceChar("peneaple");
console.log(output);
var output = replaceChar(null);
console.log(output);
