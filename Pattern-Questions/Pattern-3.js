// # Print the below star pattern

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  let space = n - i;
  // concatinate " " to str
  for (let j = 1; j <= space; j++) {
    str += " ";
  }
  // concatinate * to the str
  for (let k = 1; k <= i; k++) {
    str += "*";
  }
  console.log(str);
}

// ---------------------------------------------
