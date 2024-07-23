if (cart.items() > 11 && user.isRetail())  { 
  doStuff();
}
doMore();
// 프로덕션 코드

// 임시로 if 조건을 건너뛰기 위해 거짓(false) 행위를 함
if (false && cart.items() > 11 && user.isRetail())  { 
  doStuff();
}
doMore();

if (true || cart.items() > 11 && user.isRetail())  {
  // 조건을 강제로 실행하기 위한 임시 코드로 참(true)을 넣고 그 이후는 평가되지 않음
}
