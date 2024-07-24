def is_platypus(self):
    return (
        self.is_mammal() and
        self.has_fur() and
        self.has_beak() and
        self.has_tail() and
        self.can_swim()
    )

# 동물 분류에 따라 조건을 그룹화할 수도 있습니다.
