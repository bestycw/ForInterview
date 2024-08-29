var sortList = function(head) {
    if (!head || !head.next) return head;
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        
        slow = slow.next;
        fast = fast.next.next;
    

    }
    let right = slow.next;
    slow.next = null;
    let left = head;
    let l = sortList(left);
    let r = sortList(right);
    let res = new ListNode(0);
    let cur = res;
    while (l && r) {
        if (l.val < r.val) {
            cur.next = l;
            l = l.next;
        } else {
            cur.next = r;
            r = r.next;
        }
        cur = cur.next;

    }
    cur.next = l ? l : r;

    return res.next;
};