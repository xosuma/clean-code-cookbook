<?

final class Calculator {
    function computeSomething() {
        // compute 메서드이기에 이곳에서 실제 동작이 이루어집니다.
    }
}

// 단일 책임과 함께 깔끔하고 응집력이 있는 클래스입니다.

final class CalculatorDecoratorCache {

    private $cachedResults;
    private $decorated;

    function computeSomething() {
        if (isset($this->cachedResults)) {
            return $this->cachedResults;
        }
        $this->cachedResults = $this->decorated->computeSomething();
    }
}

final class CalculatorDecoratorLogger {

    private $decorated;

    function computeSomething() {
        $this->logProcessStart();
        $result = $this->decorated->computeSomething();
        $this->logProcessEnd();
        return $result;
    }
}