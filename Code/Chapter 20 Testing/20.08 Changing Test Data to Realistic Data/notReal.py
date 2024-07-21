class BookCartTestCase(unittest.TestCase):
    def setUp(self):
        self.cart = Cart()

    def test_add_book(self):
        self.cart.add_item('xxxxx', 3, 10)
        # 실제 예시 아님

        self.assertEqual(
            self.cart.total,
            30,
            msg='도서 추가 후 카트 합계가 정확하지 않음')
        self.assertEqual(
            self.cart.items['xxxxx'],
            3,
            msg='도서 추가 후 품목 수량이 정확하지 않음')

    def test_remove_item(self):
        self.cart.add_item('fgdfhhfhhh', 3, 10)
        self.cart.remove_item('fgdfhhfhrhh', 2, 10)    
        # You made a typo since example is not a real one
        self.assertEqual(
            self.cart.total,
            10, 
            msg='Book Cart total not correct after removing book')
        self.assertEqual(
            self.cart.items['fgdfhhfhhh'], 
            1,
            msg='Quantity of books not correct after removing book')