// document.querySelector("button").addEventListener(
//     "click",
//     (function () {
//       let count = 0;
//       return function () {
//         count += 1;
//         console.log(`You clicked me ${count} times`);
//       };
//     })()
//   );

function createCounterButton(id) {
  const btn = document.getElementById(id);
  let count = 0;
  btn.addEventListener("click", function () {
    count += 1;
    btn.innerText = `Clicked ${count} times`;
  });
}

createCounterButton("btn1");
createCounterButton("btn2");
createCounterButton("btn3");
