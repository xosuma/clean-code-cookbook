class Stack extends ArrayList {
    public void push(Object value) { … }
    public Object pop() { … }
}

// Stack은 ArrayList처럼 동작하지 않습니다.
// pop, push, top 외에도 get, set, add, remove와 clear를 구현(또는 오버라이드)합니다.
// Stack 요소에 임의로 접근할 수 있습니다.
// 두 클래스 모두 명확합니다.
