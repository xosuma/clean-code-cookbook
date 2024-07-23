<?

final class SocialNetworkProfile {

    private $userName;
    private $friends; // friends는 대규모 컬렉션에 대한 참조
    private $feed; // feed는 전체 사용자 피드를 참조

    public function __construct($userName, $friends, UserFeed $feed) {
        $this->assertUsernameIsValid($userName);
        $this->assertNoFriendDuplicates($friends);
        $this->userName = $userName;
        $this->friends = $friends;
        $this->feed = $feed;
        $this->assertNoFriendOfMyself($friends);
    }
    // 많은 프로토콜 존재
}

// 외부 시스템으로 이전해야 하는 경우, 구조를 복제(및 유지)해야 합니다

final class SocialNetworkProfileDTO {

   private $userName; // 동기화를 위해 중복 복제
   private $friends; // 동기화를 위해 중복 복제
   private $feed; // 동기화를 위해 중복 복제
   public function __construct() {
        // 유효성 검사가 없는 빈 생성자
   }

   // 비어 있는 프로토콜. 오직 직렬화만 있습니다.
}

// 외부 시스템으로 이전해야 하는 경우, 빈약한 DTO를 생성해야 합니다.
$janesProfileToTransfer = new SocialNetworkProfileDTO();
