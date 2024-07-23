<?

final class SocialNetworkProfile {

    private $userName;
    private $friends; // friends는 대규모 컬렉션에 대한 참조
    private $feed; // feed는 전체 사용자 피드를 참조

    public function __construct(
        $userName,
        FriendsCollection $friends, 
        UserFeedBehavior $feed) 
    {
        $this->assertUsernameIsValid($userName);
        $this->assertNoFriendDuplicates($friends);
        $this->userName = $userName;
        $this->friends = $friends;
        $this->feed = $feed;
        $this->assertNoFriendOfMyself($friends);

    }
    // 프로필과 연관된 수많은 프로토콜
    // 직렬화 프로토콜이나 동작 혹은 속성 중복 복제가 없습니다
}

interface FriendsCollectionProtocol { }

final class FriendsCollection implements FriendsCollectionProtocol { }

final class FriendsCollectionProxy implements FriendsCollectionProtocol {
    // 프록시 프로토콜은 경량 객체로 이동해 요청 시 콘텐츠를 가져올 수 있습니다.
}

abstract class UserFeedBehavior { }

final class UserFeed extends UserFeedBehavior { }

final class NullFeed extends UserFeedBehavior {
    // 동작을 요청할 때 오류를 발생시킵니다.
}

// 외부 시스템으로 전송해야 하는 경우 유효한 객체 생성
$janesProfileToTransfer = new SocialNetworkProfile(
    'jane', 
    new FriendsCollectionProxy(), 
    new NullFeed()
);