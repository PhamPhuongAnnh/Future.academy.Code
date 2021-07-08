// 1
function kiemTra(a) {
    console.log(a.startsWith("java"));
}

// 2
function findMaxDiff(arr)
{
    if(arr.length == 1 || arr.length == 0 )
        return 0;
    else
    {
        var max = Math.abs(arr[0]-arr[1]) ;
        for (let i = 0; i < arr.length-1; i++)
        {
            let s = 0;
             s = Math.abs(arr[i] - arr[i+1]);
            if (s > max)
                max = s;
        }
    }
    return max;
}

// 3
function first(arr,n){
    if(n<=arr.length){
        for(let i =0; i<n; i++){
            console.log(arr[i]);
        }
    }
    else{
        for(let i =0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }
}
// 4
function checkInt(number1,number2){
    if(number1 >0 && number2<0 || number1 <0 && number2>0){
        return true;
    }
    else{
        return false;
    }
}
// 5
function times(n){
    if(n<=13){
        return 13-n;
    }
    else{
        return 2*(n-13);
    }
}
// 6
function maxAndMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(min>arr[i]){
            min = arr[i];
        }
    }
    return max-min;
}

// let a = prompt("Nhập vào một chuỗi");
// console.log("chuỗi có bắt đầu bằng java không");
// kiemTra(a);

// let arr = prompt("nhập vào một mảng số nguyên cách nhau bởi khoảng trắng").split(" ");
// console.log("Sự khác nhau lớn nhất của hai phần tử liền kề: ");
// console.log(findMaxDiff(arr));

// let arr = prompt("nhập vào một mảng số nguyên cách nhau bởi khoảng trắng").split(" ");
// let n = prompt("nhập số lượng phần tử muốn xuất ra màn hình");
// first(arr,n);

// let a = prompt("nhập số thứ 1");
// let b = prompt("nhập số thứ 2");
// console.log(checkInt(a,b));

// let n = prompt("nhập số n");
// console.log(times(n));

let arr = prompt("nhập vào một mảng số nguyên cách nhau bởi khoảng trắng").split(" ");
console.log(maxAndMin(arr));