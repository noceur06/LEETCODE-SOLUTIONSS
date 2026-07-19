/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
        for(let j = 0; j < nums.length; j++){
            if(nums[j] === val){
                nums.splice(j,1);
                j--;
            }
        }
        return nums.length;
    
};