/**
 * 클래스
 */
const employee = {
    name: '민',
    age: 30,
    position: 'developer',
    work() {
        console.log('일함');
    }
};
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
const employedB = new Employee('김경민', 20, '개발자');
console.log(employedB);
export {};
