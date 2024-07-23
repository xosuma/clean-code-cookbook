import unittest


def multiply(first_multiplier, second_multiplier):
    return first_multiplier * second_multiplier
    
class TestMultiply(unittest.TestCase):
    def test_multiply_both_possitive_outcome_is_possitive(self):
        result = multiply(2, 3)
        self.assertEqual(result, 6)
    def test_multiply_both_negative_outcome_is_positive(self):
        result = multiply(-2, -4)
        self.assertEqual(result, 8)
    def test_multiply_first_is_zero_outcome_is_zero(self):
        result = multiply(0, -4)
        self.assertEqual(result, 0)
    def test_multiply_second_is_zero_outcome_is_zero(self):
        result = multiply(3, 0)
        self.assertEqual(result, 0)
    def test_multiply_both_are_zero_outcome_is_zero(self):
        result = multiply(0, 0)
        self.assertEqual(result, 0)           

# test_multiply라는 테스트 함수를 정의합니다.
# 이는 다른 인수를 사용해 곱하기 함수 호출하고
# assertEqual 메서드를 사용해 결과가 올바른지 확인합니다.

# 1. 함수가 수행하는 작업을 설명하는 메서드의 주석을 가져옵니다.
# 2. 주석이 무엇을 설명하는지 알 수 있도록 메서드의 이름을 변경합니다.
# 3. 주석을 검증할 수 있는 테스트를 만듭니다.
# 4. 관련 없는 구현 세부 정보를 생략합니다
