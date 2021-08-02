const add = document.getElementById("add-btn")
add.onclick = function(){
    const input = document.getElementById("todo-content");
    const li = document.createElement("li");
    li.innerText = input.value;
    console.log(li.innerText);
    // let ul = document.getElementById("todo-list");
    // ul.appendChild(li)
}

// const mainForm = document.getElementById("main-form")
// mainForm.onsubmit = function (event) {
//     event.preventDefault();
//     const inputValue = mainForm.TodoContent.value;
//     if (inputValue !== null) {
//         const li = document.createElement("li");
     
//         li.innerText = inputValue;
//       const deleteBtn = document.createElement("button");
//       deleteBtn.innerHTML = "delete"
//       li.appendChild(deleteBtn);
//       deleteBtn.onclick = function(){
//           //Bước 1 Gọi li là cha trực tiếp của deletebtn đang được click
//         const deleteBtnParent = deleteBtn.parentElement;
//         // Bước 2: tiến hành xóa phần tử cha
//         deleteBtnParent.remove();
//       }
//         let ul = document.getElementById("todo-list");
//         ul.appendChild(li)
//         mainForm.TodoContent.value = ""
//     }
//     else{
//         alert("Hãy nhập giá trị rồi ấn add")

//     }

// }