console.log(encode(10, "ILoVeJavAScript"))
function encode (num, codingString) {
    const temp = "" + codingString;
    if (temp.length < 2 || codingString.split("").some(function(v,i,a){return a.lastIndexOf(v)!=i;})) {
        return "Wrong coding string";
    }
    const base = temp.length;
    let res = "";
    do {
        const digit = Math.trunc(num % base);
        const symb = codingString[digit];
        res = symb + res;
        num = Math.trunc(num / base);
        
        } while(num >= 1);
    return res;
}