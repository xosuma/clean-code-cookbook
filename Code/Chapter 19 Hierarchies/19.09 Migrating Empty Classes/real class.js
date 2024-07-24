class ShopItem {
  constructor(code, description) {
    // 코드 및 설명 유효성 검사
    this._code = code;
    this._description = description;
  }
  code() {
    return this._code;
  }
  description() {
    return this._description;
  }
  // 빈약한 클래스를 피하기 위해 더 많은 함수 추가
  // 게터도 코드 스멜이기에 더 작업이 필요합니다.
}

bookItem = new ShopItem("book", "some book");
// 더 많은 item 만들기
