abstract class PerserveranceDirection { 
}

class North extends PerserveranceDirection {}
class East extends PerserveranceDirection {}
class West extends PerserveranceDirection {}
class South extends PerserveranceDirection {}

// 하위 클래스의 이름이 대체적으로 짧고 계층 구조 밖에서 의미를 가지고 있지 않습니다.
// 만약 여러분이 동쪽을 참조할 경우, 동쪽을 구심점으로 착각할 수 있습니다.
