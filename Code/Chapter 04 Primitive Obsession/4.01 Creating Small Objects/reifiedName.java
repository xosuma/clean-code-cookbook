public class Name {
    private final String name; 

    public Name(String name) {
        this.name = name;
        // 이름에는 자체적으로 고유한 생성 규칙, 비교 등이 있습니다.
        // 문자열과 다를 수 있습니다.
    }
}
  
public class Person {
    private final Name name; 

    public Person(Name name) {
        // 유효한 이름으로 생성됩니다.
        // 이곳에 유효성 검증을 추가하지 않아도 됩니다.
        this.name = name;
    }
}