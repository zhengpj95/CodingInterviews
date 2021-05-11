/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
	let getCount = (m, n) => {
		let count = 0;
		let t = m;
		while (t > 0) {
			count += t % 10;
			t = Math.floor(t / 10);
		}
		t = n;
		while (t > 0) {
			count += t % 10;
			t = Math.floor(t / 10);
		}
		return count;
	};

	let board = [];
	for (let i = 0; i < m; i++) {
		board.push(new Array(n).fill(0));
	}

	let result = 0;
	let backtrack = (row, col) => {
		if (row < 0 || row > m - 1 || col < 0 || col > n - 1) {
			return;
		}
		if (board[row][col]) {
			return;
		}
		let add = getCount(row, col);
		if (add > k) {
			return;
		}
		result++;
		board[row][col] = true;
		backtrack(row, col + 1);
		backtrack(row, col - 1);
		backtrack(row + 1, col);
		backtrack(row - 1, col);
	};

	backtrack(0, 0);
	return result;
};

let m = 2,
	n = 3,
	k = 1;
// (m = 20), (n = 23), (k = 8);
console.log(movingCount(m, n, k));
