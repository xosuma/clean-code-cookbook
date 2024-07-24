public interface Iterator { 
     public bool HasNext { get; set;}
     public object Next();
}

public Iterator Reverse(Iterator iterator) {
    var list = new List<int>();
    while (iterator.HasNext) {
       list.Insert(0, iterator.Next());
    }
    return new ListIterator(list);
}

public class MyCollection implements Iterator { 
     public bool HasNext { get; set;} // 구현 세부 사항
     public object Next(); // 구현 세부 사항
}

public class myDomainObject sum(Iterator anObjectThatCanBeIterated) {
     // 느슨한 결합
}

// (모의된 것을 포함해 프로토콜을 준수하기만 한다면) 모든 반복자를 사용할 수 있습니다.
