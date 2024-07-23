public class EmailAddress {
    public String emailAddress;

    public EmailAddress(String address) {
        String expressions = "^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$";
        if (!Regex.IsMatch(email, expressions) {
          throw new Exception('이메일 주소가 유효하지 않습니다.');
        }
        this.emailAddress = address;
    }
}

destination = new EmailAddress("destination@example.com");