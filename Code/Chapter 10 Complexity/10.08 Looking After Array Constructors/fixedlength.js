const arrayWithFixedLength = new Array(3);

console.log(arrayWithFixedLength); // [ <3 empty items> ] 세 가지 빈 항목이 나옴
console.log(arrayWithFixedLength[0]); // Undefined
console.log(arrayWithFixedLength[1]); // Undefined
console.log(arrayWithFixedLength[3]); // Undefined
console.log(arrayWithFixedLength[4]); // Undefined too
// 이는 index out of range(인덱스 범위를 벗어남)가 나와야 합니다.
console.log(arrayWithFixedLength.length); // 3