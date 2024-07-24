<?

final class RangeUnitTest extends TestCase {
 
  function testValidOffset() {
    $range = new Range(1, 1);
    $offset = $range->offset();
    $this->assertEquals(10, $offset, '모든 페이지는 늘 offset이 10이어야 합니다.');
    // 예상값은 항상 첫 번째 인수가 되어야 합니다.
    // 기능적 필수 설명을 추가합니다.
    // 테스트에서 제공하는 우발적인 설명을 보완합니다.
  }  
}

// When failing Unit framework will show us
//
// 1 Test, 1 failed
// Failing asserting 0 matches expected 10
// All pages must have 10 as offset <-- business description
//
// <Click to see difference> 
// (and a diff comparator will help us and it will be a great help
// for complex objects like objects or jsons)