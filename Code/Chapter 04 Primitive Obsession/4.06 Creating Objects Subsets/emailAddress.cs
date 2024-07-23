public class EmailAddress {
    public string emailAddress;

    public EmailAddress(string address) {
        string expressions = @"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$";
        if (!Regex.IsMatch(address, expressions)) {
            throw new Exception("이메일 주소가 유효하지 않습니다.");
        }
        this.emailAddress = address;
    }
}

destination = new EmailAddress("destination@example.com");