// Bài 7
// a
let demL = 0;
let demH = 0
for (let i = 0; i < 6; i++) {
    if (i < 6 / 2) {
        demL++;
    }
    else {
        demH++;
    }
}
console.log(`${demL}L`);
console.log(`${demH}H`);

// b
let n = Number(prompt("Enter the total number of L's and H's"));
let demL = 0;
let demH = 0
for (let i = 0; i < n; i++) {
    if (i < n / 2) {
        demL++;
    }
    else {
        demH++;
    }
}
console.log(`${demL}L`);
console.log(`${demH}H`);

// c

for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        console.log(`0`);
    }
    else {
        console.log(`1`);
    }
}

// d
let n = Number(prompt("Enter the total number of 1's and 0's"));
for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
        console.log(`0`);
    }
    else {
        console.log(`1`);
    }
}