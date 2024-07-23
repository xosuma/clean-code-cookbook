public abstract class OrderState { }

public final class OrderStatePending extends OrderState { }
// 다양한 동작을 가진 다형성 계층 구조입니다.
// 열거형(enum)만으로는 상태를 모델링하기에 충분하지 않습니다.

public final class Order {    
    public Order(LinkedList<int> items) {
        LinkedList<int> items = items;
        OrderState state = new OrderStatePending();
    }
    
    public function changeStatus(OrderState newState) {
        OrderState state = newState;
    }
    
    public function confirm() {
        state.Confirm(this);
    }
}