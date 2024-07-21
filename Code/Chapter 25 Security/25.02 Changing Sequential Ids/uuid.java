class Author { }

class Book {    
    private List<Author> authors; // 책은 저자를 알고 있습니다
    // 별도의 특이 사항은 없고, 오직 책이 할 수 있는 일만 합니다.
    // 실제 책은 ID에 대해 알지 못합니다.
    // ISBN은 우연한 구현이며 독자는 신경 쓰지 않습니다.
}

class BookResource {    
    private Book resource; // resource는 책의 내부를 알고 있습니다.
    private id; // id는 외부와의 연결 고리입니다.
}

Book harryPotter = new Book(new Author('J. K. Rowling'));

Book designPatterns = new Book(
    new Author('Erich Gamma'), 
    new Author('Richard Helm'), 
    new Author('Ralph Johnson'), 
    new Author('John Vlissides')); 
    
Book donQuixote = new Book(new Author('Miguel Cervantes'));

BookResource harryPotterResource = new BookResource(
    harryPotter, UUID.randomUUID());

// 책은 자신의 ID를 알지 못합니다. resource만 알 수 있습니다.