<?

function translateFile() {
    $this->buildFilename();
    $this->readFile();
    $this->assertFileContentsAreOk();
    // 더 많은 줄이 있음
    
    // 기존 묶음의 끝을 표현하기 위해 빈 줄 기입
    $this->translateHiperLinks();
    $this->translateMetadata();
    $this->translatePlainText();
    
    // 이전과 똑같은 상황으로 빈 줄 기입
    $this->generateStats();
    $this->saveFileContents();
    // 더 많은 줄이 있음
}