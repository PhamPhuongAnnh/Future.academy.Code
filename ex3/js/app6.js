
// Bài 6
let atr=prompt("Enter a sequence off name").split(",");
let atr1=[];
for(let i=0;i<atr.length;i++)
{
    if(atr[i]%2 !=0){
        atr1[i] = atr[i];
    }
}
alert(`${atr} => ${atr1}`);
