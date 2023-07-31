/*
# Print the following pattern :

    *
   ***
  *****
 *******   
*********
 
*/
let n = 8;
for (let i = 1; i <= n; i++) {
  let str = "";
  spaces = n - i;
  for (let j = 1; j <= spaces; j++) {
    str += " ";
  }
  let stars = 2 * i - 1;
  for (let k = 1; k <= stars; k++) {
    str += "*";
  }
  console.log(str);
}
