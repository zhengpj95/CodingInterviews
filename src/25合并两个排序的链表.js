function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {number[]} list
 */
function createList(list) {
	let head = new ListNode();
	let result = head;
	for (let i = 0; i < list.length; i++) {
		let num = list[i];
		let node = new ListNode(num);
		result.next = node;
		result = result.next;
	}
	return head.next;
}

/**
 * @param {ListNode} list
 */
function printList(list) {
	let result = [];
	while (list) {
		result.push(list.val);
		list = list.next;
	}
	console.log(result);
	return result;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (!l1) return l2;
	if (!l2) return l1;
	let head = new ListNode();
	let result = head;
	while (l1 && l2) {
		if (l1.val <= l2.val) {
			result.next = l1;
			l1 = l1.next;
		} else {
			result.next = l2;
			l2 = l2.next;
		}
		result = result.next;
	}
	if (l1) {
		result.next = l1;
	}
	if (l2) {
		result.next = l2;
	}
	return head.next;
};

let l1 = createList([1, 2, 4]);
let l2 = createList([1, 3, 4]);
console.log(mergeTwoLists(l1, l2));
printList(l1);
