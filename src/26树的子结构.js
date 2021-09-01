function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
	if (!A || !B) {
		return false;
	}
	return check(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
let check = (a, b) => {
	if (!b) return true;
	if (!a || a.val != b.val) {
		return false;
	}
	return check(a.left, b.left) && check(a.right, b.right);
};
