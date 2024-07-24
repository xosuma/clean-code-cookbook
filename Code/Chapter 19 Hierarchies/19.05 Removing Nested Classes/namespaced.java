class Address {
  String description = "Address: ";
}
 
class City {
  String name = "Doha";
}

public class Main {
  public static void main(String[] args) {
    Address homeAddress = new Address();
    City homeCity = new City();
    System.out.println(homeAddress.description + homeCity.name);
  }
}

// 출력은 다음과 같습니다 "Address: Doha"
// 이제 도시(City) 개념을 재사용하고 테스트할 수 있습니다.
