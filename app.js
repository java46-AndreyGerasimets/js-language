function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
    }
}
function myMap(array, callback) {
    const res = [];
    function forEachCall(n, i, a) {
            res.push(callback(n, i, a));
    }
    myForEach(array, forEachCall);
    return res;
}