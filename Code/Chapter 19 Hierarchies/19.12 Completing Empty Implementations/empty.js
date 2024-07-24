class MerchantProcessor {
  processPayment(amount) {
    // 기본 구현 없음
  }
}

class MockMerchantProcessor extends MerchantProcessor {
  processPayment(amount) {
    // 컴파일러를 준수하기 위한 빈 구현
    // 아무것도 하지 않음
  }
}