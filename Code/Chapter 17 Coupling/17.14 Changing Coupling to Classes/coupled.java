public class MyCollection { 
     public bool HasNext { get; set;} // 구현 세부 사항
     public object Next(); // 구현 세부 사항
}

public class MyDomainObject sum(MyCollection anObjectThatCanBeIterated) {
 // 긴밀한 결합
}

// 항상 MyCollection의 인스턴스를 기대하기 때문에
// 이 메서드를 위조하거나 모의할 수 없습니다.
