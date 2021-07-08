// 1. tạo mảng
// -cách tạo 2 cách 
// let languages = new Array("css", "html")
// let laguages1 = ["css", "html"]

//  Cách sử dụng 
// đucợ dùng để lưu một danh sách các phần tử giống nhau 
// kiểm tra datatype
// console.log(laguages1);
// console.log(Array.isArray(languages));


// kiểu dũ liệu 
// -Kiểu nguyên thủy (Number, String, boolean)
// -kiểu đối tượng(Array object)

// let a =1; let b = 1;
// console.log(a === b);
// name | value
// a       1
// b       1

// let c = []
// let d = []
// console.log(c === d);

// name | address  | value 
// c       ạdjd         1 
// d       dddd         1



// 2. Cách truy xuất mảng 
// Cách gọi phân tử trong mảng 
// let arr = [1,2,4,56,6];
// console.log(arr[0]);
// -cách lấy độ dài của mảng arr.length
// console.log(arr[arr.length-1]);

// -lấy phần tử theo chỉ số index

// C/R/U/D(Create, Read, Update, Delete)
// Bài 1: sử dụng vòng lặp in ra tất cả các phần tử trong mảng
// let arr = [1,2,3,4,5,6];
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// update
// arr[3] = 9;
// console.log(arr);

// Create
// thêm vào cuối mảng ==== push
// arr.push(4);
// console.log(arr);
// thêm vào đầu mảng
// arr.unshift(0);
// console.log(arr);

// Delete
// xóa phần tử cuối của mảng  --- pop
// arr.pop();
// console.log(arr);

// xóa phần tử đầu tiên shift
// arr.shift();
// console.log(arr);

// xóa một phần tử bất kì -- splice
// arr.splice(1, 4) // vị trí index, số lượng phần tử xóa  
// console.log(arr);


// Bài 2. tạo  1 arr, xóa phần tử cuối vào phần tử đầu arr đó 
// -sửa phần tử bất kì

// let arr = ["Phương Anh", "Phương Lan", "Hoàng", "Lan"];
// arr.pop();
// console.log(arr);
// arr.splice(2,1,"Hoàng Phương Lan")
// console.log(arr);


// 1. cho người dùng nhập vào 4 thao tác C/R/U/D

// C - nhập nội dung mới vào todo list và push nó vào cuối mảng và
let arr=[];
let n = Number(prompt("Nhập số phần tử bạn muốn nhập: "))
for(let i =0; i<n; i++){
    arr[i] = prompt();
}


// // in ra màn hình toàn bộ todo list hiện tại
console.log("Mảng vừa nhập");
console.log(arr);


// // R - in ra toàn bộ phần tử có trong mảng
console.log("Tất cả các phần tử có trong mản hiện tại");
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}


// // U - hỏi người dùng index của phần tử muốn update cho người dùng nhập vào 
let e = prompt("nhập index phần tử muốn update cho người dùng nhập vào");

// // nội dung update và in ra màn hình toàn bộ phần tử của mảng
arr[e] = prompt("giá trị của phần tử update");
console.log("Mảng sau khi update");
console.log(arr);
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// // D - hỏi người dùng index của phần tử muốn xóa và in ra toàn bộ phần tử trong mảng
let b = prompt("nhập index phần tử muốn xóa cho người dùng nhập vào");
arr.splice(b,1);
console.log("Mảng sau khi đã xoa");
console.log(arr);
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// Bài chữa
let user = prompt("nhập vào C/R/D,U").toLocaleLowerCase();
let arr = ["phương", "Lan", "Hoàng"];
if(user === "C"){
    let create = prompt("Nhập Phần tử: ");
    arr.push(create);
    console.log(arr);
}
else if(user === "R"){
    console.log(arr);
}
else if (user == "U"){
    
}

// Bài 2

// C - nhập nội dung mới vào todo list và push nó vào cuối mảng và
let arr=[];
let t;



// // in ra màn hình toàn bộ todo list hiện tại
console.log("Mảng vừa nhập");
console.log(arr);


// // R - in ra toàn bộ phần tử có trong mảng
console.log("Tất cả các phần tử có trong mản hiện tại");
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}


// // U - hỏi người dùng index của phần tử muốn update cho người dùng nhập vào 
let e = prompt("nhập index phần tử muốn update cho người dùng nhập vào");

// // nội dung update và in ra màn hình toàn bộ phần tử của mảng
arr[e] = prompt("giá trị của phần tử update");
console.log("Mảng sau khi update");
console.log(arr);
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// // D - hỏi người dùng index của phần tử muốn xóa và in ra toàn bộ phần tử trong mảng
let b = prompt("nhập index phần tử muốn xóa cho người dùng nhập vào");
arr.splice(b,1);
console.log("Mảng sau khi đã xoa");
console.log(arr);
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

