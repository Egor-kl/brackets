module.exports = function check(str, bracketsConfig) {
  let stack = [];
	let count = [];

	count.length = bracketsConfig.length;
	for (let k = 0; k < count.length; k++) {

		count[k] = [];
		count[k][0] = 1;
	}

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (bracketsConfig[j][0] === bracketsConfig[j][1] && bracketsConfig[j][0] === str[i]) {

				if (count[j][0] === -1) {

					if (stack.pop() === j) {

					}
					else {

						return(false);
					}
				}
				else if (count[j][0] === 1) {

					stack.push(j);
				}

				count[j][0] *= -1;

			}
			else {

				if (bracketsConfig[j][0] === str[i]) {

					stack.push(j);
				}
				else if (bracketsConfig[j][1] === str[i]) {

					if (stack.pop() === j) {

					}
					else {
						return (false);
					}

				}

			}

		}

	}
	if (stack.length === 0) {
		return (true);
	}
	else {
		return (false);
	}
}