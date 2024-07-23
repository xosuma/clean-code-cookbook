class Dog {
   constructor(feet) {
     this.feet = feet;    
  }
  walk() {
    // 강아지가 걷는 방식이 캡슐화되었습니다.
    for (var foot of this.feet) {
      foot.move();
    }
  }
}

class Foot {
  move() { }
}

feet = [new Foot(), new Foot(), new Foot(), new Foot()];
dog = new Dog(feet);
dog.walk();