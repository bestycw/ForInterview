var rotate = function(nums, k) {
    let len = nums.length;
    k = k % len;
    let arr = nums.splice(len - k, k);
    nums.unshift(...arr);
    return nums;
};