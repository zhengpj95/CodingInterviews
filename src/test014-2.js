/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	if (n == 2) return 1;
	if (n == 3) return 2;
	if (n == 4) return 4;
	let result = 1;
	while (n > 4) {
		n -= 3;
		result *= 3;
		result %= 1000000007;
	}
	return (n * result) % 1000000007;
};
