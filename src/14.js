/**
 * @param {string[]} strs
 * @return {string}
 * 
 * 硬推，从头一个一个比较
 * 难度不大，注意特殊情况：空数组、undefined 比较...
 */
var longestCommonPrefix = function(strs) {
    for(let i = 0; true; i++){
        let arr = [];
        for(let j = 0; j < strs.length; j++){
            arr.push(strs[j][i])
        }
        if(!ifSame(arr)){
            return strs[0] ? strs[0].substring(0,i) : "";
        }
    }
};

function ifSame(arr) {
    item = arr.shift();
    if(typeof(item) != 'string'){
        return false;
    }
    while(arr.length > 0){
        if(item !== arr.shift()){
            return false;
        }
    }
    return true;
}

console.log(longestCommonPrefix(["", "abc", "abc"]))
console.log(longestCommonPrefix([]))
console.log(longestCommonPrefix([""]))