/**
 * @param {string} digits
 * @return {string[]}
 * 
 * 采取队列：头出，拼装后尾进
 */
var letterCombinations = function(digits) {
    let digitToLetter = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let result = [];

    for(let i = 0; i < digits.length; i++){
        let nowDigit = Number.parseInt(digits[i]);
        if(i === 0){
            for(let letter of digitToLetter[nowDigit]){
                result.push(letter);
            }
        }else{
            while(result[0].length <= i){
                for(let letter of digitToLetter[nowDigit]){
                    result.push(result[0]+letter);
                }
                result.shift();
            }
        }
    }

    return result;
};


console.log(letterCombinations('239').length);