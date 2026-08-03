/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    let memo = {};

    function dfs(left,right){
        let key = left + "," + right;

        if(key in memo){
            return memo[key]
        }

        if(left === right){
            return nums[left];
        }

        let chooseLeft = nums[left] - dfs(left + 1, right);

        let chooseRight = nums[right] - dfs(left, right - 1);

        memo[key] = Math.max(chooseLeft, chooseRight);
        return memo[key];
    }

    return dfs(0, nums.length - 1) >= 0;
    
};