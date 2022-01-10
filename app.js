//console.log("hello");
// output for var: 3 3 3
//for (var i = 0; i < 3; i++) {
//    setTimeout(function() {
//        console.log(i);
//    })
//}
//for (let i = 0; i < 3; i++) {
//    setTimeout(function() {
//        console.log(i);
//    })
//}

const func = function(a, b) {
    return a + b;
}

let a = 5;
console.log(a ** 2); // 25
console.log(func(10, 20)); // 30

console.log("12" + 12); // 1212
console.log("12" - 12); // 0
console.log("ab" - 12); // NaN
console.log(12 + 12); // 24
console.log(`+"12" + 12 = ${+"12" + 12}`);