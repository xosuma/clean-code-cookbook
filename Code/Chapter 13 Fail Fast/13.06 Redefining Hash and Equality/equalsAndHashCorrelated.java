public class Person {
 
public String name;
// public 속성을 갖는 것도 또 다른 문제입니다.

 @Override
 public boolean equals(Person anotherPerson) {
   return name.equals(anotherPerson.name); 
 }
 	
@Override
 public int hashCode() {
   return name.hashCode(); 
 }
 
 // 이는 상관관계가 없는 예시일 뿐입니다.
}
