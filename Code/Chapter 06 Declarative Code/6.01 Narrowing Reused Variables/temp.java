// 합계(total) 출력
double total = item.getPrice() * item.getQuantity();
System.out.println("합계: " + total);

// 지불 총 액(total) 출력
total = order.getTotal() - order.getDiscount();
System.out.println( "지불 총 금액: " + total);

// 'total' 변수는 재사용되었습니다.
