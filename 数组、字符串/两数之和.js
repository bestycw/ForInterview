var twoSum = function(nums, target) {
    const cacheMap = {}
    for(let i= 0 ;i<nums.length;i++){
        const value = nums[i]
        const diff = target - value
        if(cacheMap[diff] !== undefined){
            return [cacheMap[diff],i]
        }else{
            cacheMap[value] = i
        }
    }
    return []
};