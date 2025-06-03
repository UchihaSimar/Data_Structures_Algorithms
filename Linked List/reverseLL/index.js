/*Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
    reverseList(head) {
        let current = head;
        let tempPrevNode = null;
        while (current != null) {
            let originalNextNode = current.next;
            current.next = tempPrevNode;
            tempPrevNode = current;
            current = originalNextNode;
        }
        return tempPrevNode;
    }
}