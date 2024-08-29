//递归
var postorderTraversal = function (root) {
    let res = [];
    function dfs(root) {
        if (!root) return;
        //前序
        res.push(root.val);
        dfs(root.left);
        //中序
        dfs(root.right);
        //后序
    }
    dfs(root);
    return res;
};
//迭代 
// 前序

var preorderTraversal = function (root) {
    //  迭代
    if (!root) return [];
    let stack = [root];
    let res = [];
    while (stack.length) {

        let node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);


    }
    return res;
};

//中序


var inorderTraversal = function (root) {
    //  迭代
    if (!root) return [];
    let stack = [];
    let res = [];
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop();
        res.push(node.val);
        root = node.right;
    }
    return res;
}
//后序
var postorderTraversal = function (root) {
    //  迭代
    if (!root) return [];
    let stack = [root];
    let res = [];
    while (stack.length) {
        let node = stack.pop();
        res.unshift(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return res;

}