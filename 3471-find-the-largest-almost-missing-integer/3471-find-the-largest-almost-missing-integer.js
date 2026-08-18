/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let count = new Map();

    for(let i = 0; i <= nums.length - k; i++){
        let sub = nums.slice(i, i + k);
        let set = new Set(sub);
        for(let num of set){
            count.set(num, (count.get(num) || 0) + 1)
        }
    }

    let answer= -1;
    for(let [num, frequency] of count){
        if(frequency === 1){
            answer = Math.max(answer , num)
        }
    }
    return answer;
    
};