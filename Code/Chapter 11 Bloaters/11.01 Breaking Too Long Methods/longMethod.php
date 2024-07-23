<?

function setUpChessBoard() {
    $this->placeOnBoard($this->whiteTower);
    $this->placeOnBoard($this->whiteKnight);
    // 여러 줄
    // .....
    // 빈 줄로 정의 나눔
    $this->placeOnBoard($this->blackTower);
    $this->placeOnBoard($this->blackKnight);
}