<?

function buildCar($color = "red", $model) {
  //...
}  
// 첫 번째 인수가 선택적 인수입니다.

buildCar("Volvo");  
// Runtime error: Too few arguments to function buildCar()
// buildCar() 함수에 인수가 너무 적다는 런타임 오류가 발생합니다.