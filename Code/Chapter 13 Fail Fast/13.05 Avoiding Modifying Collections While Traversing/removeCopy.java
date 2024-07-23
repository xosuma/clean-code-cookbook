Collection<Integer> people = new ArrayList<>();
// 여기에서 컬렉션에 요소를 추가합니다.

List<Object> iterationPeople = ImmutableList.copyOf(people);
    
for (Object person : iterationPeople) {
    if (condition(person)) {
        people.remove(person);
    }
}
// 복사본을 순회하며 원본 요소를 제거합니다.

coll.removeIf(currentIndex -> currentIndex == 5);
// 또는 언어에서 제공하는 기능(사용 가능한 경우)을 사용하세요.
