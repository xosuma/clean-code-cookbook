public class Person {
 
public String name;
// public 속성을 갖는 것도 또 다른 문제입니다.  
 
 @Override
 public boolean equals(Person anotherPerson) {
   return name.equals(anotherPerson.name); 
 }
 	
@Override
 public int hashCode() {
   return (int)(Math.random()*256); 
 }
 // 이는 상관관계가 없는 예시일 뿐입니다.
 
 // 해시맵을 사용할 때 실수로 객체가 컬렉션에 없다고 추측할 수 있습니다.
}