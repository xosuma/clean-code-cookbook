class ShopItem { 
  code() { }
  description() { }                 
}

class BookItem extends ShopItem { 
   code() { return 'book' }
   description() { return 'some book'}     
}

// 구상 클래스는 실제 동작이 없으며, 단지 다른 '데이터'를 반환할 뿐입니다.