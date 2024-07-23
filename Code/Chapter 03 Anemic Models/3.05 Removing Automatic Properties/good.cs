class Person
{
  private string name;  
  
  public Person(string personName)
  {
    name = personName;
    // 불변
    // 게터와 세터가 없습니다.
  }

  // ... 다른 프로토콜(private 변수명 접근 등)
}