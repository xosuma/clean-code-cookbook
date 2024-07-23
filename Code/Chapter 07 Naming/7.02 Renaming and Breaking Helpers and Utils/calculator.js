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
  constructor(userscore) {
    this._userscore = userscore;
  }
  fullname() {
    return `${this._userscore.name()} ${this._userscore.lastname()}`;
  }
}

class CategoryCalculator {
  constructor(userscore1) {
    this._userscore = userscore1;
  }
  display() {
    return this._userscore.points() > 70 ? "A" : "B";
  }
}

let alice = new UserScore("Alice", "Gray", 78);

const fullName = new FullNameFormatter(alice).fullname();
const category = new CategoryCalculator(alice).display();
