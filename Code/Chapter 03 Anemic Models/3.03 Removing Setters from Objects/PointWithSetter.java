public class PointWithSetter {
    protected int x;
    protected int y;
    public PointWithSetter() { }
        public void setX(int x) {
        this.x = x;
    }
    public void setY(int y) {
        this.y = y;
    }
}

PointWithSetter location = new PointWithSetter();
// 현재 기점으로 어떤 포인트들이 표시되는지 명확하지 않습니다.
// 생성자의 결정에 종속되어 있으며,
// 값의 종류는 null 혹은 다른 관행에 따라 다릅니다.

location.setX(1);
// 이제 (1, 0)인 포인트가 생겼습니다.

location.setY(2);
// 이제 (1, 2)인 포인트가 되었습니다.
// 만약 필수 속성을 설정해야 하는 경우,
// 이들을 생성자로 이동하고 세터 메서드를 제거하세요.
