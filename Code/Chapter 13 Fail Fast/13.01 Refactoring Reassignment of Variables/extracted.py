class Item:
    def taxes_charged(self):
        return 1


def buy_supper():
    supper_purchase = Item('Soda')
    # 구매로 무언가를 합니다.

    # 구매와 관련된 다양한 정보가 있습니다.
    # 음료를 마십니다.
    return supper_purchase


def buy_drinks():
    # 메서드를 추출할 수 있습니다!

    # 몇 시간 후...
    drinks_purchase = Item('Whisky')
    # 또 다른 음료를 구매합니다.

    return drinks_purchase


tax_amount = buy_supper().taxes_charged() + buy_drinks().taxes_charged()
