switch (value) {
  case value1:
    // value1과 일치하면 다음이 실행됩니다.
    doSomething();
    break;
  case value2:
    // value2와 일치하면 다음이 실행됩니다.
    doSomethingElse();
    break;
  case value3:
  case value4:
    // 현재 다음과 같은 옵션이 있다는 것을 알고 있습니다.
    doSomethingSpecial();
    break;
  default:
    // 값이 위의 값과 일치하지 않으면 결정을 내려야 합니다.
    throw new Exception("예상치 못한 경우 " + value + "를 고려해야 합니다.");
    break;
}