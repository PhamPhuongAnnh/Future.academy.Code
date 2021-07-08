
// Bài 2
let atr=prompt("Enter a sequence of number, separated by commas (,) ").split(",");
// let min = Number(atr[0]);
// for(var i=0;i<atr.length;i++)
// {
//     if(Number(atr[i])<min){
//         min = a[i];
//     }
// }
// alert(`The smallest number is ${min}`);

var min = Math.min(atr);
alert(min);