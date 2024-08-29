var minimumTotal = function(triangle) {
    let dp = new Array(triangle.length).fill(0).map(() => new Array(triangle.length).fill(0))
    dp[0][0] = triangle[0][0]
    for (let i = 1; i < triangle.length; i++) {
        dp[i][0] = dp[i - 1][0] + triangle[i][0]
    }

    for (let i = 1; i < triangle.length; i++) {
        for (let j = 1; j < triangle[i].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]

        }


    }

    
    return Math.min(...dp[triangle.length - 1])

};