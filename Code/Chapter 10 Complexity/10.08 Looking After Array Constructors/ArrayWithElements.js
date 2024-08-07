const arrayWithTwoElements = new Array(3, 1);

console.log(arrayWithTwoElements); // [ 3, 1 ]
console.log(arrayWithTwoElements[0]); // 3
console.log(arrayWithTwoElements[1]); // 1
console.log(arrayWithTwoElements[2]); // Undefined
console.log(arrayWithTwoElements[5]); // Undefined (범위 벗어남이 나타나야함)
console.log(arrayWithTwoElements.length); // 2

const arrayWithTwoElementsLiteral = [3,1];

console.log(arrayWithTwoElementsLiteral); // [ 3, 1 ]
console.log(arrayWithTwoElementsLiteral[0]); // 3
console.log(arrayWithTwoElementsLiteral[1]); // 1
console.log(arrayWithTwoElementsLiteral[2]); // Undefined
console.log(arrayWithTwoElementsLiteral[5]); // Undefined
console.log(arrayWithTwoElementsLiteral.length); // 2