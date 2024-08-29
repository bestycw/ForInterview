var isPalindrome = function(head) {
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    let left = 0,right = arr.length - 1;
    while(left < right){
        if(arr[left] !== arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};