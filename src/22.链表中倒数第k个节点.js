/**
 * 输入一个链表，输出该链表中倒数第k个节点。
 * 为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有 6 个节点，从头节点开始，
 * 它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
	let node = head;
	while (k > 0 && node) {
		node = node.next;
		k--;
	}
	while (node) {
		head = head.next;
		node = node.next;
	}
	return head;
};
