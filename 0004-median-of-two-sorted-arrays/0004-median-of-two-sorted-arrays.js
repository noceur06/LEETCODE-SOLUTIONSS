/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1,...nums2].sort((a,b) => a -b);
    let middle = Math.floor(arr.length / 2);
    if(arr.length % 2 === 1){
        return arr[middle];
    }else{
        return (arr[middle - 1] + arr[middle]) / 2;
    }
};