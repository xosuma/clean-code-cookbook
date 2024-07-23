<?

// 첫 번째 예제: 주소 유효성 검증
class Address { 
  function __construct(EmailAddress $emailAddress) {
     // 이메일은 늘 유효합니다. 코드는 더 깔끔해지고 중복되지 않습니다.
     // ...
   }
}
  
class EmailAddress { 
  // 복사 붙여넣기를 사용하지 않고 이 객체를 여러 번 재사용할 수 있습니다.
  string $address; 
  private function __construct(string $emailAddress) {
    $regex = "/[a-zA-Z0-9_-.+]+@[a-zA-Z0-9-]+.[a-zA-Z]+/";
    // 정규 표현식은 예시일 뿐이며 틀릴 수도 있습니다.
    // 이메일과 URL은 객체여야 합니다.

    if (!preg_match($regex, $emailAddress))
    {
      throw new Exception('이메일 주소가 유효하지 않습니다: ' . emailAddress);
    }   
    $this->address = $emailAddress;
  }
}

// 두 번째 예제: 워들

class Wordle { 
  function validateWord(WordleWord $wordleword) {
    // 워들의 단어는 현실 세계의 엔티티여야 합니다. 문자열의 하위 집합이 아닙니다.
  }
 }

class WordleWord { 
  function __construct(string $emailAddress) {
    // 잘못된 워들 단어 만들기를 방지합니다.
    // 예를 들어 length != 5와 같이 길이가 5가 아닌 단어를 제한합니다.
  }
 }