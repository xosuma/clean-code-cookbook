class Person {
  constructor(name, emails) {
    this.name = name;
    this.emails = emails;
    // emails는 항상 컬렉션이어야 합니다(비어 있는 것조차도).
    // 여기에서 확인할 수 있습니다.
    if (emails.length > 1) {
      throw new Error(
        "이메일 컬렉션에는 최대 하나의 요소만 포함할 수 있습니다."
      );
    }
  }

  emails() {
    return this.emails;
  }
  // 이메일은 필수 사항이 아니므로 변경할 수 있습니다.

  addEmail(email) {
    this.emails.push(email);
  }

  removeEmail(email) {
    const index = this.emails.indexOf(email);
    if (index !== -1) {
      this.emails.splice(index, 1);
    }
  }
}

// null을 확인하지 않고 person.emails()를 순회할 수 있습니다.
