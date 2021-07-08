// Câu 1

let productList = [
    {
        id: 1,
        Name: "áo phông",
        Brand: "Phương Lan Phạm",
        Price: 100000,
        Color: "Trắng",
        Catregory: "Quần áo"
    },
    {
        id: 2,
        Name: "IPhone X",
        Brand: "VSmart",
        Price: 1000000,
        Color: "Đen",
        Catregory: "Điện thoại"
    },
    {
        id: 3,
        Name: "Áo khoác",
        Brand: "Phương Lan Phạm",
        Price: 1000000,
        Color: "Hồng",
        Catregory: "Quần áo"
    },
    {
        id: 4,
        Name: "Samsung J2",
        Brand: "+SamSung",
        Price: 10000000,
        Color: "xanh",
        Catregory: "Điện thoại"
    }
];
console.table(productList);

// 1.1
for (let i = 0; i < productList.length; i++) {
    console.log("======================================");
    console.log(`Name: ${productList[i].Name}`);
    console.log(`Price: ${productList[i].Price}`);
}
// 1.2

alert(` #1.áo phông"\n#2. IPhone X\n#3. Áo khoác\n#4.SamSung j2`);
let checkiD = Number(prompt("Enter product position:"))
console.log("===============================================");
console.log(`Name: ${productList[checkiD].Name}\n
Brand: ${productList[checkiD].Brand}\n
Price: ${productList[checkiD].Price}\n
Color: ${productList[checkiD].Color}\n
Category: ${productList[checkiD].Catregory}`);

// 1.3
let checkCatrgory = prompt("Enter your category");
for (let i = 0; i < productList.length; i++) {
    if (productList[i].Catregory == checkCatrgory) {
        console.log("=====================================");
        console.log(`Name ${productList[i].Name}`);
        console.log(`Price ${productList[i].Price}`); 
    }
}

// 1.4
for (let i = 0; i < productList.length; i++) {
    if(productList[i].Catregory == "Quần áo"){
        productList[i]['Providers'] = "Phukenzero"
    }
    else{
        productList[i]['Providers'] = "tgdd"
    }
}
// 1.5
let checkProviders = prompt("Enter provider");
for (let i = 0; i < productList.length; i++) {
    if (productList[i].Providers ==  checkProviders) {
        console.log("=====================================");
        console.log(`Name: ${productList[i].Name}\nBrand: ${productList[i].Brand}\nPrice: ${productList[i].Price}\nColor: ${productList[i].Color}\nCategory: ${productList[i].Catregory}\nProviders: ${productList[i].Providers}`);
    }
}

