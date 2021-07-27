// Dom là gì - Document object model
// console.log(document)

// query Html element

// getElementByID, getElementByClassName , getElementByTagName
// getElementByID
// let id = document.getElementById("header");
// console.log(id);
// // getElementByClassName 
// let class1 = document.getElementsByClassName("header1");
// for(let i =0; i<class1.length; i++){
//     console.log(class1[i]);
// }
// // getElementByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs);


// querySelector, querySelectorAll
// querySelector
// let header3 = document.querySelector("#header");
// let header4 = document.querySelector(".header1");
// console.log(header3);
// console.log(header4);

// querySelectorAll
// let header = document.querySelectorAll(".header1");
// console.log(header.length);
// console.log(header);

// basic DOM properties
// .innerTexxt không có khoảng trắng
// let header = document.getElementById("header")
// header.innerText = "Pham Phuong Anh"
// console.log(header.innerText);

// .textcontentcó tính khoảng trắng
// console.log(header.textContent)

// .innerHTML lấy toàn bộ nội dung bên trong các thẻ
// console.log(header.innerHTML)

// .styte
// header.style.backgroundColor = "red"
// header.style.color = "white"
// console.log(header.style)
// .children
// let ul = document.getElementById("list");
// let li = ul.children
// let li1 = li[0]
// parentElement
// console.log(li1.parentElement);
// .id, 
// console.log(li1.id);
// .classList
// ul.classList.add("header2");

// if(ul.classList.contains("header2")){
//     ul.classList.remove("header1");
// }

// console.log(ul.classList);
//  . add(), 
// .remove 
// .contains()

//base dom methoots
// createElement() tạo mới một thẻ li
// let ul = document.getElementById("list");
// console.log(ul);
// let li = document.createElement("li")
// li.innerText = "anh"
// console.log(li);
// //appendChidren()
// ul.appendChild(li)
// // remove()

// // setAtrubute
// ul.setAttribute("class", "header5")
// console.log(ul);


// even
// click
let btn = document.getElementById("click");
let ul = document.getElementById("list");
btn.onclick = function(){
    let li = document.createElement("li");
    li.innerText = "C";
    ul.appendChild(li);
}