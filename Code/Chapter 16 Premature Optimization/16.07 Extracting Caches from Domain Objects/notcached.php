<?

final class Book {
    // Just Book related Stuff
}

interface BookRetriever {
    public function bookByTitle(string $title);
}

final class DatabaseLibrarian implements BookRetriever {
    public function bookByTitle(string $title) {
        // 데이터베이스로 이동합니다(전역이 아니길 바랍니다).
    }
}

final class HotSpotLibrarian implements BookRetriever {
    // 항상 현실적인 비유를 찾습니다.
    private $inbox;
    private $realRetriever;

    public function bookByTitle(string $title) {
        if ($this->inbox->includesTitle($title)) {
            // 운이 좋네요. 누군가 방금 책 사본을 반납했습니다.
            return $this->inbox->retrieveAndRemove($title);
        } else {
            return $this->realRetriever->bookByTitle($title);
        }
    }
}