class Integer {
  function add(adder) {
    return this + adder;
  }
}
// 일부 프로그래밍 언어에서는 컴파일되지 않습니다.
// 그 이유는 일부 동작을 기본 클래스로 변경하는 것을 금지하기 때문입니다.
// 그러나 이 곳은 add의 책임이 적절하게 배치되는 곳입니다.

class GraphicEditor {
  drawCircle(radius) {
    console.log("원 그리기: 반지름은 " + radius +
      " 둘레는 " + (2 * RealConstants.pi() * radius));    
  }
}
// PI의 정의는 RealConstants(혹은 Number 또는 이와 유사한)의 책임입니다.

class RealConstants {
  pi() {
    return 3.14;
  }
}
