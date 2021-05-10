/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	let rows = board.length;
	let cols = board[0] && board[0].length ? board[0].length : 0;
	let flag = [];
	for (let i = 0; i < rows; i++) {
		flag.push(new Array(cols).fill(false));
	}
	let backtrace = (track, row, col) => {
		// found
		if (track == word) {
			return true;
		}
		// out of range
		if (row < 0 || row > rows - 1 || col < 0 || col > cols - 1) {
			return false;
		}
		// next string not match
		if (track && word[track.length] != board[row][col]) {
			return false;
		}
		// visited
		if (flag[row][col]) {
			return false;
		}

		flag[row][col] = true;
		let res =
			backtrace(track + board[row][col], row + 1, col) ||
			backtrace(track + board[row][col], row, col + 1) ||
			backtrace(track + board[row][col], row, col - 1) ||
			backtrace(track + board[row][col], row - 1, col);
		flag[row][col] = false;
		return res;
	};

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (board[i][j] != word[0]) continue;
			if (backtrace("", i, j)) {
				return true;
			}
		}
	}

	return false;
};


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist2 = function (board, word) {
	let rows = board.length;
	let cols = board[0] && board[0].length ? board[0].length : 0;

	let backtrace = (row, col, idx) => {
		// found
		if (idx >= word.length) {
			return true;
		}
		// out of range, next string not match
		if (row < 0 || row > rows - 1 || col < 0 || col > cols - 1 || word[idx] != board[row][col]) {
			return false;
		}

		let temp = board[row][col];
		board[row][col] = "";
		let res = backtrace(row + 1, col, idx + 1) || backtrace(row, col + 1, idx + 1) || backtrace(row, col - 1, idx + 1) || backtrace(row - 1, col, idx + 1);
		board[row][col] = temp;
		return res;
	};

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (board[i][j] != word[0]) continue;
			if (backtrace(i, j, 0)) {
				return true;
			}
		}
	}

	return false;
};


let board = [
	["F", "Y", "C", "E", "N", "R", "D"],
	["K", "L", "N", "F", "I", "N", "U"],
	["A", "A", "A", "R", "A", "H", "R"],
	["N", "D", "K", "L", "P", "N", "E"],
	["A", "L", "A", "N", "S", "A", "P"],
	["O", "O", "G", "O", "T", "P", "N"],
	["H", "P", "O", "L", "A", "N", "O"],
];

console.log(exist(board, "FRANCE"));
