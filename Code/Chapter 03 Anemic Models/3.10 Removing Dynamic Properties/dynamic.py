class Dream:
    pass

nightmare = Dream()

nightmare.presentation = "나는 스파이더맨"
# presentation은 정의되지 않았습니다.
# 이는 동적 속성입니다.

print(nightmare.presentation) 
# Output: "나는 스파이더맨"
