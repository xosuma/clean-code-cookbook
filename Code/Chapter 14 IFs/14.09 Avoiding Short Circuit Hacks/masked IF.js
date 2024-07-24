userIsValid() && logUserIn();

// 이 표현식은 단락 평가되어 있습니다.
// 첫 번째 문이 참이 아니면 두 번째 문은 실행되지 않습니다.

functionDefinedOrNot && functionDefinedOrNot();

// 일부 언어에서는 undefined(정의되지 않은)는 거짓으로 작동합니다.
// 만약 functionDefinedOrNot이 정의되지 않은 경우,
// 이는 오류를 발생시키지도 않고 실행되지도 않습니다.
