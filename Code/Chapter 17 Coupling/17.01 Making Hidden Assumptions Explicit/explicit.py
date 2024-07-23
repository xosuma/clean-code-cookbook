class Unit:
    def __init__(self, name, symbol):
        self.name = name
        self.symbol = symbol

class Measure:
    def __init__(self, scalar, unit):
        self.scalar = scalar
        self.unit = unit

    def __str__(self):
        return f"{self.scalar} {self.unit.symbol}"


centimeters_unit = Unit("centimeters", "cm")
inches_unit = Unit("inches", "in")

ten_centimeters = Measure(10, centimeters_unit)
ten_inches = Measure(10, inches_unit)

ten_centimeters + ten_inches
# 변환 계수가 도입될 때까지 오류가 발생합니다.
# 이 경우 변환은 일정합니다.
# 인치 = 센티미터 / 2.54
