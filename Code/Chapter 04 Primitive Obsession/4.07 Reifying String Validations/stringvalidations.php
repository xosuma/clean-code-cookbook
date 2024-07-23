<?

// 첫 번째 예제: 주소 유효성 검증
class Address { 
  function __construct(string $emailAddress) {
     // Address 클래스에 대한 문자열 유효성 검증이
     // 단일 책임 원칙을 위반합니다.
     $this->validateEmail($emailAddress);
     // ...
   }
  
  private function validateEmail(string $emailAddress) {
    $regex = "/[a-zA-Z0-9_-.+]+@[a-zA-Z0-9-]+.[a-zA-Z]+/";
    // 정규 표현식은 예시일 뿐이며 틀릴 수도 있습니다.
    // 이메일과 URL은 객체여야 합니다.

    if (!preg_match($regex, $emailAddress))
    {
      throw new Exception('이메일 주소가 유효하지 않습니다: ' . emailAddress);
    }    
  }
}

// 두 번째 예제: 워들

class Wordle { 
  function validateWord(string $wordleword) {
    // 워들의 단어는 현실 세계의 엔티티여야 합니다. 문자열의 하위 집합이 아닙니다
  }
 }