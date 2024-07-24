public class Person {
  int childrenCount; 

  public Person(int id, int childrenCount) {
    this.childrenCount = childrenCount; 
    // 생성자에서 번호를 지정할 수 있습니다.
    // 우발적 데이터베이스와 분리되었습니다.
    // 객체를 테스트할 수 있습니다.
  }
}