/*Definiton of singly Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
    insertAtHead(head, X) {
        let newNode = new ListNode(X);
        newNode.next = head;
        return newNode;
    }
}