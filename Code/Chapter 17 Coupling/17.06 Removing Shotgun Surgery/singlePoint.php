<?

final class SocialNetwork {

    function postStatus(string $newStatus) {
        $this->assertUserIsLogged();
        // ...
    }

    function uploadProfilePicture(Picture $newPicture) {
        $this->assertUserIsLogged();
        // ...
    }

    function sendMessage(User $recipient, Message $messageSend) {
        $this->assertUserIsLogged();
        // ...
    }

    function assertUserIsLogged() {
        if (!$this->user->isLogged()) {
            throw new Exception('사용자는 로그인되지 않음');
            // 이는 단순화된 예시일 뿐입니다.
            // 연산은 전제 조건 등이 있는 객체로 정의되어야 합니다.
        }
    }
}