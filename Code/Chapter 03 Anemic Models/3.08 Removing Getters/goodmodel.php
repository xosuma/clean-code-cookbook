<?

final class Window {
    private $width;
    private $height;
    private $children;

    public function width() {
        return $this->width;
    }

    public function area() {
        return $this->height * $this->width;
    }

    public function addChildren($aChild) {
        // 내부 속성을 노출하지 마세요.
        return $this->children[] = $aChild;
    }
}