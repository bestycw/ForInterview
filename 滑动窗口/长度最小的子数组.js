var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, sum = 0, min = Infinity;
    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left++;
        }
        right++;
    }
    return min === Infinity ? 0 : min;
};