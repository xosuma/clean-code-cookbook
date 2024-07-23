const DISCOUNT_PLATINUM = 0.1;
const DISCOUNT_GOLD = 0.05;
const DISCOUNT_SILVER = 0.02;

// 변수는 상수로 선언되었기 때문에 재할당할 수 없습니다.
const DISCOUNT_PLATINUM = 0.05; // 오류

// 그룹화할 수 있습니다.
const ALL_CONSTANTS = {
  DISCOUNT: {
    PLATINUM = 0.1;
    GOLD = 0.05;
    SILVER = 0.02;  
  },
};

const ALL_CONSTANTS = 3.14; // 오류

ALL_CONSTANTS.DISCOUNT.PLATINUM = 0.08; // 오류가 아님!

const ALL_CONSTANTS = Object.freeze({
  DISCOUNT: 
    PLATINUM = 0.1;
    GOLD = 0.05;
    SILVER = 0.02; 
});

const ALL_CONSTANTS = 3.14; // 오류

ALL_CONSTANTS.DISCOUNT.PLATINUM = 0.12; // 오류가 아님!
