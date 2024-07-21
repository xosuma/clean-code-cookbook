from abc import abstractmethod


class Server:
    @abstractmethod
    def calculate_cost(self):
        pass


class DedicatedServer(Server):
    def calculate_cost(self):
        # 예: CPU 및 RAM 사용량 기준 비용
        return self.cpu * 10 + self.ram * 5


class HourlyChargedServer(Server):
    def calculate_cost(self):
        # # 예: CPU 및 RAM 사용량을 기준으로 한 비용에 시간 곱하기
        return (self.cpu * 5 + self.ram * 2) * self.hours

# 서버가 생성된 후에는 충전 방법을 동적으로 변경할 수 없습니다.
# 새로운 ChargingMethod를 만들면 서버 계층 구조에 영향을 미칩니다.
