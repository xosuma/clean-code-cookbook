class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year

    def setMonth(self, month):
        self.month = month

startDate = Date(3, 11, 2020)
# 성공

startDate = Date(31, 11, 2020)
# 실패합니다

startDate.setMonth(13)
# 불변성이 존재하므로 실패합니다.
