var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    while (queue.length) {
        let len = queue.length;
        let temp = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            temp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(temp);
        
    }
    return res;
};