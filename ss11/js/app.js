// const add = document.getElementById("add-btn")
// add.onclick = function(){
// //     //b1. lấy ra được input từ js
// //     const input = document.getElementById("todo-content");
// //    //b2. log ra ra giá trị onput bằng thuộc tính .value
// //     // console.log(input.value);
// //     // b3 tạo ra thẻ li
// //     const li = document.createElement("li");
// //     const li = document.createElement("li");
// //     // console.log(li);
// //     // b4 append nội dung cho li == input.value
// //     li.innerText = input.value;
// //     console.log(li.innerText);
// //     // bước 5: append li vào list ul
// //     let ul = document.getElementById("todo-list");
// //     ul.appendChild(li)



// }

const mainForm = document.getElementById("main-form")
mainForm.onsubmit = function (event) {
    event.preventDefault();
    const inputValue = mainForm.TodoContent.value;
    if (inputValue !== null) {
        const li = document.createElement("li");
     
        li.innerText = inputValue;
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "delete"
      li.appendChild(deleteBtn);
      deleteBtn.onclick = function(){
          //Bước 1 Gọi li là cha trực tiếp của deletebtn đang được click
        const deleteBtnParent = deleteBtn.parentElement;
        // Bước 2: tiến hành xóa phần tử cha
        deleteBtnParent.remove();
      }
        let ul = document.getElementById("todo-list");
        ul.appendChild(li)
        mainForm.TodoContent.value = ""
    }
    else{
        alert("Hãy nhập giá trị rồi ấn add")

    }

}