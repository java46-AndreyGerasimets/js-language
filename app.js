function displayOccurrences(array) {
    const res = checkAndCount(array);
    Object.entries(res).sort((e1, e2) => {
            const res = e2[1] - e1[1];
            return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}

// task 1
function checkAndCount(array) {
    return array.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
}

// task 2
function countBy(array, callbackFun) {
    displayOccurrences(array.map(e => callbackFun(e)));
}

// tests
const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurrences(ar);

console.log('Statistics for doubles');
const arrDouble = [6.4, 7.3, 6.5, 6.9];
countBy(arrDouble, element => Math.floor(element));

console.log('Statistics for strings');
const arrString = ['abcd', 'lmnr', 'ab', 'dddd'];
countBy(arrString, element => element.length);

console.log('Statistics for objects');
const arrObject = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
            {age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}  ];
countBy(arrObject, element => element.age);