//Numbers

const pi = Math.PI.toFixed(2);
console.log(pi);

let arrNumber = [15, 11, 16, 12, 51, 12, 13, 51];
console.log(arrNumber);
console.log(...arrNumber);
const arrMax = Math.max(...arrNumber);
const arrMin = Math.min(...arrNumber);
console.log(`Max number ${arrMax}, Min number ${arrMin}`);

let rndNumb = Math.random().toFixed(2);
console.log(rndNumb);

function endNumbToX(x) {
    return Math.floor(Math.random() * x + 1);
}
console.log(endNumbToX(3));

console.log(0.6 + 0.7);
console.log((0.6 * 10 + 0.7 * 10) / 10);
console.log((0.6 + 0.7).toFixed(1));

console.log(parseInt("100$"));

// Strings

let testString = "some test string";
let firstLetter = testString[0];
let lastLetter = testString[testString.length - 1];
console.log(firstLetter);
console.log(lastLetter);
let upperCaseLetters =
    firstLetter.toUpperCase() +
    testString.slice(1, testString.length - 1) +
    lastLetter.toUpperCase();
console.log(upperCaseLetters);
let placeOfWord = testString.indexOf("string");
console.log(placeOfWord);
let placeOfSpace = testString.lastIndexOf(" ");
console.log(placeOfSpace);
let stringFrom5to4 = testString.slice(5, 5 + 4);
console.log(stringFrom5to4);
let stringFrom5to9 = testString.slice(5, 5 + 9);
console.log(stringFrom5to9);
let newStringWithoutSymbols = testString.slice(0, -6);
console.log(newStringWithoutSymbols);
let a = 20,
    b = 16;
console.log("" + a + b);

//Objects

const objPhone = {
    product: "iphone"
};
objPhone.price = 1000;
objPhone.currency = "dollar";
objPhone.details = {};
objPhone.details.model = "";
objPhone.details.color = "";

console.log(objPhone);

//Change of types
let typesA = 0 || "string"; //string
console.log(typesA);
typesA = 1 && "string"; //string
console.log(typesA);
typesA = null || 25; //25
console.log(typesA);
typesA = null && 25; //null
console.log(typesA);
typesA = null || 0 || 35; //35
console.log(typesA);
typesA = null && 0 && 35; //null
console.log(typesA);

console.log(12 + 14 + "12"); //38----> 2612
console.log(3 + 2 - "1"); //Nan --> 4
console.log("3" + 2 - 1); //Nan --> 31
console.log(true + 2); //NaN --> 3 (true=1 => 1+2=3)
console.log(+"10" + 1); //11
console.log(undefined + 2); //NAn
console.log(null + 5); //undefined --> 5 (null=0 +5=5)
console.log(true + undefined); //false --> NaN

//if else (conditions)

let cyclesVar1 = "hidden";
if (cyclesVar1 === "hidden") {
    cyclesVar1 = "vicible";
} else {
    cyclesVar1 = "hidden";
}
cyclesVar1 = cyclesVar1 === "hidden" ? "vicible" : "hidden";
console.log(cyclesVar1);

let cyclesVar2 = 2;
if (cyclesVar2 === 0) {
    cyclesVar2 = 1;
} else if (cyclesVar2 < 0) {
    cyclesVar2 = "less then zero";
} else {
    cyclesVar2 *= 10;
}
console.log(cyclesVar2);

let car = {
    name: "Lexus",
    age: 10,
    create: 2008,
    needRepair: false
};
if (car.age > 5) {
    console.log("Need Repair");
    car.needRepair = true;
} else {
    car.needRepair = false;
}

let item = {
    name: "Intel core i7",
    price: "100$",
    discount: "15%"
};
if ("discount" in item) {
    let price = parseInt(item.price),
        discount = parseInt(item.discount);
    item.priceWithDiscount = price - (discount * price) / 100 + "$";
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}
console.log(item);

let product = {
    name: "Яблоко",
    price: "10$"
};
let minPrice = 10;
let maxPrice = 20;

if (
    parseInt(product.price) >= minPrice ||
    parseInt(product.price) <= maxPrice
) {
    console.log(product.name);
} else {
    console.log("Goods not found");
}

//Switch case
let variableSwitch = "15615";
switch (variableSwitch) {
    case "block":
        console.log("block");
        break;
    case "none":
        console.log("none");
        break;
    case "inline":
        console.log("inline");
        break;
    default:
        console.log("other");
}

let otherVariableSwitch = "hidden";
switch (otherVariableSwitch) {
    case "hidden":
        otherVariableSwitch = "vicible";
        console.log(otherVariableSwitch);
        break;
    default:
        otherVariableSwitch = "hidden";
        console.log(otherVariableSwitch);
}

let otherVariableSwitch2 = -5;
switch (otherVariableSwitch2) {
    case 0:
        otherVariableSwitch2 = 1;
        break;
    case otherVariableSwitch2 < 0: //Understand!!! Why doesn't work!
        otherVariableSwitch2 = "less then zero";
        break;
    default:
        otherVariableSwitch2 *= 10;
}
console.log(otherVariableSwitch2);

//Cycles
//1
let cyclesString1 = "i am in the easycode";
let newCyclesString1 = "";
for (let i = 0; i < cyclesString1.length; i++) {
    if (i === 0 || cyclesString1[i - 1] === " ") {
        newCyclesString1 += cyclesString1[i].toUpperCase();
    } else {
        newCyclesString1 += cyclesString1[i];
    }
}
console.log(newCyclesString1);
console.log(cyclesString1);
//2
let cyclesString2 = "tseb eht ma i";
let newCyclesString2 = "";
for (let i = cyclesString2.length - 1; i >= 0; i--) {
    newCyclesString2 += cyclesString2[i];
}
console.log(newCyclesString2);
//3
let cyclesStartFectorial = 10;
let cyclesEndFectorial = 1;
for (let i = cyclesStartFectorial; i > 0; i--) {
    cyclesEndFectorial *= i;
}
console.log(cyclesEndFectorial);
//4
let notCamelCaseString = "JavaScript is a pretty good language";
let camelCaseString = "";
for (let i = 0; i < notCamelCaseString.length; i++) {
    if (notCamelCaseString[i] === " ") {
        continue;
    } else if (notCamelCaseString[i - 1] === " ") {
        camelCaseString += notCamelCaseString[i].toUpperCase();
    } else {
        camelCaseString += notCamelCaseString[i];
    }
}
console.log(notCamelCaseString);
console.log(camelCaseString);
//5
let arrNumbers = [];
for (let i = 0; i < 15; i++) {
    arrNumbers.push(i + 1);
}
console.log(arrNumbers);
let arrOddNumbers = [];
for (let numberOfArray of arrNumbers) {
    if (numberOfArray % 2 != 0) {
        arrOddNumbers.push(numberOfArray);
    }
}
console.log(arrOddNumbers);
//6
let cyclesList = {
    name: "denis",
    work: "easycode",
    age: 29
};

for (const prop in cyclesList) {
    if (typeof cyclesList[prop] == "string") {
        cyclesList[prop] = cyclesList[prop].toUpperCase();
    }
}
console.log(cyclesList);

//Functions
//1
let multiply = function() {
    if (arguments.length === 0) {
        return 0;
    }

    let finalMultiply = 1;
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            finalMultiply *= arguments[i];
        }
    }
    console.log(arguments);
    return finalMultiply;
};
console.log(multiply());
console.log(multiply("a", "b", 2, 3));
console.log(multiply(1, 2, 5, 4));
//2
let reverseString = function(textString1) {
    let reversTextString = "";
    for (let i = textString1.length - 1; i >= 0; i--) {
        reversTextString += textString1[i];
    }
    return reversTextString;
};
console.log(reverseString("test"));
console.log(reverseString("1.2.3.4.5"));
console.log(reverseString("А Роза Упала На Лапу Азора"));
//3
let textToUnicode = function(textString2) {
    let unicodeString = "";
    for (let i = 0; i < textString2.length; i++) {
        unicodeString += textString2.charCodeAt(i) + " ";
    }
    return unicodeString;
};
console.log(textToUnicode("hello"));
console.log(textToUnicode("Andrew"));
//4
let guessNumber = function(yourNumber) {
    if (yourNumber < 1 || yourNumber > 10) {
        return "Упс! Ошибочка. Введите число от 1 до 10";
    }

    let puzzledNumber = Math.ceil(Math.random() * 10);
    if (puzzledNumber === yourNumber) {
        return "Вы выиграли!";
    } else {
        return `Вы не угадали. Ваше число: ${yourNumber}, а выпало число: ${puzzledNumber}`;
    }
};
console.log(guessNumber(15));
console.log(guessNumber(5));
console.log(guessNumber(-5));
console.log(guessNumber(8));
//5
let getArray = function(lengthArray) {
    let newArray = [];
    if (lengthArray > 0) {
        for (let i = 0; i < lengthArray; i++) {
            newArray.push(i + 1);
        }
        return newArray;
    } else {
        return "Введите целое положительное число!";
    }
};
console.log(getArray());
console.log(getArray(-5));
console.log(getArray(1));
console.log(getArray(10));
//6
let doubleArray = function(targetArray) {
    let newArray = [];
    if (targetArray.length > 0) {
        newArray = targetArray;
        newArray.push(...targetArray);
        return newArray;
    } else {
        return "Введите массив хотя бы с одним элементом";
    }
};
console.log(doubleArray([]));
console.log(doubleArray([1]));
console.log(doubleArray([1, 2, 3]));
//7
let changeCollection = function() {
    let newArray = [];
    if (arguments.length == 0) {
        return "Введите хотя бы один массив!";
    }
    for (let value of arguments) {
        value.shift();
        newArray.push(value);
    }
    return newArray;
};
console.log(changeCollection());
console.log(changeCollection([1, 2, 3]));
console.log(changeCollection([1, 2, 3, 4], [9, 8, 7, 6, 5]));
//8
let funcGetUsers = function(users, checkProp, checkValue) {
    let newArray = [];
    // for (let oneUser of users) {
    //     if (checkProp in oneUser) {
    //         for (let key in oneUser) {
    //             if (oneUser[key] == checkValue) {
    //                 newArray.push(oneUser);
    //             }
    //         }
    //     } else {
    //         return `Свойства ${checkProp}, ни в одном из объектов нет`;
    //     }
    //     if (newArray.length == 0) {
    //         return `Значения ${checkValue}, нет ни в одном из свойств`;
    //     }
    // }

    for (item of users) {
        if (item[checkProp] === checkValue) {
            newArray.push(item);
        }
    }
    if (newArray.length == 0) {
        return `Значения ${checkValue}, нет ни в одном из свойств`;
    }
    // Other answer

    // for (let i = 0; i < users.length; i++) {
    //     if (users[i][checkProp] === checkValue) {
    //         newArray.push(users[i]);
    //     }
    // }

    return newArray;
};

let arrUsers = [
    {
        name: "Denis",
        age: "29",
        gender: "male"
    },
    {
        name: "Olga",
        age: "18",
        gender: "female"
    },
    {
        name: "Ivan",
        age: "20",
        gender: "male"
    },
    {
        name: "Katya",
        age: "20",
        gender: "female"
    },
    {
        name: "Drew",
        age: "26",
        gender: "male"
    }
];

console.log(funcGetUsers(arrUsers, "gender", "male"));
console.log(funcGetUsers(arrUsers, "salary", "15000"));
console.log(funcGetUsers(arrUsers, "gender", "child"));

//Higher-order function
let concatFunction = function(concatArray, handler) {
    let newString = "New value: ";
    for (let value of concatArray) {
        newString += handler(value);
    }
    return newString;
};

let handlerUpperCase = function(partOfArray) {
    let newPartOfArray = "";
    for (let i = 0; i < partOfArray.length; i++) {
        if (i == 0) {
            newPartOfArray += partOfArray[i].toUpperCase();
        } else {
            newPartOfArray += partOfArray[i];
        }
    }
    return newPartOfArray;
};
console.log(concatFunction(["my", "name", "is", "Trinity"], handlerUpperCase));

let multiplyBy10 = function(partOfArray) {
    let newPartOfArray = partOfArray * 10;
    return newPartOfArray + ",";
};
console.log(concatFunction([10, 20, 30], multiplyBy10));

let ageOfUser = function(partOfArray) {
    let newPartOfArray = ` ${partOfArray.name} is ${partOfArray.age},`;
    return newPartOfArray;
};
console.log(
    concatFunction(
        [
            {
                age: 45,
                name: "John"
            },
            {
                age: 20,
                name: "Aaron"
            }
        ],
        ageOfUser
    )
);

let reverseStringFoo = function(partOfArray) {
    let newPartOfArray = "";
    for (let i = partOfArray.length - 1; i >= 0; i--) {
        newPartOfArray += partOfArray[i];
    }
    return newPartOfArray + ", ";
};
console.log(concatFunction(["abc", "123"], reverseStringFoo));

let everyFunc = function(arrNumbers, callback) {
    if (Array.isArray(arrNumbers) && typeof callback === "function") {
        let result = 0;
        for (let i = 0; i < arrNumbers.length; i++) {
            if (callback(arrNumbers[i], i, arrNumbers)) {
                result++;
            } else {
                result--;
            }
        }
        if (result == arrNumbers.length) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Первый аргумент должен быть массивом, а второй CallBack функцией!";
    }
};

let callbackFunc = function(elemArr, indexElem, allArr) {
    if (elemArr > 5) {
        return true;
    } else {
        return false;
    }
};
console.log(everyFunc([10, 8, 7, 8, 15, 12], callbackFunc));
console.log(everyFunc([5, 8, 7, 8, 15, 12], callbackFunc));
console.log(everyFunc([10, 8, 7, 8, 4, 12], callbackFunc));
console.log(everyFunc("Hello", callbackFunc));
console.log(everyFunc([10, 8, 7, 8, 4, 12], "callbackFunc"));

//This Задачи
let getSquare = function() {
    return this.width * this.height;
};
const rectange = {
    width: 10,
    height: 50,
    getSquare
};
console.log(rectange.getSquare());
console.log(getSquare());

const priceObj = {
    price: 10,
    discount: "15%",
    getPrice: function() {
        return this.price;
    },
    getPriceWithDiscount: function() {
        let discount = parseInt(this.discount);
        return this.price - (discount * this.price) / 100;
    }
};
console.log(priceObj.getPrice());
console.log(priceObj.getPriceWithDiscount());

const objFigure = {
    height: 10,
    incHeight: function() {
        return ++this.height;
    }
};
console.log(objFigure.incHeight());

const objNumerator = {
    value: 1,
    doublePlus() {
        this.value += this.value;
        return this;
    },
    plusOne() {
        this.value++;
        return this;
    },
    minusOne() {
        this.value--;
        return this;
    }
};
objNumerator
    .doublePlus()
    .plusOne()
    .plusOne()
    .minusOne();
console.log(objNumerator.value);

const objThing = {
    cost: 10,
    count: 1,
    getPriceAll: function() {
        return this.cost * this.count;
    }
};

const objDetails = {
    cost: 20,
    count: 5
};
console.log(objThing.getPriceAll());
console.log(objThing.getPriceAll.call(objDetails));

let sizes = {
    width: 5,
    height: 10
};
let getSquareWithThis = function() {
    return this.width * this.height;
};
console.log(getSquareWithThis.call(sizes));

let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();
console.log(getElementHeight());

//Arrow functions
let sum = (...props) => {
    const params = Array.prototype.slice.call(props);
    if (!params.length) {
        return 0;
    }
    return params.reduce((prev, next) => {
        return prev + next;
    });
};
console.log(sum(1, 2, 3, 4));
console.log(sum());

//Array metods
//1
let originArray1 = [1, 2, 3, 5, 8, 9, 10];
let newArray1 = originArray1.map(item => {
    //My realisation
    // if (item % 2 === 0) {
    //     return {
    //         digit: item,
    //         odd: false
    //     };
    // } else {
    //     return {
    //         digit: item,
    //         odd: true
    //     };
    // }

    //second realisation
    return {
        digit: item,
        odd: item % 2 !== 0
        //odd: Boolean(item % 2),
    };
});
console.log(newArray1);

//2
let originArray2 = [12, 4, 50, 1, 0, 18, 40];
let newArray2 = originArray2.every(item => {
    return item !== 0;
});
console.log(newArray2);

//3
let originArray3 = ["yes", "hello", "no", "easycode", "what"];
let newArray3 = originArray3.some(item => {
    return item.length > 3;
});
console.log(newArray3);

//4
let originArray4 = [
    {
        char: "a",
        index: 12
    },
    {
        char: "w",
        index: 8
    },
    {
        char: "Y",
        index: 10
    },
    {
        char: "p",
        index: 3
    },
    {
        char: "p",
        index: 2
    },
    {
        char: "N",
        index: 6
    },
    {
        char: " ",
        index: 5
    },
    {
        char: "y",
        index: 4
    },
    {
        char: "r",
        index: 13
    },
    {
        char: "H",
        index: 0
    },
    {
        char: "e",
        index: 11
    },
    {
        char: "a",
        index: 1
    },
    {
        char: " ",
        index: 9
    },
    {
        char: "!",
        index: 14
    },
    {
        char: "e",
        index: 7
    }
];
let newArray4 = [];
let concatArr = function(array) {
    //My realisation
    // let resultString = "";
    // array.forEach((item) => {
    //     newArray4[item.index] = item.char;
    // });
    // resultString = newArray4.join("");
    // return resultString;

    //Second realisation
    // const copyArr = array.slice();
    // const sortedArr = copyArr.sort((prev, next) => prev.index - next.index);
    // const strFromArr = sortedArr.reduce((acc, current) => {
    //     return (acc += current.char);
    // }, '');
    // return strFromArr;

    //optimisation
    if (!Array.isArray(array)) {
        return "Error!!";
    }

    return array
        .slice()
        .sort((prev, next) => prev.index - next.index)
        .reduce((acc, current) => (acc += current.char), "");
};
console.log(concatArr(originArray4));

//Array sort
//1
let originArraySort1 = [[14, 45], [1], ["a", "c", "d"]];
let newArraySort1 = originArraySort1.sort((prev, next) => {
    return prev.length - next.length;
});
console.log(newArraySort1);

//2
let originArraySort2 = [
    {
        cpu: "intel",
        info: {
            cores: 2,
            сache: 3
        }
    },
    {
        cpu: "intel",
        info: {
            cores: 4,
            сache: 4
        }
    },
    {
        cpu: "amd",
        info: {
            cores: 1,
            сache: 1
        }
    },
    {
        cpu: "intel",
        info: {
            cores: 3,
            сache: 2
        }
    },
    {
        cpu: "amd",
        info: {
            cores: 4,
            сache: 2
        }
    }
];
let newArraySort2 = originArraySort2.sort((prev, next) => {
    return prev.info.cores - next.info.cores;
});
console.log(newArraySort2);

//3
let originArraySort3 = [
    {
        title: "prod1",
        price: 5.2
    },
    {
        title: "prod2",
        price: 0.18
    },
    {
        title: "prod3",
        price: 15
    },
    {
        title: "prod4",
        price: 25
    },
    {
        title: "prod5",
        price: 18.9
    },
    {
        title: "prod6",
        price: 8
    },
    {
        title: "prod7",
        price: 19
    },
    {
        title: "prod8",
        price: 63
    }
];
let newArraySort3 = [];
let sortProductForPrice = function(array, minPrice, maxPrice) {
    array.forEach(item => {
        if (item.price >= minPrice && item.price <= maxPrice) {
            newArraySort3.push(item);
        }
    });
    newArraySort3.sort((prev, next) => {
        return prev.price - next.price;
    });
    return newArraySort3;
};
console.log(sortProductForPrice(originArraySort3, 0, 10));

//Closure
//1
let minusClosureFunc = function(firstArg = 0) {
    return function(secondArg = 0) {
        return firstArg - secondArg;
    };
};

console.log(minusClosureFunc(10)(6));
console.log(minusClosureFunc(5)(6));
console.log(minusClosureFunc(10)());
console.log(minusClosureFunc()(6));
console.log(minusClosureFunc()());

//2
let multiplyMaker = function(firstMultiplier) {
    //My realisatopn
    // let res = 1;
    // res *= firstMultiplier;
    // return function (secondMultiplier) {
    //     res *= secondMultiplier;
    //     return res;
    // };

    //secon realisation
    return function(secondMultiplier) {
        return (firstMultiplier *= secondMultiplier);
    };
};
const multiplyClosure = multiplyMaker(2);
console.log(multiplyClosure(2));
console.log(multiplyClosure(1));
console.log(multiplyClosure(3));
console.log(multiplyClosure(10));

//3
const stringModule = (function() {
    let resString = "";

    function setString(value = "") {
        //My realisation
        // if (typeof value === 'number') {
        //     resString += value;
        // } else {
        //     resString = value;
        // }

        //second realisation
        resString = String(value);
    }

    function getString() {
        return resString;
    }

    function getStringLength() {
        return resString.length;
    }

    function getReverseString() {
        //My realisation
        // let tempString = '';
        // for (let i = resString.length - 1; i >= 0; i--) {
        //     tempString += resString[i];
        // }
        // return tempString;

        //Second realisation
        return resString
            .split("")
            .reverse()
            .join("");
    }

    return {
        setString: setString,
        getString: getString,
        getStringLength: getStringLength,
        getReverseString: getReverseString
    };
})();
stringModule.setString("Mom washed window");
console.log(stringModule.getString());
console.log(stringModule.getStringLength());
console.log(stringModule.getReverseString());

//4
const calculatorModule = (function() {
    let res = 0;

    function setValue(value) {
        if (typeof value !== "number") {
            return "Введите число!";
        }
        res = value;
        return this;
    }

    function plus(value) {
        if (typeof value !== "number") {
            return "Введите число!";
        }
        res += value;
        return this;
    }

    function multiply(value) {
        if (typeof value !== "number") {
            return "Введите число!";
        }
        res *= value;
        return this;
    }

    function getValue() {
        res = res.toFixed(2);
        return res;
    }

    return {
        setValue: setValue,
        plus: plus,
        multiply: multiply,
        getValue: getValue
    };
})();
console.log(
    calculatorModule
        .setValue(5)
        .plus(5)
        .multiply(2)
        .getValue()
);

calculatorModule.setValue(15);
console.log(calculatorModule.plus(5));
console.log(calculatorModule.multiply(2));
console.log(calculatorModule.getValue());

//destructurisation
//1
let destrFucn1 = function() {
    const [firstArgFromArr, ...other] = arguments;

    return { firts: firstArgFromArr, second: other };
};
console.log(destrFucn1("1", "2", "3", "4"));

//2
let getInfoFunc = function(obj) {
    const {
        name = "Unknown",
        info: {
            partners: [firstPartner, secondPartner]
        }
    } = obj;
    return `Name: ${name} \nPartners: ${firstPartner} ${secondPartner}`;
};

const organisation = {
    name: "Google",
    info: {
        employees: ["Vlad", "Olga"],
        partners: ["Microsoft", "Facebook", "Xing"]
    }
};

console.log(getInfoFunc(organisation));
