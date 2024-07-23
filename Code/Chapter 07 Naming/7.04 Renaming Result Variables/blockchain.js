var lastBlockchainBlock;

lastBlockchainBlock = findlastBlockchainBlock();

// 많은 함수 호출이 있습니다.
// 이들을 리팩터링해 변수 정의와 실제 사용할 때의 공간 간극을 최소화하세요.

addBlockAfter(lastBlockchainBlock);
