

function OuterFunction() {
  var outerVariable = 100;
  function InnerFunction() {
    alert(outerVariable);
  }
  return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

/*
    2. What is the difference between a closure and a scope ?
       ==> A closure has the outer function as the scope, but the scope define the boundarie of the visibility of variables,
       it can be global (When using var keyword) for one or many instructions's bloc or local (When using let or const) for
       a specific instruction's bloc (It can also include many bloc if the variable is outside of them). 
*/

/*
    3. What is a lexical scope and how is it related to closure?
    ==> The lexical scope define the process JavaScript determine the scope during runtime and it is related to closure because
    the scope of inner function is determine during runtime 
*/

/*
    4. Output of following closure ?
    ==> It log 3 (Because the loop has completed very quickly before one second and reach the value three) 
    thee times after one second.
*/

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
