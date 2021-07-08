// bài 1
let shopList = ['Jeans', 'T-Shirt', 'Socks'];
function show() {
    console.log("==========================");
    for (let i = 0; i < shopList.length; i++) {
        a = i+1;
        console.log(`${a}. ${shopList[i]}`);
    }
}

while (true) {
    let check = prompt("Hi three, welcome to shop admin panel, what do you want(c,r,u,d)");
    if (check == "c") {
        shopList.push(prompt("Enter the name of the new item"));

    }

    else if (check == "r") {
        alert("Done");
        show();
    }
    else if (check == 'u') {
        let update = Number(prompt("Enter the position you want to update"));
        alert("Done");
        update = update - 1;
        shopList[update] = prompt("Enter the new name");
    }
    else if (check == 'd') {
        let del = Number(prompt("Enter the position you want to delete"));
        del = del -1;
        shopList.splice(del, 1);
    }
    else if (check == 'esc') {
        break;
    }
    else {
        alert("this command is not supported")
    }
}
