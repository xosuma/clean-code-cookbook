class Time {
   constructor(hour, minute, seconds) {
     this.hour = hour;    
     this.minute = minute;  
     this.seconds = seconds;  
  }
    now() {
      // 운영 체제 호출
    }  
}

// 시간대를 추가하면 큰 파급 효과가 있을 것입니다.
// 시간대를 고려하도록 now()를 변경해도 같은 파급 효과가 발생합니다.
