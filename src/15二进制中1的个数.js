/**
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let result = 0;
	while (n > 0) {
		result += n & 1;
		n >>>= 1;
	}
	return result;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function (n) {
	let result = 0;
	while (n != 0) {
		result++;
		n = n & (n - 1);
	}
	return result;
};
