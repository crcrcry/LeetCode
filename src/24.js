/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 思路一：迭代
 */
// var swapPairs = function(head) {
//     const virtualHead = new ListNode(0);
//     let pointer = virtualHead;
//     virtualHead.next = head;

//     while(pointer && pointer.next && pointer.next.next){
//         swap(pointer, pointer.next, pointer.next.next);
//         pointer = pointer.next.next;
//     }

//     return virtualHead.next;
// };


// // swap first and second node
// function swap(head, first, second){
//     first.next = second.next;
//     head.next = second;
//     second.next = first;
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 思路二：递归
 */
var swapPairs = function(head) {
    if(!head)   return null;
    if(!head.next)  return head;

    var newHead = head.next;
    head.next = newHead.next;
    newHead.next = head;

    head.next = swapPairs(head.next);

    return newHead;
};