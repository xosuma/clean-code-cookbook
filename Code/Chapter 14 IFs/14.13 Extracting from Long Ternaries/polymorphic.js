const invoiceTernary = isCreditCard
  ? createCreditCardInvoice()
  : createCashInvoice();

// 더 압축한 모습입니다.
if (isCreditCard) {
  const invoice = createCreditCardInvoice();
} else {
  const invoice = createCashInvoice();
}

// 다형성을 사용하면 더 좋습니다.

const invoice = paymentMethod.createInvoice();
