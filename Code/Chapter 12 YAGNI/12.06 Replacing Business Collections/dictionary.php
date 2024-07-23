<?

Namespace Spelling;

final class Dictionary {

    private $words;
    function __construct(array $words) {
        $this->words = $words;
    }

    function wordsCount(): int {
        return count($this->words);
    }

    function includesWord(string $subjectToSearch): bool {
        return in_array($subjectToSearch, $this->words);
    }
}

// 여기에는 추상 데이터 타입 사전과 유사한 프로토콜 그리고 테스트가 있습니다.
  
final class DictionaryTest extends TestCase {
    public function test01EmptyDictionaryHasNoWords() {
        $dictionary = new Dictionary([]);
        $this->assertEquals(0, $dictionary->wordsCount());
    }

    public function test02SingleDictionaryReturns1AsCount() {        
        $dictionary = new Dictionary(['happy']);
        $this->assertEquals(1, $dictionary->wordsCount());
    }

    public function test03DictionaryDoesNotIncludeWord() {
        $dictionary = new Dictionary(['happy']);
        $this->assertFalse($dictionary->includesWord('sadly'));
    }

    public function test04DictionaryIncludesWord() {
        $dictionary = new Dictionary(['happy']);
        $this->assertTrue($dictionary->includesWord('happy'));
    }
} 
