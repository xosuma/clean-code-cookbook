class BlockchainAccount {
  // ...
  public double balance() {
    return new BalanceCalculator(this).netValue();
  }
}

// 1. 메서드 호출을 나타내는 객체를 생성합니다.
// 2. 큰 메서드를 새 객체로 이동합니다.
// 3. 메서드의 임시 변수를 private 속성으로 변환합니다.
// 4. 메서드 추출을 사용해 큰 메서드를 새 객체에서 분리합니다.
// 5. 메서드 호출에서 매개변수를 private 속성으로 변환해 제거합니다.

class BalanceCalculator {
  private string address;
  private BlockchainAccount account;
  
  public BalanceCalculator(BlockchainAccount account) {
    this.account = account;
  }
  
  public double netValue() {
    this.findStartingBlock();
    //...
    this computeTransactions();
  }
}