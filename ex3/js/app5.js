// Bài 5

let atr=prompt("Enter a sequence off name").split(",");
let atr1=[];
for(let i=0;i<atr.length;i++)
{
    
    atr1.push(`< ${atr[i]} >`);
}
alert(`${atr} => ${atr1}`);

