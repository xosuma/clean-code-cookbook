const elements = new Set();

elements.add(1);
elements.add(1);

echo elements.size() yields 1 
// 다음은 표준 집합(set) 입니다.

var moreElements = new MultiSet();
// 다중 집합을 영어로 정의했습니다.

moreElements.add('hello');
moreElements.add('hello');

echo moreElements.size() yields 2 // 다중 집합이기 때문에 2를 출력합니다.

// elements와 moreElements는 다형성에 부합합니다.
// 둘 중 하나를 Person 클래스에서 사용할 수 있습니다. 심지어 런타임에서도요.
