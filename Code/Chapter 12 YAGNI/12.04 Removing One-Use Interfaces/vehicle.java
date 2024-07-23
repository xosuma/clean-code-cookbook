public interface Vehicle {
    public void start();
    public void stop();
}

public class Car implements Vehicle {
    public void start() {
        System.out.println("실행 중...");
    }
    public void stop() {
        System.out.println("중단 중...");
    }
}

// 더 구체적인 운송 수단을 발견할 때까지 기다리세요.
