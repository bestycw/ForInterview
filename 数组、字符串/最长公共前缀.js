var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    //先去第一个作为公共前缀
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++) {
        //判断是否包含prefix，不包含则去掉最后一个字符，直到包含或者为空
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix.length === 0) return '';
        }

    }
    return prefix;

};