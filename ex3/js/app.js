// Bài 1
let atr=prompt("Enter a sequence of number, separated by commas (,) ").split(",");
// alert(arr1[1]);
let  s=0;  
for(var i=0;i<atr.length;i++)
{
    s+=Number(atr[i]);
}
alert(`The sum of them is ${s}`);
