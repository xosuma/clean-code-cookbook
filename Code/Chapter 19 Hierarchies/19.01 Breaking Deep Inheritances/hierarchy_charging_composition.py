from abc import abstractmethod


class Server:
    def calculate_cost(self):
        return self.charging.calculate_cost(self.cpu, self.ram)

    def change_charging_method(self, charging):
        self.charging = charging


class ChargingMethod():
    @abstractmethod
    def calculate_cost(self, cpu, ram):
        pass


class MonthlyChargingMethod(ChargingMethod):
    def calculate_cost(self, cpu, ram):
        return cpu * 10 + ram * 5


class HourlyChargingMethod(ChargingMethod):
    def calculate_cost(self, cpu, ram):
        return (cpu * 5 + ram * 2) * self.hours

# 충전 방법을 개별적으로 단위 테스트할 수 있습니다.
# 서버에 영향을 주지 않고 새로운 충전 방법을 만들 수 있습니다.
