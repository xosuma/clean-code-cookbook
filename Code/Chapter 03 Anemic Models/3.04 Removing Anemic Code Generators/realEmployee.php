<?

final class Employee {
    private $name;
    private $workingStatus;

    public function __construct(
        string $name, WorkingStatus $workingStatus) {
        // 이 부분에 생성자 및 초기 설정 코드를 작성합니다
    }

    public function name(): string {
        return $this->name;
        // This is not a getter.
        // 이것은 게터가 아닙니다.
        // 이는 직원의 책임 중 하나인 원래 이름을 알리는 부분입니다.
        // 실수로 같은 이름(name)으로 속성을 구현했습니다.
    }
}

// 매직 세터 혹은 게터가 없습니다.
// 모든 메서드는 실제로 디버깅이 가능합니다.
// WorkingStatue 객체는 구조상 유효하므로 유효성 검사는 암시적입니다.

$john = new Employee('John', new HiredWorkingStatus());

$john->name(); // 'John' 반환
