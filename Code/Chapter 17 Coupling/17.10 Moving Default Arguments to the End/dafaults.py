def function_with_last_optional(a, b, c='foo'):
    print(a)
    print(b)
    print(c)


function_with_last_optional(1, 2)  # 다음을 출력: 1, 2, foo


def function_with_middle_optional(a, b='foo', c):
    print(a)
    print(b)
    print(c)


function_with_middle_optional(1, 2)

# SyntaxError: non-default argument follows default argument
# 초깃값을 설정해 놓은 매개변수 뒤에 초깃값을 설정해 놓지 않은 매개변수는
# 사용할 수 없다는 오류가 발생합니다.
