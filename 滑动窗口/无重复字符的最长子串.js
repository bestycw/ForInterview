var lengthOfLongestSubstring = function(s) {
    // let i = 0;
    let j = 0;
    let ans = '';
    let max = 0;
    const length = s.length;
    while(j < length) {
        if(ans.indexOf(s[j]) === -1) {
            ans += s[j];
            max = Math.max(max, ans.length);
            j++;
        }else{
            ans = ans.slice(ans.indexOf(s[j]) + 1);
            // i++;

        }
    }
    return max;
};