let text_dropdown1 = document.getElementById("dropdown1");
let text_dropdown2 = document.getElementById("dropdown2");
let text_dropdown3 = document.getElementById("dropdown3");
let text_dropdown4 = document.getElementById("dropdown4");
let text_dropdown5 = document.getElementById("dropdown5");

let box_item1 = document.getElementById("item1");
let box_item2 = document.getElementById("item2");
let box_item3 = document.getElementById("item3");
let box_item4 = document.getElementById("item4");
let box_item5 = document.getElementById("item5");

text_dropdown1.onclick = function () {  
    if (box_item1.style.display == 'none') { 
        box_item1.style.display = 'flex'
        box_item2.style.display = 'none'
        box_item3.style.display = 'none'
        box_item4.style.display = 'none'
        box_item5.style.display = 'none'
    } 
}
text_dropdown2.onclick = function () {  
    if (box_item2.style.display == 'none') { 
        box_item2.style.display = 'flex'
        box_item1.style.display = 'none'
        box_item3.style.display = 'none'
        box_item4.style.display = 'none'
        box_item5.style.display = 'none'
    }
}
text_dropdown3.onclick = function () {  
    if (box_item3.style.display == 'none') { 
        box_item3.style.display = 'flex'
        box_item2.style.display = 'none'
        box_item1.style.display = 'none'
        box_item4.style.display = 'none'
        box_item5.style.display = 'none'
    } 
}
text_dropdown4.onclick = function () {  
    if (box_item4.style.display == 'none') { 
        box_item4.style.display = 'flex'
        box_item2.style.display = 'none'
        box_item3.style.display = 'none'
        box_item1.style.display = 'none'
        box_item5.style.display = 'none'
    } 
}
text_dropdown5.onclick = function () {  
    if (box_item5.style.display == 'none') { 
        box_item5.style.display = 'flex'
        box_item2.style.display = 'none'
        box_item3.style.display = 'none'
        box_item4.style.display = 'none'
        box_item1   .style.display = 'none'
    }   
}