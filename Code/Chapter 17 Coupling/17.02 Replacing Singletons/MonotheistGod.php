<?

interface Religion {
    // 종교에 대한 공통 행동 정의
}

final class God {
    // 종교마다 신념이 다름
}

final class PolythiesticReligion implements Religion {
    private $gods;

    public function __construct(Collection $gods) {
        $this->gods = $gods;
    }
}

final class MonotheisticReligion implements Religion {
    private $godInstance;

    public function __construct(God $onlyGod) {
        $this->godInstance = $onlyGod;
    }
}

// 기독교와 일부 다른 종교에 따르면 신은 오직 한 명입니다.
// 다른 종교에는 해당되지 않습니다.

$christianGod = new God();
$christianReligion = new MonotheisticReligion($christianGod);
// 이 맥락에서 신은 유일합니다.
// 새로운 것을 만들거나 변경할 수 없습니다.
// 이는 전역 변수입니다.

$jupiter = new God();
$saturn = new God();
$mythogicalReligion = new PolythiesticReligion([$jupiter, $saturn]);

// 신은 문맥에 따라 고유하거나 그렇지 않습니다.
// 단일성 유무에 관계없이 테스트 종교를 만들 수 있습니다.
// 신 클래스에 대한 직접적인 참조를 끊었기 때문에 결합이 덜합니다.
// 신 클래스의 단일 책임은 신을 생성하는 것이고 관리하는 것은 아닙니다.
