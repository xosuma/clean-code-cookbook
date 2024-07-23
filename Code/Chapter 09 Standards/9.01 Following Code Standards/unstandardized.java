public class MY_Account {
 // 클래스 이름에 대소문자와 밑줄 문자를 다르게 사용합니다.

 private Statement privStatement; 
 // 속성에는 접근성에 대한 접두사가 있습니다.
	
	   private Amount currentbalance = amountOf(0);

 public SetAccount(Statement statement) {
   this.statement = statement;
 }
 // 세터와 게터는 정규화되어 있지 않습니다.
	
public GiveAccount(Statement statement) 
{ this.statement = statement; }
// 들여쓰기가 균일하지 않습니다.

public void deposit(Amount value, Date date) {
  recordTransaction(
	  value, date);
  // 일부 변수는 역할이 아닌 유형 이름을 따서 표현됩니다.
 } 

public void extraction(Amount value, Date date) {
  recordTransaction(value.negative(), date);
  // deposit(입금)의 반대는 withdrawal(출금)이어야 합니다.
  // (extraction은 추출을 의미함)
	}
// 괄호 사용이 일관되지 않습니다.

public void voidPrintStatement(PrintStream printer) 
{
  statement.printToPrinter(printer);
  // 이름은 불필요합니다.
}

private void privRecordTransactionAfterEnteredthabalance
	(Amount value, Date date) {
  Transaction transaction = new Transaction(value, date);
  Amount balanceAfterTransaction = 
	              transaction.balanceAfterTransaction(balance);
  balance = balanceAfterTransaction;
  statement.addANewLineContainingTransation(transaction, 
					    balanceAfterTransaction);
  // 명명 규칙이 균일하지 않습니다.
    // 줄 바꿈이 일관되지 않습니다.
 }	
}