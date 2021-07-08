// // kiểu dữ liệu Object (obj) 
// // -ứng dụng: dùng để lưu trữ những thông tin của một đối tượng nào đó 
// // ví dụ : my infor: name, age, address

// // 1. Cách khai báo 
// // cách 1
// // let myInfor = new Object('name: 'Phương Anh')
// // let myInfor = {
// //     name: 'lan anh',
// //     age: 20,
// //     address:'Ha Noi'
// // }  
// // console.table(myInfor)
// // console.log(myInfor);

// // ======== C,R,U,D==========
// // Create ====== C
// // Cách1
// // myInfor.email = "phamphuonganh@gmail.com";
// // Cách 2
// // let email = "phamphuonganh@gmail.com"
// // myInfor['email'] = email
// // console.table(myInfor)

// // ======Read========

// // console.table(myInfor.name)



// // let myInfor = {
// //     id:123,
// //     name: 'lan anh',
// //     age: 20,
// //     address:'Ha Noi',
// //     email:'phamlananh@gmail.com'
// // } 

// // dùng vòng for để in tất cả value của object
// // =======read all
// // for (const property in myInfor) {
// //     console.log(myInfor[property]);
// // }

// // ==========update=====U

// // myInfor.age = 21;
// // myInfor.email = 'lananh@gamil.com'
// // console.log(myInfor);


// // delete
// // let myInfor = {
// //     id:123,
// //     name: 'lan anh',
// //     age: 20,
// //     address:'Ha Noi',
// //     email:'phamlananh@gmail.com'
// // } 

// // delete myInfor.address
// // console.log(myInfor);



// // =============Bài tập+++++++
// // Cho người dùng nhập vào 4 chữ cái C / R / U / D:
// // C: Cho người dùng nhập vào tên và tuổi, thêm vào danh sách theo dạng object
// // và in ra để kiểm tra theo dạng console.table
// // R: In ra toàn bộ obj trong mảng theo dạng name - age VD: Cao -12
// // U: Cho người dùng nhập vào id muốn update, sau đó tìm kiêm trong mảng:
// // Nếu có: Cho nhập vào tên và sử lại sau đó in ra
// // Nếu không có: Id có đâu mà đòi update
// // D: Tương tự như update:
// // Nếu có: thì xóa user by id
// // Nếu không: User not found



// // let ch = prompt("nhập vào 4 chữ cái C/ R/ U/ D")
// // let infor = {};

// // if (ch == "C") {
// //     let name = prompt("Nhập vào tên của bạn")
// //     let age = prompt("Nhập vào tuổi của bạn")
// //     infor.id = 1;
// //     infor.name = name;
// //     infor.age = age;

// //     console.table(infor);
// // }
// // else if (ch == "R") {
// //     let str = "";
// //     for (const key in infor) {
// //         str += infor[key];
// //     }
// //     console.table(str);
// // }
// // else if (ch == "U") {
// //     let id = prompt("Nhập vào  id của bạn: ");
// //     if (infor['id'] == id) {
// //         infor.id = id;
// //     }
// //     else {
// //         console.table("bạn có id đâu mà update");
// //     }
// // }
// // else if(ch == "D"){
// //     let id = prompt("Nhập vào  id của bạn: ");
// //     if (infor['id'] == id) {
// //         delete infor.id;
// //     }
// //     else {
// //         console.table("Không tìm thấy");
// //     }
// // }

// let userList = [{
//     id: 1,
//     name: 'lan anh',
//     age: 20,
// },
// {
//     id: 2,
//     name: 'lan anh',
//     age: 20,
// }
// ]

// let loop = true;
// // while(loop){
// let userInput = prompt("Enter C, R, U, D");
// // console.table(userList);
// if (userInput == "C") {
//     let name = prompt("Enter your name");
//     let age = Number(prompt("Enter your age"));
//     let id = userList.length + 1;
//     let newObj = {
//         id: id,
//         name: name,
//         age: age
//     }
//     userList.push(newObj);
//     console.table(userList)
// } else if (userInput == "R") {
//     for(let i =0 ; i<userList.length; i++){
//         console.log(`${userList[i].name} - ${userList[i].age}`);
//     }

// } else if (userInput == "U") {
//     let idInput = prompt('Enter your id')
//     for(let i = 0; i<userList.length; i++){
//         if(idInput == userList[i].id){
//             let newName = prompt("Enter your name: ")
//             let newAge = prompt("Enter your age")
//             userList[i].name = newName;
//             userList[i].age= newAge;
//             log(userList);
//         }
//     }
// } else if (userInput == "D") {

// }

// // }

// ============ Hàm========= Function++++
// function demo(){

// }
//1. Hàm là gì
// khối mã
// làm việc cụ thể 
// 2. loại hàm 
// -tự định ngĩa
// 3. tính chất của hàm
// -không thực thi khi mình định nghĩa nó 
// -sẽ thực thi khi đucợ gọi 
// - trả về giá trị 
// -hàm có thể nhận tham số 

function sayhello(a,b){
    console.log(a,b);
}
sayhello(2,3);