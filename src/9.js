/**
 * @param {number} x
 * @return {boolean}
 * 
 * 要求：回文、无额外空间。注： No extra space means O(1) extra space
 * 思路：1.调用函数，字符串反转拼接（太慢） 2.处理一半长度
 */

// 思路二
var isPalindrome = function(x) {
    // 校验 x 的类型
    // 校验 x 是否存在
    if (typeof x != "number") {
        return false;
    }

    // 0 结尾的数字后面很难处理，同时考虑一位整数的情况
    if (x < 0 || (x != 0 && x % 10 == 0)) {
        return false;
    } else if (x < 10) {
        return true;
    }

    var res = 0;
    var leave;

    // 注意：js 难以整除。
    while (res < x) {
        leave = x % 10;
        res = res * 10 + leave;
        x = (x - leave) / 10;
    }

    if (res == x || ((res - res % 10) / 10) == x) {
        return true;
    } else {
        return false;
    }

};

isPalindrome(1233210);
isPalindrome(5);