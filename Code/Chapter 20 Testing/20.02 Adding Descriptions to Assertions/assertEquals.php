<?

public function testNoNewStarsAppeared(): void
  {
     $expectedStars = $this->historicStarsOnFrame();
     $observedStars = $this->starsFromObservation();
     // 이 구문들은 매우 큰 컬렉션을 얻습니다.
  
     $this->assertEquals($expectedStars, $observedStars);
     // 무언가 실패하면 디버깅하는 데 매우 어려움을 겪게 됩니다.
    }