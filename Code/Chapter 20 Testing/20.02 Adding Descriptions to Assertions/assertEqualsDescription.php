<?

public function testNoNewStarsAppeared(): void
  {
     $expectedStars = $this->historicStarsOnFrame();
     $observedStars = $this->starsFromObservation();
     // 이 구문들은 매우 큰 컬렉션을 얻습니다.
  
     $newStars = array_diff($expectedStars, $observedStars);
  
     $this->assertEquals($expectedStars, $observedStars,
         '새로운 별들이 있습니다. ' . print_r($newStars,true));
     // 이제 명확하고 선언적인 메시지로
     // 어서션이 실패한 이유를 정확히 확인할 수 있습니다.
  }