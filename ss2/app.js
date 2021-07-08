// // Bài 1 Cho người dùng nhập vào 1 số in ra số đó là chẵn hay lẻ  âm hay dương
// let n = Number(prompt("Enter Number"));
// if(n %2 == 0){
//     if(n<0){
//         alert("Số " + n + " là số âm chẵn");
//     }
//     else {
//         alert("Số " + n + " là số dương chẵn");
        
//     }
// }
// else{
//     if(n<0){
//         alert("Số " + n + " là số âm lẻ");
//     }
//     else {
//         alert("Số " + n + " là số dương lẻ");
        
//     }
   
// }

// // bài số 2: cho người dùng nhập vào tuổi nếu <10 in ra đang học cấp 1
// // >10 <15 đang học cấp 2
// // >=15 <=18 đang học cấp 3
// // >18 in ra học làm gì 

// let b = Number(prompt("Enter your age: "));
// if(b <10){
//     alert("Đang học cấp 1");
// }
// else if(b<15)
// {
//     alert("Đang học cấp 2");
    
// }
// else if(b<18)
// {
//     alert("Đang học cấp 3");
    
// }
// else {
//     alert("bạn đã trưởng thành");
// }

// cho người dùng nhập qua vòng lặp in ra từ 1 đến 10 
// in ra các số từ 1 đến 10 chia hết cho 2
let i = 0; 
console.log("số chia hết cho 2");
while (i>0 && i<=10)
{
   
    if(i %2 == 0){
        console.log(i);
    }
    i++;
}
let k = 0;
 console.log("số chia hết cho 4");
while (k>0&&k<=20)
{
   
    if((k>0 && k<=20) && k %4 == 0){
        console.log(k);
    }
    k++;
}
let l = 0;
 console.log("số chia hết cho  3 5 ");
while (l>0&&l<=50)
{
   
    if(l %3 == 0|| l %5 == 0){
        console.log(l);
    }
    l++;
}
