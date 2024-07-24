public class Vehicle
{
  // 클래스는 리프가 아닙니다. 따라서 abstract이어야 합니다.
  
  // 시동 기능을 정의하지 않고 선언만 하는 abstract 메서드입니다.
  // 차량마다 다른 시동 메커니즘을 사용하기 때문입니다.
  abstract void start();
}

public class Car extends Vehicle
{
  // 클래스는 리프입니다. 따라서 final 이어야 합니다.
}

public class Motorcycle extends Vehicle
{
  // 클래스는 리프입니다. 따라서 final 이어야 합니다.
}