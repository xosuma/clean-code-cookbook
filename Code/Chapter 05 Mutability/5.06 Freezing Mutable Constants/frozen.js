export const ALL_CONSTANTS = Object.freeze({
  DISCOUNT: Object.freeze({
    PLATINUM = 0.1;
    GOLD = 0.05;
    SILVER = 0.02;  
  }),
});

const ALL_CONSTANTS = 3.14; // 오류

ALL_CONSTANTS.DISCOUNT.PLATINUM = 0.12; // 오류
// 코드는 작동하지만, 결합되어 있어 테스트할 수 없습니다.

class TaxesProvider {
  applyPlatinum(product);
}

// 이제 클래스에 설정자가 없기 때문에 인터페이스(세금 제공자의 프로토콜)에
// 결합할 수 있으며, 이는 상수이자 불변이므로 테스트에서 이를 대체할 수 있습니다.
