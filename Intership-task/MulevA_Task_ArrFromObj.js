const Obj = {
	name: 'Joe',
	address: {
		city: 'NYC',
		street: 'some st',
		shops: {
			firstShop: 'Radz',
			secondSgop: 'Rubel',
		},
	},
	school: ['sc.№1', 'sc.№2', 'sc.№3'],
	wife: null,
};
//Object.reduce realisation
function flattenObject(O) {
	let arrFromObj = Object.keys(O).reduce((acc, val) => {
		if (O[val] instanceof Object) {
			acc = acc.concat(flattenObject(O[val]));
		} else {
			acc = acc.concat(O[val]);
		}
		return acc;
	}, []);
	return arrFromObj;
}

//My realisation
// function flattenObject(O) {
// 	let arrFromObj = [];
// 	let tempArr = [];
// 	for (let key in O) {
// 		if (O[key] instanceof Object) {
// 			tempArr = flattenObject(O[key]);
// 			arrFromObj.push(...tempArr);
// 		} else {
// 			arrFromObj.push(O[key]);
// 		}
// 	}
// 	return arrFromObj;
// }
// console.log(flattenObject(Obj));

console.log(flattenObject(Obj));
