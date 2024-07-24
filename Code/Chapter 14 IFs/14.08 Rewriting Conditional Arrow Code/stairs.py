def is_platypus(self):
    if self.is_mammal():
        if self.has_fur():
            if self.has_beak():
                if self.has_tail():
                    if self.can_swim():
                        return True
    return False

# 이 또한 if로 오염되어 생물학자가 읽을 수 없을만큼 가독성이 떨어집니다.
def is_platypus(self):
    if not self.is_mammal():
        return False
    if not self.has_fur():
        return False
    if not self.has_beak():
        return False
    if not self.has_tail():
        return False
    if not self.can_swim():
        return False 
    return True
