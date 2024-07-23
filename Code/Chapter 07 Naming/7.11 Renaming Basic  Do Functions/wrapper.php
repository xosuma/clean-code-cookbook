<?

final class Calculator {

    private $cachedResults;

    function computeSomething() {
        if (isset($this->cachedResults)) {
            return $this->cachedResults;
        }
        $this->cachedResults = $this->logAndComputeSomething();
    }

    private function logAndComputeSomething() {
        $this->logProcessStart();
        $result = $this->basicComputeSomething();
        $this->logProcessEnd();
        return $result;
    }

    private function basicComputeSomething() {
        // 실제 동작은 이곳에서 이루어집니다.
    }
}