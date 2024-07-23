let counter = 0;

function incrementCounter(value: number): void {
  // 두 가지 부작용
  counter += value;
  // 전역 변수 counter를 수정
  
  console.log(`현재 카운터는 ${counter}`); 
  // 콘솔에 메시지 출력
}
