/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 我的思路是：
 * 1. 得出所有组合，再找 sum = 0 的组合。
 * 2. 寻找组合的过程，通过递归。
 * 3. 考虑到数组中重复数值的情况，所以排序并比较。
 * 结果：超时 O(N^3)
 */
// var threeSum = function(nums) {
//     const group = [];
//     const result = [];
//     getCombination(nums.sort(), group, [], 0, 3);
    
//     for(const index in group){
//         if(sum(group[index]) === 0){
//             result.push(group[index]);
//         }
//     }
//     return result;
// };

// function getCombination(arr, group, combination, nowIndex, rest){
//     if(rest > 0){
//         for(let i = nowIndex; i < arr.length; i++){
//             if(arr[i] !== arr[i-1] || i === nowIndex){
//                 const tmpCombination = combination.slice(0);
//                 tmpCombination.push(arr[i]);
//                 getCombination(arr, group, tmpCombination, i+1, rest-1);
//             }
//         }
//     }else{
//         group.push(combination);
//     }
// }
// 
// function sum(arr){
//     let sum = 0;
//     for(const val of arr){
//         sum += val;
//     }
//     return sum;
// }

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 他人思路：
 * 1. 化 3SUM = 0 为 2SUM = x
 * 2. 排序，两端逼近
 * 
 * 注：排序，两端逼近可以减少一个 N 的时间复杂度
 * 
 * O(N^2) 
 */
var threeSum = function(nums) {
    nums.sort(sortNumber);
    const result = [];

    for(let i = 0; i < nums.length-2; i++){
        if(nums[i] !== nums[i-1]){
            const sum = 0 - nums[i];
            let first = i + 1;
            let last = nums.length - 1;
            while(first < last){
                const nowSum = nums[first] + nums[last];
                if(nowSum === sum){
                    result.push([ nums[i], nums[first], nums[last] ]);
                    while(nums[first] === nums[first+1])    first++;
                    while(nums[last] === nums[last-1])      last--;
                    first++; last--;
                }else if(nowSum < sum){
                    first++;
                }else{
                    last--;
                }
            }
        }
    }
    return result;
};

function sortNumber(a, b){
    return a - b;
}


// console.log(threeSum( [-1, 0, 1] ))
console.log(threeSum( [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));

