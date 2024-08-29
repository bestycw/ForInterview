var isSymmetric = function(root) {
    if (!root) return true;
    const isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return left.val === right.val && isMirror(left.right, right.left) && isMirror(left.left, right.right);
    }
    return isMirror(root.left, root.right);
};