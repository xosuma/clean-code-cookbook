class MerchantProcessor {
  processPayment(amount) {
    throw new Error("오버라이드 되어야 합니다.");
  }
}

class MockMerchantProcessor extends MerchantProcessor {
  processPayment(amount) {
     throw new Error("필요할 때 구현할 예정입니다.");
  }
}

// 더 나은 것은..

class MockMerchantProcessor extends MerchantProcessor {
  processPayment(amount) {
    console.log(`모의 결제 처리: $${amount}`);
  }
}

