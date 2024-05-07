/**
 * 접근 제어자
 */
class Employee {
    // 필드
    name;
    age;
    position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log('일함');
    }
}
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
    // 메서드
    func() {
        this.name;
    }
}
const employee = new Employee('민', 30, 'developer');
employee.name = '김경민';
export {};
