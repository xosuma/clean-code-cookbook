<?

final class RangeUnitTest extends TestCase {
 
  function testValidOffset() {
    $range = new Range(1, 1);
    $offset = $range->offset();
    $this->assertTrue(10 == $offset);    
    // 기능적 필수 설명이 없습니다. :(
    // 테스트에서 제공하는 우발적인 설명은 매우 도움이 되지 않습니다.
  }  
}

// When failing Unit framework will show us
//
// 1 Test, 1 failed
// Failing asserting true matches expected false :(
// () <-- no business description :(
//
// <Click to see difference> - Two booleans
// (and a diff comparator will show us two booleans)