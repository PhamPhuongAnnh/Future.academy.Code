// // // Bài 1
// // let str = prompt("Nhập chuỗi cần đảo ngược");
// // let newStr="";
// // for(let i=str.length-1; i>=0; i--){
// //     newStr += str[i];

// // }
// // alert(newStr);

// // // bài 2
// // let str = prompt("Nhập chuỗi đầu vào cách nhau bởi dấu cách").toLowerCase().split(" ");
// // let s = "";

// // for(let i=0; i<str.length; i++){

// //     let newStr = str[i][0].charAt(0).toLocaleUpperCase()+str[i].slice(1);
// //     s+=" "+newStr;
// // }
// // console.log(s);

// // bài 3

let str = prompt("Nhập vào một  mảng").split(" ");
let newStr = [];
for(let i=0; i<str.length; i++){
    if(newStr.indexOf(str[i]) === -1){
        newStr.push(str[i]);
    }
}

alert(newStr);

// // bài 4

// let FutureAcademy = [
//     {
//         ten: "Phuong",
//         tuoi: 21,
//         mucLuong: 10000,
//         chucVu: "Nhan Vien",
//     },
//     {
//         ten: "Anh",
//         tuoi: 21,
//         mucLuong: 100000,
//         chucVu: "Pho Giam Doc",
//     },
//     {
//         ten: "Lan",
//         tuoi: 21,
//         mucLuong: 1000000,
//         chucVu: "Giam Doc",
//     }
// ]

// while (true) {
//     let check = prompt("Nhập chức năng U,C,R,D");
//     if (check == "U") {
//         let checkID =Number(prompt("Nhập id cần check"));
//         checkID = checkID -1;
//         let check1 = prompt("bạn muốn update thành phần nào")
//         if (check1 == "name") {
//             let newName = prompt("nhập tên cần update");
//             FutureAcademy[checkID].ten = newName;
//         }
//         else if (check1 == "tuoi") {
//             let newTuoi = prompt("Nhập tuổi cần update");
//             FutureAcademy[checkID].tuoi= newTuoi;
//         }
//         else if (check1 == "mucLuong") {
//             let newMucLuong = prompt("Nhập mức lương cần update");
//             FutureAcademy[checkID].mucLuong = newMucLuong;

//         }
//         else if (check1 == "chucVu") {
//             let newChucVu = prompt("Nhập chuc vu cần update");
//             FutureAcademy[checkID].chucVu= newChucVu;
//         }
//         else if (check1 == "all") {
//             let newName = prompt("nhập tên cần update");
//             let newTuoi = prompt("Nhập tuổi cần update");
//             let newMucLuong = prompt("Nhập mức lương cần update");
//             let newChucVu = prompt("Nhập chuc vu cần update");
//             FutureAcademy[checkID].ten = newName;
//             FutureAcademy[checkID].tuoi= newTuoi;
//             FutureAcademy[checkID].mucLuong = newMucLuong;
//             FutureAcademy[checkID].chucVu = newChucVu;
//         }

//     }
//     else if (check == "r"){
//         for (let i = 0; i < FutureAcademy.length; i++) {
//             console.log(`${FutureAcademy[i].ten}\n${FutureAcademy[i].tuoi}\n${FutureAcademy[i].mucLuong}\n${FutureAcademy[i].chucVu}\n`);
//         }
//     }
//     else if(check == "d"){
//         let checkID =Number(prompt("Nhập id  nhân viên cần xóa"));
//         checkID = checkID -1;
//         delete FutureAcademy[checkID];
//     }
//     else if (check == "c"){
//         let newName = prompt("nhập tên ");
//         let newTuoi = prompt("Nhập tuổi ");
//         let newMucLuong = prompt("Nhập mức lương ");
//         let newChucVu= prompt("Nhập chuc vu");
//         FutureAcademy[FutureAcademy.length] = {
//             ten: newName,
//             tuoi: newTuoi,
//             mucLuong: newMucLuong,
//             chucVu: newChucVu
//         }
//     }
//     else if(check == "esc"){
//         break;
//     }
// }

// // bài 5
// let d = Number(prompt("nhập vào ngày"))
// let m = Number(prompt("nhập vào tháng"))
// let y = Number(prompt("nhập vào năm"))
// function kiemtraNgayThang(d, m, y) {
//     if (y > 0) {
//         switch (m) {
//             case 1:
//             case 3:
//             case 5:
//             case 7: // thang 7 co 31 ngay nhe
//             case 8:
//             case 10:
//             case 12:
//                 if (d > 0 && d <= 31) {
//                     return true;
//                 }
//                 else {
//                     alert("không hợp lệ")
//                 }
//                 break;
//             case 2:
//                 if ((y % 4 == 0) && (y % 100 != 0) || y % 400 == 0) {
//                     if (d > 0 && d <= 29) {
//                         return true;

//                     }
//                     else {
//                         return false;

//                     }
//                 }
//                 else {
//                     if (d > 0 && d <= 28) {
//                         return true;


//                     }
//                     else {
//                         return false;


//                     }
//                 }
//                 break;
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 if (d > 0 && d <= 30) {
//                     return true;


//                 }
//                 else {
//                     return false;


//                 }
//                 break;
//             default:
//                 return false;


//         }
//     }
//     else return false;
// }
// function ngaySau(d, m, y) {
   
//         if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
//             if (d == 31) {
//                 if (m == 12) {
//                     d = 1;
//                     m = 1;
//                     y++;
//                 }
//                 else {
//                     d = 1;
//                     m++;
//                 }
//             }
//             else if (d > 0 && d < 31) {
//                 d++;
//             }
//             else return;
//         }
//         else if (m == 4 || m == 6 || m == 9 || m == 11) {
//             if (d == 30) {
//                 d = 1;
//                 m++;
//             }
//             else if (d > 0 && d < 30) {
//                 d++;
//             }
//             else return;
//         }
//         else if (m == 2) {
//             if ((y % 400 == 0 || (y % 100 != 0 && y % 4 == 0))) {
//                 if (d == 29) {
//                     d = 1;
//                     m++;
//                 }
//                 else if (d > 0 && d < 29) {
//                     d++;
//                 }
//                 else return;
//             }
//             else {
//                 if (d == 28) {
//                     d = 1;
//                     m++;
//                 }
//                 else if (d > 0 && d < 28) {
//                     d++;
//                 }
//                 else return;
//             }
//         }
//         alert(`Ngày kế tiếp là ${d} ${m} ${y}`);

    
// }
// function ngayTruoc(d,m,y){
//     if(m==1||m==5||m==7||m==8||m==10||m==12)
//     {
//         if(d==1)
//         {
//             if(m==1)
//             {
//               d=31;
//                 m=12;
//                 y--;
//             }
//             else if(m==8){
//                 d=31;
//                 m--;
//             }
//             else {
//                 d = 30;
//                 m--;
//             }

//         }
//         else if(d>1&&d<=31)
//         {
//             d--;
//         }
//         else return;
//     }
//     else if(m==2||m==4||m==6||m==9||m==11)
//     {
//         if(d==1)
//         {
//             d=31;
//             m--;
//         }
//         else if(d>1&&d<=30)
//         {
//             d--;
//         }
//         else return;
//     }
//     else if(m==3)
//     {
//         if((y % 400 ==0 || (y % 100 != 0 && y % 4 == 0)))
//         {
//             if(d==1)
//             {
//                 d=29;
//                 m--;
//             }
//             else if(d>1&&d<=29)
//             {
//                 d--;
//             }
//             else return;
//         }
//         else
//         {
//             if(d==1)
//             {
//                 d=28;
//                 m--;
//             }
//             else if(d>1&&d<=28)
//             {
//                 d--;
//             }
//             else return;
//         }
//     }



//     alert(`Ngày truoc là ${d} ${m} ${y}`);

// }

// if(kiemtraNgayThang(d,m,y)==true){
//     alert("hợp lệ");
//     ngayTruoc(d,m,y);
//     ngaySau(d,m,y);
// }
// else(
//     alert("không hợp lệ")
// )