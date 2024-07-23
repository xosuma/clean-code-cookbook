function printLineTotal() {
  double lineTotal = item.getPrice() * item.getQuantity();
  System.out.println("합계: " + lineTotal);
}

function printAmountTotal() {
  double ammountTotal = order.getTotal() - order.getDiscount();
  System.out.println( "지불 총 금액: " + ammountTotal);
}
