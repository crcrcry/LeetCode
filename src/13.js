/**
 * @param {string} s
 * @return {number}
 * 
 * 罗马数字没有 0
 * 罗马数字与阿拉伯数字对应关系：
 * I：1
 * V：5
 * X：10
 * L：50
 * C：100
 * D：500
 * M：1000
 * 
 * 思路：
 * 减法唯一的情况：后一位的值比该值大
 */
var romanToInt = function(s) {
    // 检验 s 是否存在
    // 检验 s 类型
    if(typeof s != "string"){
        return "Input is not a string.";
    }

    // ES5 没有 map，用 object 来映射关系
    var map = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000,
    }
    var sum = 0;   
    var nextBitVal, nowBitVal, len = s.length;
    
    for(var index = 0; index < len; index++){
        nextBitVal = (index+1==len)?0:map[s[index+1]];
        nowBitVal = map[s[index]];        

        // 判断 s 每个值是否合法
        if(nowBitVal == undefined){
            return "Input is not a roman number.";
        }

        if(nextBitVal > nowBitVal){
            sum -= nowBitVal;
        }else{
            sum += nowBitVal;
        }
    }

    return sum;
};

