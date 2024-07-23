class Item:
    def taxes_charged(self):
        return 1


last_purchase = Item('Soda')
# 구매로 무언가를 합니다.

tax_amount = last_purchase.taxes_charged()
# 구매와 관련된 다양한 정보가 있습니다.
# 음료를 마십니다.

# 아래에서 쓸모없는 last_purchase 매개변수로 전달하지 않고는
# 메서드를 추출할 수 없습니다.

# 몇 시간 후...
last_purchase = Item('Whisky')
# 또 다른 음료를 구매합니다.

tax_amount += last_purchase.taxes_charged()
