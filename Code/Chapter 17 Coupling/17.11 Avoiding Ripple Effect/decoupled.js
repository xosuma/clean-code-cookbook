class Time {
   constructor(hour, minute, seconds, timezone) {
     this.hour = hour;    
     this.minute = minute;  
     this.seconds = seconds;  
     this.timezone = timezone;  
  }  
  // 컨텍스트 없이는 유효하지 않다 보니now()를 제거했습니다.
}

class RelativeClock {
   constructor(timezone) {
     this.timezone = timezone;
   }
   now(timezone) {
     var localSystemTime = this.localSystemTime();
     var localSystemTimezone = this.localSystemTimezone();
     // 시간대 변환 계산
     // ...
     return new Time(..., timezone);     
   }  
}