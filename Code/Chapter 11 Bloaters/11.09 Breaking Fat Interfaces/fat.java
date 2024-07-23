interface Animal {
  void eat();
  void sleep();
  void makeSound();
  // 이 프로토콜은 모든 동물에게 공통으로 적용되어야 합니다.
}

class Dog implements Animal {
  public void eat() { }
  public void sleep() { }
  public void makeSound() { }
}

class Fish implements Animal
  public void eat() { }
  public void sleep() {
    throw new UnsupportedOperationException("나는 잠을 자지 않는다.");
  }
  public void makeSound() {
    throw new UnsupportedOperationException("나는 소리를 내지 않는다.");
  }
}

class Bullfrog implements Animal
  public void eat() { }
  public void sleep() { 
    throw new UnsupportedOperationException("나는 잠을 자지 않는다.");  
  }
  public void makeSound() { }
}
