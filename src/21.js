/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let top1 = l1;
    let top2 = l2;
    let head, pointer;
    head = new ListNode(0);
    pointer = head;
    
    while(top1 && top2){
        if(top1.val > top2.val){
            pointer.next = new ListNode(top2.val);
            pointer = pointer.next;
            top2 = top2.next;
        }else{
            pointer.next = new ListNode(top1.val);
            pointer = pointer.next;
            top1 = top1.next;
        }
    }

    if(top1){
        while(top1){
            pointer.next = new ListNode(top1.val);
            pointer = pointer.next;
            top1 = top1.next;
        }
    }
    if(top2){
        while(top2){
            pointer.next = new ListNode(top2.val);
            pointer = pointer.next;
            top2 = top2.next;
        }
    }
    return head.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

