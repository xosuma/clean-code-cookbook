class Teacher {
    static getByID(id) {
      // 이는 데이터베이스와 결합되어 있습니다.
      // 따라서 관심사 분리(Soc)를 위반합니다.
    }

    constructor(id, fullName) {
        this.id = id;
        this.fullName = fullName;
    }
}

class School {
    static getByID(id) {
      // 결합된 데이터베이스로 이동합니다.
    }

    constructor(id, address) {
        this.id = id;
        this.address = address;
    }
}

class Student {
    constructor(firstName, lastName, id, teacherId, schoolId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.teacherId = teacherId;
        this.schoolId = schoolId;
    }

    school() {
        return School.getById(this.schoolId);
    }

    teacher() {
        return Teacher.getById(this.teacherId);
    }
}