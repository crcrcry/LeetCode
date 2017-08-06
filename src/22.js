/**
 * @param {number} n
 * @return {string[]}
 * 
 * 非递归：思路不好，操作太多，太慢了
 */
// var generateParenthesis = function(n) {
//     const leftCount = [];
//     const rightCount = [];
//     const result = [];

//     for(let i = 0; i < n*2; i++){
//         if(result.length === 0){
//             result.push('(');
//             leftCount.push(1);
//             rightCount.push(0);
//         }else{
//             len = result.length
//             for(let j = 0; j < len; j++){
//                 if(leftCount[j] > rightCount[j]){
//                     if(leftCount[j] != n){
//                         result.push(result[j]+')');
//                         leftCount.push(leftCount[j]);
//                         rightCount.push(rightCount[j]+1);

//                         result[j] += '(';
//                         leftCount[j]++;
//                     }else{
//                         result[j] += ')';
//                         rightCount[j]++;
//                     }
//                 }else{
//                     result[j] += '(';
//                     leftCount[j]++;
//                 }
//             }
//         }
//     }

//     return result;
// };

/**
 * @param {number} n
 * @return {string[]}
 * 
 * 递归：简洁、操作少、快
 */
var generateParenthesis = function(n) {
    const result = [];

    generateFromPath(n ,n, '', result);

    return result;
}

function generateFromPath(left, right, path, result){
    if(left === 0){
        result.push(path+')'.repeat(right));
    }else if(left > 0){
        if(left < right){
            generateFromPath(left, right-1, path+')', result);
        }
        
        generateFromPath(left-1, right, path+'(', result);
    }

}

console.log(generateParenthesis(3));