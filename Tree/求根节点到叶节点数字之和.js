var sumNumbers = function(root) {
    let sum = 0;
    function dfs(node, num) {
        if (!node) return;
        num = num * 10 + node.val;
        if (!node.left && !node.right) {
            sum += num;
            return;
        }
        dfs(node.left, num);
        dfs(node.right, num);
    }
    dfs(root, 0);
    return sum;
};