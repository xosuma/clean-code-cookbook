<?

final class SocialNetwork {

    function postStatus(string $newStatus) {
        if (!$user->isLogged()) {
            throw new Exception('사용자는 로그인되지 않음');
        }
        // ...
    }

    function uploadProfilePicture(Picture $newPicture) {
        if (!$user->isLogged()) {
            throw new Exception('사용자는 로그인되지 않음');
        }
        // ...
    }

    function sendMessage(User $recipient, Message $messageSend) {
        if (!$user->isLogged()) {
            throw new Exception('사용자는 로그인되지 않음');
        }
        // ...
    }
}