var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = str.length;
    for(let i = 0; i < len/2; i++) {
        if(str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
};