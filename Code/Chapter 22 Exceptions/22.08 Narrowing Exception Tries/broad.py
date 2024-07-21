import calendar, datetime
try: 
    birth_year = input('출생년도:')
    birth_month = input('출생 월:')
    birth_day = input('출생 일:')
    # 위의 내용이 실패할 것으로 예상하지 않습니다.
    print(datetime.date(int(birth_year), int(birth_month), int(birth_day)))
except ValueError as e:
    if str(e) == '월은 해당 범위 안에 있어야 합니다: 1..12':
        print('월 ' + str(birth_month) +
              '은 범위를 벗어났습니다. 월은 해당 범위 안에 있어야 합니다: 1...12')
    elif str(e) == '연도 {0}은 범위를 벗어났습니다.'.format(birth_year):
        print('연도 ' + str(birth_year) +
              '는 범위를 벗어났습니다. 연도는 해당 범위 안에 있어야 합니다: ' +
              str(datetime.MINYEAR) + '...' + str(datetime.MAXYEAR))
    elif str(e) == '일은 범위를 벗어났습니다.':
        print('일 ' + str(birth_day) +
              '은 범위를 벗어났습니다. 일은 해당 범위 안에 있어야 합니다: 1...' +
              str(calendar.monthrange(birth_year, birth_month)))
