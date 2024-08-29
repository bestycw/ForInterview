var getMinimumDifference = function(root) {
    let min = Infinity;
    let pre = -Infinity;
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        min = Math.min(min, root.val - pre);
        pre = root.val;
        dfs(root.right);
    }
    dfs(root);
    return min;
};