class Address {
  String description = "Address: ";

  public class City {
    String name = "Doha";
  }
}

public class Main {
  public static void main(String[] args) {
    Address homeAddress = new Address();
    Address.City homeCity = homeAddress.new City();
    System.out.println(homeAddress.description + homeCity.name);
  }
}

// 출력은 다음과 같습니다: "Address: Doha"
// 만약 공개 여부를 'private class City'와 같이 변경하면
// 다음과 같은 오류가 발생합니다: "Address.City has private access in Address"