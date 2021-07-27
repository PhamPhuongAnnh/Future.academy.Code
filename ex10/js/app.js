// bài 1

let btn1 = document.getElementById("btn1");
let ss1 = document.getElementById("lesson1");
let box1 = document.getElementById("box1");
let p = document.getElementsByClassName("txt1");
btn1.onclick = function () {
    if (box1.style.display == 'none' && p[0].style.display == 'none') {
        box1.style.display = 'flex'
        p[0].style.display = 'flex'

    } else {
        box1.style.display = 'none'
        p[0].style.display = 'none'
    }

}

// Bài tập số 2
function colors() {
    let colorArray = [];

    for (let i = 0; i < 3; i++) {
        colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    // rgb -> hex
    let color = colorArray
        .map(x => x.toString(16))
        .join('');

    return `#${color}`;
}

let btn2 = document.getElementById("btn2");
let ss2 = document.getElementById("lesson2");
let box2 = document.getElementById("box2");
let p2 = document.getElementsByClassName("txt2");
btn2.onclick = function () {
    box2.style.backgroundColor = colors();
}

// bài tập số 3
let btn3 = document.getElementById("btn3");
let ss3 = document.getElementById("lesson3");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let p3 = document.getElementsByClassName("txt3");
let p4 = document.getElementsByClassName("txt4");

btn3.onclick = function () {
    let tem = p3[0].innerText;
    p3[0].innerText = p4[0].innerText;
    p4[0].innerText = tem;
}

// Bài tập số 4
let btn4 = document.getElementById("btn4");
let box5 = document.getElementById("box5");
let size = 15;

btn4.onclick = function () {
    size += 1;
    box5.style.fontSize = size + "px";
}