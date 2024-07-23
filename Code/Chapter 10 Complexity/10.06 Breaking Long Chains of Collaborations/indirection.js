class Dog {
   constructor(feet) {
     this.feet = feet;    
  }
  getFeet() {    
    return this.feet;
  }  
}

class Foot {
  move() { }
}

feet = [new Foot(), new Foot(), new Foot(), new Foot()];
dog = new Dog(feet);

for (var foot of dog.getFeet()) {
  foot.move(); 
}

// 다음과 동일: dog.getFeet()[0].move(); dog.getFeet()[1].move() ...
