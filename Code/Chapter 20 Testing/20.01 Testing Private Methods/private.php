<?

final class Star {
  
  private $distanceInParsecs;
  
  public function timeToReachLightToUs() {
    return $this->convertDistanceInParsecsToLightYears(
      $this->distanceInParsecs);
  }
  
  private function convertDistanceInParsecsToLightYears(
    $distanceInParsecs) {
      return 3.26 * $distanceInParsecs;
      // 함수는 $distanceInParsec에 대한 private 접근 권한이 있으므로
      // 이미 사용 가능한 인수를 사용하고 있습니다.
      // 이는 또 다른 문제 위험 요소를 나타내는 지표입니다.
      
      // 이 기능은 private이기에 직접 테스트할 수 없습니다.
  }
}