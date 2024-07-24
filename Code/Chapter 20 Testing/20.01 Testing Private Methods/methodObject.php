<?

final class Star {
  
  private $distanceInParsecs;   
  
  public function timeToReachLightToUs() {      
      return (new ParsecsToLightYearsConverter())
        ->convert($this->distanceInParsecs);
  }
}

final class ParsecsToLightYearsConverter {
  public function convert($distanceInParsecs) {
      return 3.26 * $distanceInParsecs;
  }
}

final class ParsecsToLightYearsConverterTest extends TestCase {
  public function testConvert0ParsecsReturns0LightYears() {
    $this->assertEquals(0, 
      (new ParsecsToLightYearsConverter())->convert(0));
  }
    // 많은 테스트를 추가하고 이 객체에 의존할 수 있습니다.
    // 따라서 별(Star) 전환을 테스트할 필요가 없습니다
    // 아직 Star의 public timeToReachLightToUs()를 테스트할 수 없습니다
    // 이것은 단순화된 시나리오입니다.
}