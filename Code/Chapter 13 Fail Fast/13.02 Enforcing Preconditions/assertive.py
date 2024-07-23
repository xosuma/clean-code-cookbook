class Date:
    def __init__(self, day, month, year):
        if month > 12:
            raise Exception("월은 12를 초과할 수 없습니다")
        #
        # etc ...

        self._day = day
        self._month = month
        self._year = year


start_date = Date(3, 11, 2020)
# 성공

start_date = Date(31, 11, 2020)
# 실패

start_date.setMonth(13)
# 실패해야 하지만, 실패하지 않습니다.
