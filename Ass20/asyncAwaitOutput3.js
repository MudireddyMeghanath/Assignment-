

// Second f1() function overrides the first one
async function f1() {
  console.log(1);
}
async function f1() {
  console.log(2);
}
console.log(3); // First
f1(); // Second
console.log(1); // Third
f2(); // Fourth
async function f2() {
  console.log("Go!");
}
