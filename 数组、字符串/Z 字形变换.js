var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let arr = new Array(numRows).fill('');
    let i = 0;
    let flag = -1;
    for (let c of s) {
        arr[i] += c;
        if (i === 0 || i === numRows - 1) flag = -flag;
        i += flag;
        
    }
    return arr.join('');
};