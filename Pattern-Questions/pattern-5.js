/*   
# Print the following patterns :- 

*****
****
***
**
*

*/

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= n - i + 1; j++) {
    str += "*";
  }
  console.log(str);
}
