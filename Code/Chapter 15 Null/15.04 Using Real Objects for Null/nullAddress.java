abstract class Address {
	public abstract String getCity();
	public abstract String getState();
	public abstract String getZipCode();
}

// null 객체에 상속을 사용하는 것은 실수입니다.
public class NullAddress extends Address {
	
	public NullAddress() { }
	
	public String getCity() {
		return Constants.EMPTY_STRING;
	}

	public String getState() {
		return Constants.EMPTY_STRING;
	}

	public String getZipCode() {
		return Constants.EMPTY_STRING;
	}

}

public class RealAddress extends Address {
	
	private String zipCode;
	private String city;
	private String state;

	public RealAddress(String city, String state, String zipCode) {
		this.city = city;
		this.state = state;
		this.zipCode = zipCode;
	}

	public String getZipCode() {
		return zipCode;
	}
	
	public String getCity() {
		return city;
	}

	public String getState() {
		return state;
	}
}