function add(a, b) {
  return a + b;
}
// 이는 많은 프로그래밍 언어에서 자연스럽지만, 실생활에서는 부자연스럽습니다.

class GraphicEditor {
  constructor() {
    this.PI = 3.14;
    // 이곳에 상수를 정의하면 안 됩니다.
  }

  pi() {
    return this.PI;
    // 이는 객체의 책임이 아닙니다.
  }

  drawCircle(radius) {
    console.log(
      `원 그리기: 반지름은 ${radius} ` + "둘레는 " + 2 * this.pi() * radius
    );
  }
}