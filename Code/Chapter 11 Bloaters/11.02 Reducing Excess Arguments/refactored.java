final public class PaperSize { }
final public class Document { }
final public class PrintMargins { }
final public class PrintRange { }  
final public class ColorConfiguration { }
final public class PrintOrientation { }
// 단순화하고자 메서드와 속성이 생략된 클래스 정의

final public class PrintSetup {
    public PrintSetup(PaperSize papersize,
           PrintOrientation orientation, 
           ColorConfiguration color,
           PrintRange range,
           int copiesCount,
           PrintMargins margins
           ) {}
}

final public class Printer {   
  void print(
         Document documentToPrint, 
         PrintSetup setup        
        ) {
    }
}