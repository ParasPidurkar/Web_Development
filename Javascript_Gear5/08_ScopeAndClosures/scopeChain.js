// 1. In the local scope
// 2. Any outer functions
// 3. Global scope

let age = 10;

function outer() {
  //   let age = "ageless";
  function inner() {
    // let age = "Eternal";
    function superInner() {
      console.log(age);
    }
    superInner();
  }
  inner();
}
