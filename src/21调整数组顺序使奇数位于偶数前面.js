/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	if (!nums || !nums.length) {
		return [];
	}
	let low = 0,
		high = nums.length - 1;
	while (low < high) {
		while (low < high) {
			if (nums[low] % 2 == 0) break;
			low++;
		}
		while (low < high) {
			if (nums[high] % 2 != 0) break;
			high--;
		}
		let temp = nums[high];
		nums[high] = nums[low];
		nums[low] = temp;
	}
	return nums;
};
