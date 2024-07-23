if (cart.items() > 11 && user.isRetail())  { 
  doStuff();
}
doMore();
// 프로덕션 코드

// 만약 조건을 강제하거나 건너뛰어야 하는 경우
// 실제 상황을 강제하는 커버 테스트를 통해 수행하고 코드 수정을 피함

testLargeCartItems() 
testUserIsRetail()