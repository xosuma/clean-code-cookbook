class Teacher {
    constructor(fullName) {
        this.fullName = fullName;
    }
}

class School {
    constructor(address) {
        this.address = address;
    }
}

class Student {
    constructor(firstName, lastName, teacher, school) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.teacher = teacher;
        this.school = school;
    }
}

// ID는 현실 세계에 존재하지 않으므로 더 이상 필요하지 않습니다.
// School을 외부 API나 데이터베이스에 노출해야 하는 경우, school이 아닌 다른 객체가
// externalId(외부id)<->school 등의 매핑으로 유지합니다.
