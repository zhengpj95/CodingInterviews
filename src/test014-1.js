/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	if (n < 4) return n - 1;
	let divide = Math.floor(n / 3);
	let left = n % 3;
	if (left == 0) return Math.pow(3, divide);
	if (left == 1) return Math.pow(3, divide - 1) * 2 * 2;
	if (left == 2) return Math.pow(3, divide) * 2;

	// if (n == 2) return 1;
	// if (n == 3) return 2;
	// if (n == 4) return 4;
	// let result = 1;
	// while (n > 4) {
	//     n -= 3;
	//     result *= 3;
	// }
	// return n * result;
};
