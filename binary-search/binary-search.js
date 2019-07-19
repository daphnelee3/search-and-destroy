'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 0) {
		return false;
	} else {
		const middleIdx = Math.ceil(array.length / 2);
		const left = array.slice(0, middleIdx);
		const right = array.slice(middleIdx);
		if (target === left[left.length - 1] || target === right[0]) {
			return true;
		} else {
			if (target < left[left.length - 1]) {
				return binarySearch(left.slice(0, -1), target);
			} else {
				return binarySearch(right.slice(1), target);
			}
		}
	}

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch