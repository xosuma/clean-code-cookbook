class BookCartTestCase(unittest.TestCase):
    def setUp(self):
        self.cart = Cart()

    def test_add_book(self):
       self.cart.add_item('Harry Potter', 3, 10)
       
       self.assertEqual(
           self.cart.total,
           30, 
           msg='도서 추가 후 카트 합계가 정확하지 않음')
       self.assertEqual(
           self.cart.items['Harry Potter'],
           3,
           msg='도서 추가 후 품목 수량이 정확하지 않음')

    # 동일한 예제를 재사용하지 않습니다.
    # 현실에서도 사용할 법한 새로운 책을 사용합니다.
    def test_remove_item(self):
        self.cart.add_item('Divergent', 3, 10)
        self.cart.remove_item('Divergent', 2, 10)    
        self.assertEqual(
            self.cart.total,
            10,
            msg='도서 추가 후 카트 합계가 정확하지 않음')
        self.assertEqual(
            self.cart.items['Divergent'],
            1,
            msg='도서 추가 후 품목 수량이 정확하지 않음')
