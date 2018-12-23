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

    let curr1;
    let curr2;
    let newList;

    if (l1 === null && l2 === null) {
        return new ListNode();
        // return new ListNode();
    } else if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }


    if (l1.val < l2.val) {
        newList = new ListNode(l1.val);
        curr1 = l1.next;
        curr2 = l2;
    } else {
        newList = new ListNode(l2.val);
        curr1 = l1;
        curr2 = l2.next;
    }

    let currNewList = newList;

    while (curr1 != null && curr2 != null) {
        if (curr1.val < curr2.val) {
            currNewList.next = new ListNode(curr1.val);
            curr1 = curr1.next;
        } else {
            currNewList.next = new ListNode(curr2.val);
            curr2 = curr2.next;
        }
        currNewList = currNewList.next;
    }

    if (curr1 === null) {
        currNewList.next = curr2;
    } else {
        currNewList.next = curr1;
    }
    return newList;
};
