/*Definition for Singly Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
    middleOfLinkedList(head) {
        let slow = head;
        let fast = head;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}