<?

function configureUser() {
    $password = '123456';
    // 변수에 비밀번호를 설정하는 것은 취약점입니다.
    $user = new User($password);
    // 변수가 변경되지 않는 것을 확인하세요.
}
