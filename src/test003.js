/**
 * 数组中重复的数字
 * @author zheng
 * @date 2020/12/02 01:08:17
 */

/**
 * O(T) = O(n)
 * O(S) = O(n)
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			return nums[i];
		}
		map.set(nums[i], 1);
	}
	return -1;
};

/**
 * O(T) = O(n)
 * O(S) = O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber2 = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		while (nums[i] !== i) {
			if (nums[nums[i]] === nums[i]) {
				return nums[i];
			}

			let temp = nums[i];
			[nums[i], nums[temp]] = [nums[temp], nums[i]];
		}
	}
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
console.log(findRepeatNumber2([2, 3, 1, 0, 2, 5, 3]));
