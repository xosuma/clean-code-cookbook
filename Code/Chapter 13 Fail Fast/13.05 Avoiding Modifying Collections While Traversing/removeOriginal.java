// 여기에서 컬렉션에 요소를 추가합니다.
Collection<Integer> people = new ArrayList<>();
  
for (Object person : people) {
    if (condition(person)) {
        people.remove(person);
    }
}
// 요소를 순회하면서 제거합니다.
// 다른 제거 대상 후보를 건너뛰는 위험이 있습니다.