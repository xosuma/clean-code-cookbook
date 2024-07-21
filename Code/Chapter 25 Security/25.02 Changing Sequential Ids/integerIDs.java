class Book {
    private Long bookId; // 책은 해당 ID(bookId)를 알고 있습니다.
    private List<Long> authorIds; // 책은 저자의 ID(authorIds)를 알고 있습니다.
}

Book harryPotter = new Book(1, List.of(2));
Book designPatterns = new Book(2, List.of(4, 6, 7, 8));
Book donQuixote = new Book(3, List.of(5));
