<?

interface Sortable {
   public function sort();
}

class Array implements Sortable {
   public function sort() {
      // Array에 대한 sort() 메서드 구현
   }
}

class List implements Sortable {
   public function sort() {
      // List 대한 sort() 메서드 구현
   }
}

class Stack implements Sortable {
   public function sort() {
      // Stack에 대한 sort() 메서드 구현
   }
}