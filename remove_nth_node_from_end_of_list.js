/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let k = 0;
    let removeNode = null;
    let currNode = head;

    while (currNode.next != null) {
        if (k === n) {
            removeNode = head;
        } else if (k > n) {
            removeNode = removeNode.next;
        }

        currNode = currNode.next;
        k++;
    }

};
