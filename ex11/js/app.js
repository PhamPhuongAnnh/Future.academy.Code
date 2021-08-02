const add = document.getElementById("add-btn");
let check = 0;
// while (true) {

add.onclick = function () {
    if (check % 2 == 0) {
        const input = document.getElementById("todo-content");
        if (input.value) {
            const li = document.createElement("li");
           
            // console.log(icon);
            li.innerText = input.value;
            const deleteInput = document.createElement("a");
            deleteInput.innerText = "X";
            li.appendChild(deleteInput);
            deleteInput.onclick = function () {
                const deletePS = deleteInput.parentElement;
                deletePS.remove();
            }
            let ul = document.getElementById("todo-list");
            li.style.background = "gray"
            li.style.color = "white"
            li.style.fontSize = "30px"
            li.style.padding = "10px 10px 10px 10px"
            ul.style.padding = "0"
            li.style.display = "flex"
            li.style.justifyContent = "space-between"
            li.onclick = function () {
                if (li.style.textDecoration == 'line-through') {
                    li.style.textDecoration = "none"
                    deleteInput.style.textDecoration = "none"
                    const icon = `<i class="fas fa-check"></i>`
                    li.innerHTML = icon + input.value + deleteInput;
                }
                else {
                    li.style.textDecoration = "line-through"
                    const createIcon = document.createElement("a");
                    const a = getSelection(a);
                    deleteInput.style.textDecoration = "none"
                }
            }
            ul.appendChild(li)
        } else {
            alert("Hay nhập thông tin muốn thêm vào ô Enter Content ........ ");
        }
        check++;
    }
    else {
        check++;
        const input = document.getElementById("todo-content");
        if (input.value) {
            const li = document.createElement("li");
            li.innerText = input.value;
            const deleteInput = document.createElement("a");
            deleteInput.innerText = "X";
            li.appendChild(deleteInput);
            deleteInput.onclick = function () {
                const deletePS = deleteInput.parentElement;
                deletePS.remove();
            }
            let ul = document.getElementById("todo-list");
            li.style.background = "yellow"
            li.style.fontSize = "30px"
            li.style.padding = "10px 10px 10px 10px"
            ul.style.padding = "0"
            li.style.display = "flex"
            li.style.justifyContent = "space-between"
            li.onclick = function () {
                if (li.style.textDecoration == 'line-through') {
                    li.style.textDecoration = "none"
                    const chose = document.createElement("i");

                    
                }
                else {
                    li.style.textDecoration = "line-through"
                    deleteInput.style.textDecoration = "none";

                }
            }
            ul.appendChild(li)
        } else {
            alert("Hay nhập thông tin muốn thêm vào ô Enter Content ........ ");
        }
    }
    // }    
}
