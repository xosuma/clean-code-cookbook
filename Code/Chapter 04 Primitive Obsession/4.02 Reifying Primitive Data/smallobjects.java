Port server = Port.parse(this, "www.example.org:8080");
// 포트(Port)는 책임과 프로토콜이 있는 작은 객체입니다.

Port in = server.open(this); // 숫자가 아닌 포트를 반환합니다.
URI uri = server.asUri(this); // 하나의 URI를 반환합니다.
InetSocketAddress address = server.asInetSocketAddress();
// 하나의 Address를 반환합니다.
Path path = server.path(this, "/index.html"); // Path를 반환합니다.
// 모두 매우 적고 정확한 책임이 있는, 검증된 작은 전단사 객체입니다.
