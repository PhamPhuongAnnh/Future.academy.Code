
// bài 4
let atr = [5, 7, 300, 90, 24, 50, 75];
console.log("Hello, my name is Phuong lan and here is my sheep sizes:");
console.log(atr);

let indexMax = 0;
let maxSize = Number(atr[0]);
for (var i = 0; i < atr.length; i++) {
    if (Number(atr[i]) > maxSize) {
        maxSize = atr[i];
        indexMax = i;
    }
}
console.log(`\nNow my biggest sheep has size ${maxSize}, let's shave it`);

atr.splice(indexMax, 1, 8);
console.log("\nAfter shearing, here is my flock");
console.log(atr);

for (var i = 0; i < atr.length; i++) {
    atr[i] += 50;
}
console.log(`\n MONTH 1`);
console.log(`One month has, passed, my sheeps have grown, here are their sizes`);
console.log(atr);


indexMax = 0;
maxSize = Number(atr[0]);
for (var i = 0; i < atr.length; i++) {
    if (Number(atr[i]) > maxSize) {
        maxSize = atr[i];
        indexMax = i;
    }
}
console.log(`\nNow my biggest sheep has size ${maxSize}, let's shave it`);

atr.splice(indexMax, 1, 8);
console.log("\nAfter shearing, here is my flock");
console.log(atr);



for (var i = 0; i < atr.length; i++) {
    atr[i] += 50;
}
console.log(`\n MONTH 2`);
console.log(`One month has, passed, my sheeps have grown, here are their sizes`);
console.log(atr);


indexMax = 0;
maxSize = Number(atr[0]);
for (var i = 0; i < atr.length; i++) {
    if (Number(atr[i]) > maxSize) {
        maxSize = atr[i];
        indexMax = i;
    }
}
console.log(`\nNow my biggest sheep has size ${maxSize}, let's shave it`);

atr.splice(indexMax, 1, 8);
console.log("\nAfter shearing, here is my flock");
console.log(atr);


for (var i = 0; i < atr.length; i++) {
    atr[i] += 50;
}
console.log(`\n MONTH 3`);
console.log(`One month has, passed, my sheeps have grown, here are their sizes`);
console.log(atr);

let s = 0;
for (var i = 0; i < atr.length; i++) {
    s += Number(atr[i]);
}
console.log(`\nMy flock has size in total: ${s}`);
console.log(`I woulld get ${s} * 2$ = ${s * 2}`);
