// 주소만 있습니다.
public class Address {
	
    private String zipCode;
    private String city;
    private String state;

    public Address(String city, String state, String zipCode) {
        // Looks anemic :(
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }

    public String zipCode() {
        return zipCode;
    }
	
    public String city() {
        return city;
    }

    public String state() {
        return state;
    }

}

Address nullAddress = new Address(
    Constants.EMPTY_STRING, 
    Constants.EMPTY_STRING, 
    Constants.EMPTY_STRING);

// 이것은 null 객체입니다.
// 싱글턴, 정적, 전역에 할당해서는 안 됩니다.
// null 객체처럼 작동합니다. 이 정도면 충분합니다.
// 섣부른 최적화는 없습니다.
