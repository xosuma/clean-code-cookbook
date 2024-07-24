<?

final class DatabaseQueryOptimizer {
  
  public function selectWithCriteria($tableName, $criteria) {
    // criteria를 조작해 최적화하기
  }
  
  private function sqlParserOptimization(SQLSentence $sqlSentence)
    : SQLSentence {
    // SQL을 구문 분석해 문자열로 변환한 다음
    // 해당 노드를 문자열과 다양한 정규식으로 작업합니다.
    // 이는 실제 SQL의 이점을 극복하는 데 많은 비용이 드는 작업이었습니다.
    // 하지만 너무 많은 노력을 기울였기 때문에 코드를 유지하기로 결정했습니다.
  }  
}