
// Câu 2

console.log("=============2.1========================");
console.log("Hi there, this is your learning tasks to font-end deverloper career:");
let fontList = [
    {
        id: 1,
        program: "HTML",
        Complete: "false"
    },
    {
        id: 2,
        program: "CSS",
        Complete: "false"

    }, {
        id: 3,
        program: "Basics of JavaScript",
        Complete: "false"

    }, {
        id: 4,
        program: "Note Package Manager (npm)",
        Complete: "false"

    }, {
        id: 5,
        program: "Git",
        Complete: "false"
    }
]

for (let i = 0; i < fontList.length; i++) {
    console.log(`${fontList[i].id}. ${fontList[i].program}\n   ${fontList[i].Complete}\n`);
}


// 2.2

while (true) {

let check = prompt("Enter your command(New, delete, Update, Complete, esc, loggin)");
if (check === "new") {
    console.log("=================2.2===============");
    let newTask = prompt("Enter new task");
    let id = fontList.length + 1;
    let program = newTask;
    fontList[fontList.length] = {
        id: id,
        program: program,
        Complete: "false"
    }
    console.log("Hi there, this is your learning tasks to font-end deverloper career:");
    for (let i = 0; i < fontList.length; i++) {
        console.log(`${fontList[i].id}. ${fontList[i].program}\n   ${fontList[i].Complete}\n`);
    }
}
// 2.3
else if (check == "update") {
    console.log("=======================2.3============");
    let checkID = Number(prompt("Enter position:"));
    let newTitle = prompt("Enter new title");
    checkID = checkID - 1;
    fontList[checkID].program = newTitle;
    console.log("Hi there, this is your learning tasks to font-end deverloper career:");
    for (let i = 0; i < fontList.length; i++) {
        if (i == checkID + 1) {
            fontList[i].Complete = "true";
            console.log(`${fontList[i].id}. ${fontList[i].program}\n   ${fontList[i].Complete}\n`);
        }
        else {
            console.log(`${fontList[i].id}. ${fontList[i].program}\n   ${fontList[i].Complete}\n`);
        }

    }
    
}
else if (check == "complete") {
    console.log("================2.4===========");
    let checkID = Number(prompt("Enter position:"));
    checkID = checkID - 1;
    console.log("Hi there, this is your learning tasks to font-end deverloper career:");
    for (let i = 0; i < fontList.length; i++) {
        if (i == checkID) {
            fontList[i].Complete = "true";
            console.log(`${fontList[i].id}. ${fontList[i].program}\n   ${fontList[i].Complete}\n`);
        }
        else {
            console.log(`${fontList[i].id}. ${fontList[i].program}\n   ${fontList[i].Complete}\n`);
        }

    }
}
else if (check == "delete") {
    console.log("================2.5===========");
    let checkID = Number(prompt("Enter position:"));
    checkID = checkID - 1;
    delete fontList[checkID];
    console.log("Hi there, this is your learning tasks to font-end deverloper career:");
    for (let i = 0; i < fontList.length; i++) {
       
        if (i == checkID) {
            continue;
        } else {
            console.log(`${fontList[i].id}. ${fontList[i].program}\n   ${fontList[i].Complete}\n`);
        }

    }
}
else if (check == "esc"){
    break;
}
else if (check == "Loggin"){
    console.log("===================");
    for (let i = 0; i < fontList.length; i++) {
        if (fontList[i].Complete == "true") {
            console.log(`[x] ${fontList[i].program}\n`);
            
        } else {
            console.log(`[ ] ${fontList[i].program}\n`);
            
        }

    }
}
}