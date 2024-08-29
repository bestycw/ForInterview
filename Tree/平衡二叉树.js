var isBalanced = function(root) {
    if (!root) return true;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    
};