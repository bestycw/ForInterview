var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;  
    const root = new TreeNode(postorder.pop());
    const index = inorder.indexOf(root.val);
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index));
    return root;
};