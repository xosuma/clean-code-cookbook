class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  email() {
    return this.email;
    // null일 수 있습니다.
  }  
}

// person.email()을 안전하게 사용할 수 없습니다.
// 명시적으로 null인지 확인해야 합니다.
