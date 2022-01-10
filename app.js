// first task
console.log(('a' + + 'a' + 'a' + 's').toLowerCase());

// second task
function calculate(oper, n1, n2) {
    return(eval(n1 + oper + n2));
}
console.log(calculate("-", 2, 3));

// third task
function fun(a) {
    function sum(b, c) {
        return b + c;
    }

    return function(b, c) {
        return a * sum(b, c);
    };
}

console.log(fun(5)(10, 3));