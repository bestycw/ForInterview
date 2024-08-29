var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    //创建一个 m+1 * n+1 的二维数组
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    //第一列填充单次
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    // 第一行填充单词
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    //从（1,1）开始动态规划，嵌套循环
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            //判断是否相等，相等则不需要操作，不相等则取最小值，直接复制
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }

    }
    return dp[m][n];
};