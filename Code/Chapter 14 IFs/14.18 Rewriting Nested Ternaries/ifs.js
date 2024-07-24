const getUnits = secs => {
 if (secs <= 60) return 'seconds'; 
 if (secs <= 3_600) return 'minutes'; 
 if (secs <= 86_400) return 'hours';   
 if (secs <= 2_592_000) return 'days';    
 if (secs <= 31_536_000) return 'months';  
 return 'years' 
}

// 가독성을 높이기 위해 자바스크립트의 numeric separators 표기법을 사용합니다.
// 밑줄 문자(_)는 자바스크립트 엔진에서 무시되며 숫잣값에 영향을 주지 않습니다.

const getUnits = (secs) => {
  if (secs <= 60) return "seconds";
  if (secs <= 60 * 60) return "minutes";
  if (secs <= 24 * 60 * 60) return "hours";
  if (secs <= 30 * 24 * 60 * 60) return "days";
  if (secs <= 12 * 30 * 24 * 60 * 60) return "months";
  return "years";
};

// 4장 섣부른 최적화를 읽고 나면 성능에 상당한 불이익이 발생하는지 확인할 수 있습니다.
