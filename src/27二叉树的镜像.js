function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
	if (!root) return null;

	let swap = (root) => {
		if (!root) return;
		let temp = root.right;
		root.right = root.left;
		root.left = temp;
		swap(root.left);
		swap(root.right);
	};
	return swap(root);
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree2 = function (root) {
	if (!root) return null;
	let temp = root.left;
	root.left = root.right;
	root.right = temp;
	mirrorTree2(root.left);
	mirrorTree2(root.right);
	return root;
};
