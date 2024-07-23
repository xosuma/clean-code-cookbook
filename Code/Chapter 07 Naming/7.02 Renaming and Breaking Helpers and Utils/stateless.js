class UserScore {
  // 이는 빈약한 클래스로 더 나은 프로토콜이 있어야 합니다.

  constructor(name, lastname, points) {
    this._name = name;
    this._lastname = lastname;
    this._points = points;
  }
  name() {
    return this._name;
  }
  lastname() {
    return this._lastname;
  }
  points() {
    return this._points;
  }
}

class FullNameFormatter {      
  fullname(userscore) {
    return `${userscore.name()} ${userscore.lastname()}`;
  }
}

class CategoryCalculator {
  display(userscore) {
    return userscore.points() > 70 ? 'A' : 'B';
  }
}  
  
let alice = new UserScore('Alice', 'Gray', 78);

const fullName = new FullNameFormatter().fullname(alice);
const category = new CategoryCalculator().display(alice);