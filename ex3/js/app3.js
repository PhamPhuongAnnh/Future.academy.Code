
// Bài 3
// sử dụng hàm có sẵn let index = arr.indexOf(number);
// if(index === -1){
//     alert(`${findNumber} is NOT Found in my array`)
// }
// else{
//     alert(`${findNumber} is Found in my array at index ${index}`)

// }
let a= [3,4,6,-9,20,,-88,10];
let findNumber = Number(prompt("Enter a number"));
// let flag = 0;
let check = false;
let index = 0;
for(let i=0; i<a.length; i++){
    if(Number(a[i] )== findNumber){
       check = true;
        index = i;
    }
}
if(check = true){
        alert(`${findNumber} is Found in my array at index ${index}`)
   }
else{
    alert(`${findNumber} is NOT Found in my array`)
}
