// 간단함
public class Address {
    private String street;
    private String houseNumber;
    private City city;
    // ..
}

// 또는
// 이 둘은 실제로 사용되는 이름입니다.
public class Address implements ContactLocation {
    private String street;
    private String houseNumber;
    private City city;
    // ..
}