var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    let n = haystack.length, m = needle.length;
    for(let i = 0; i <= n - m; i++) {
        let j = 0;
        while(j < m && haystack[i + j] === needle[j]) j++;
        if(j === m) return i;
    

    }
    return -1;
};