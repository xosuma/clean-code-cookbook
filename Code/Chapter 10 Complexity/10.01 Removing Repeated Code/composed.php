<?

final class TextReplacer {
    function replace(
        string $patternToFind, 
        string $textToReplace, 
        string $subject, 
        string $replaceFunctionName, 
        $postProcessClosure) {
        return $postProcessClosure(
            $replaceFunctionName($patternToFind, $textToReplace, $subject));
    }
}

// 다양한 테스트 작성을 통해 텍스트 교체기에 대한 신뢰도를 높일 수 있습니다.

final class WordProcessor {
    function replaceText(string $patternToFind, string $textToReplace) {
        $this->text = (new TextReplacer())->replace(
            $patternToFind, 
            $textToReplace, 
            $this->text, 
            'str_replace', fn($text) => '<<<' . $text . '>>>');
    }
}

final class Obfuscator {
    function obfuscate(string $patternToFind, string $textToReplace) {
        $this->text = (new TextReplacer())->replace(
            $patternToFind, 
            $textToReplace, 
            $this->text, 
            'str_ireplace', fn($text) => strlower($text));
    }
}