function createAddress(city, street) {
    return { city, street }
}
function createPerson(id, name, address) {
    return { id, name, address }
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara", createAddress("Lod", "Sokolov"))
];

function groupBy(array, callbackFunc) {

    let res = array.reduce(callbackFunc, {});

    Object.entries(res).forEach(e => console.log(`${e[0]}: ${e[1]}`));
}

groupBy(persons, callbackCount);
console.log();
groupBy(persons, callbackList);

function callbackList(acc, curr) {
    return acc[curr.address.city] ?
            acc[curr.address.city] = acc[curr.address.city].concat(curr.name) :  
            acc[curr.address.city] = [].concat(curr.name), acc
}

function callbackCount(acc, curr) {
    return acc[curr.address.city] ?
            acc[curr.address.city] = ++acc[curr.address.city] :  
            acc[curr.address.city] = 1, acc
}