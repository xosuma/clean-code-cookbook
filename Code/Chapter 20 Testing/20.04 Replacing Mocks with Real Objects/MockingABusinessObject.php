<?

class PaymentTest extends TestCase
{
    public function testProcessPaymentReturnsTrueOnSuccessfulPayment()
    {
        $paymentDetails = array(
            'amount'   => 123.99,
            'card_num' => '4111-1111-1111-1111',
            'exp_date' => '03/2013',
        );     

        $payment = $this->getMockBuilder('Payment')
            ->setConstructorArgs(array())
            ->getMock();
        // 비즈니스 객체를 모의해서는 안 됩니다!

        $authorizeNet = new AuthorizeNetAIM(
            $payment::API_ID, $payment::TRANS_KEY);
        // 이 시스템은 외부와 연결된 시스템입니다.
        // 해당 건에 대해 직접적으로 제어할 수 없으므로 테스트가 취약해집니다.
        $paymentProcessResult = $payment->processPayment(
            $authorizeNet, $paymentDetails);
        $this->assertTrue($paymentProcessResult);
    }
}