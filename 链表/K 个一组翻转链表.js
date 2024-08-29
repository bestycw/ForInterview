const myReverse = (head, tail) => {
    let prev = tail.next;
    let p = head;
    while (prev !== tail) {
        const nex = p.next;
        p.next = prev;
        prev = p;
        p = nex;
    }
    return [tail, head];
}

var reverseKGroup = function(head, k) {
    if (!head || !head.next) return head;
    let dummy = new ListNode(0, head);
    let pre = dummy;
    let cur = head;
    while (cur) {
        
        let tail = pre;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (!tail) {
                return dummy.next;
            }
        }
        let next = tail.next;
        [cur, tail] = myReverse(cur, tail);
        pre.next = cur;
        tail.next = next;
        pre = tail;
        cur = tail.next;

    }
    return dummy.next;
};