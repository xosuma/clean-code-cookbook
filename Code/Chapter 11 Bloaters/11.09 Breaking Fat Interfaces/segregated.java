interface Animal {
  void move();
  void reproduce();  
}
// 다음 두 가지 책임을 분리할 수도 있습니다.

class Dog implements Animal {
  public void move() { }
  public void reproduce() { } 
}

class Fish implements Animal {
  public void move() { }
  public void reproduce() { } 
}

class Bullfrog implements Animal {
  public void move() { }
  public void reproduce() { } 
}