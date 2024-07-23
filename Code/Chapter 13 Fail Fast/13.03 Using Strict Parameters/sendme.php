<?

function parseArguments($arguments) {
    $arguments = $arguments ?: null;
    // Always the billion-dollar mistake (null)
    if (is_empty($arguments)) {
        $this->arguments = http_build_query($_REQUEST);
        // 전역 변수와의 결합이나 부작용이 있을 수 있습니다.
    } elseif (is_array($arguments)) {
        $this->arguments = http_build_query($arguments);
    } elseif (!$arguments) { // null이 드러남
        $this->arguments = null;
    } else {
        $this->arguments = (string)$arguments;
    }
}