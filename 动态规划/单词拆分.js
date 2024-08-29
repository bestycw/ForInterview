var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for(let i = 1; i <= s.length; i++){
        for(let j = 0; j < i; j++){
            if(dp[j] && wordDict.indexOf(s.slice(j,i)) !== -1){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};