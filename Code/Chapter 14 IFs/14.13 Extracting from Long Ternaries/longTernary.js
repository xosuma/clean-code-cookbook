const invoice = isCreditCard
  ? (prepareInvoice(),
    fillItems(),
    validateCreditCard(),
    addCreditCardTax(),
    fillCustomerDataWithCreditCard(),
    createCreditCardInvoice())
  : (prepareInvoice(), fillItems(), addCashDiscount(), createCashInvoice());

// 중간 결과가 고려되지 않습니다.
// 인보이스 값은 마지막 실행에서 나온 결과입니다.
