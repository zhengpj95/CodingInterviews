function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
	if (!root) return true;

	let check = (l, r) => {
		if (!l && !r) return true;
		if (!l || !r || r.val != l.val) return false;
		return check(l.left, r.right) && check(l.right, r.left);
	};

	return check(root.left, root.right);
};
