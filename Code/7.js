/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var y = x < 0 ? x.toString().substring(1) : x.toString();
    var array = y.split("");
    array = array.reverse();
    y = array.join('');
    var result = Number(x < 0 ? ("-" + y) : y);
    return (result > Math.pow(2, 31) || result < -Math.pow(2, 31) - 1) ? 0 : result;
};

console.log(reverse(102));
console.log(reverse(10));
console.log(reverse(-50));
console.log(reverse(-503));
console.log(reverse(Math.pow(2,31)+1))