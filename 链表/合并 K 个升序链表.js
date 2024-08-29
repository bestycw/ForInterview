var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    let dummy = new ListNode(-1);
    let p = dummy;
    let pq = new MinPriorityQueue({
        priority: (x) => x.val

    })
    for(let list of lists){
        
        if(list !== null){
            pq.enqueue(list);
        }


    }
    while(!pq.isEmpty()){
        let node = pq.dequeue().element;
        p.next = node;
        if(node.next !== null){
            pq.enqueue(node.next);
        }
        p = p.next;

    }
    return dummy.next;
};