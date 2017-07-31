/**
 * @param {string} s
 * @return {boolean}
 * 
 * 通过堆栈，不断摘除字符串中的正确的括号
 * 尝试了 ES6 Array.includes()
 * 
 * 两种方法原理一样
 */
var isValid = function(s) {
    const stack = [];

    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
        // 增加了是否可以提前结束的判断，提高了速度，但效果不明显
        if(!eliminate(stack))   return false;
    }
    return stack.length === 0 ? true : false;
};

function eliminate(arr){
    const right = [')', '}', ']'];
    const match = ['()', '{}', '[]'];
    while(1){
        let len = arr.length;
        if(len == 1){
            if(right.includes(arr[len-1]))  return false;
            else return true;
        }else if(len == 0){
            return true;
        }else{
            let stack_top = arr[len-2]+arr[len-1]
            if(match.includes(stack_top)){
                console.log(stack_top);
                arr.pop()
                arr.pop()
            }else{
                if(right.includes(arr[len-1]))  return false;
                else return true;
            }
        }
    }
}

/**
 * @param {string} s
 * @return {boolean}
 * 
 * 利用正则表达式，不断摘除字符串中的正确的括号
 * replace 函数、正则，更加熟悉
 */
// var isValid = function(s) {
//     while(1){
//         let before = s.length;
//         s = s.replace(/\(\)|\[\]|{}/g, "");
//         let after = s.length;
//         if(before === after){
//             if(before === 0)        return true;
//             else    return false;
//         }
//     }
// }

console.log(isValid('{}[]'))
console.log(isValid('{'))