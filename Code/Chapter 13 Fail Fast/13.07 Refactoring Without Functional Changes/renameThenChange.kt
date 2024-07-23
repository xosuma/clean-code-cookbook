fun getFactorial(n) {
  return n * getFactorial(n);
}

// 변경

fun getFactorial(n) {
  return n * getFactorial(n-1);
}

// 테스트 진행

fun factorial(n) {
  return n * factorial(n-1);
}

// 이름 변경
