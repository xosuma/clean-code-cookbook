const elements = new Set();

elements.add(1);
elements.add(1);

echo elements.size() yields 1 
// 다음은 표준 집합(set) 입니다.

var moreElements = new MultiConjunto();
// 기존 도메인을 확장하기 때문에
// 스페인어를 이용해 다중 집합(multiset)을 정의했습니다.

moreElements.agregar('hello');
moreElements.agregar('hello');
// agregar는 스페인어로 추가(add)를 의미합니다.

echo moreElements.size() yields 2 // Since it is a multiset

// elements와 moreElements는 다형성에 부합하지 않습니다
// 구현된 함수를 서로 사용할 수 없습니다.

class Person {
    constructor() {
        this.visitedCities = new Set();
   }

    visitCity(city) {
        this.visitedCities.add(city);
        // 집합(set)을 다중 집합(MultiConjunto)으로 변경하면 작동하지 않습니다.
        // 집합은 add()를 기대하지만 다중 집합은 agregar()를 기대하기 때문입니다.
    }
}