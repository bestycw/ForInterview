var maxPathSum = function(root) {
    let max = -Infinity;
    function dfs(root) {
        if (!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        max = Math.max(max, root.val + left + right);
        return Math.max(0, root.val + Math.max(left, right));
    }
    dfs(root);
    return max;
};