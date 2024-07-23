switch (value) {
  case value1:
    // value1과 일치하면 다음이 실행됩니다.
    doSomething();
    break;
  case value2:
    // value2와 일치하면 다음이 실행됩니다.
    doSomethingElse();
    break;
  default:
    // 값이 현재 위의 값이나 미래의 값과 일치하지 않는 경우, 다음이 실행됩니다.
    doSomethingSpecial();
    break;
}