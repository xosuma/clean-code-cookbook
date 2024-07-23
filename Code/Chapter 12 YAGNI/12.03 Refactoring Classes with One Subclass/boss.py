class Boss(object):
    def __init__(self, name):
        self.name = name 
        
class GoodBoss(Boss):
    def __init__(self, name):
        super().__init__(name)
        
# 이것은 실제로 잘못 분류된 예입니다.
# 상사(Boss)는 불변의 존재여야 하지만,
# 건설적인 피드백을 통해 상사의 기분을 바꿀 수 있습니다.
