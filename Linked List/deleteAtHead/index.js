/*Definiton of singly Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
    deleteHead(head) {
        head = head.next;
        return head;
    }
}