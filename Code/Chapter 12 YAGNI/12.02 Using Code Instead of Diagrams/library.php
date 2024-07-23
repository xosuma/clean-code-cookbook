<?

final class BookItem {
    function numberOfPages() { }
    function language(): Language { }
    function book(): Book { }        
    function edition(): BookEdition { }
    // 대여 및 연체는 도서 품목의 책임이 아닙니다.
}

final class LoanTracker {
    function loan(
        BookItem $bookCopy, 
        LibraryUser $reader, 
        DatePeriod $loanDates) {
        // DatePeriod는 빈약한 $fromDate와 $toDate보다 낫습니다
    }
}

final class LoanTrackerTests extends TestCase {
    // 시스템이 실제로 어떻게 작동하는지 알려주는 많은 유지 관리 테스트를 묶습니다.
}