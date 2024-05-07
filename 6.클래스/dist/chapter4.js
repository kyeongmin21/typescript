/**
 * 인터페이스와 클래스
 */
class Character {
    name;
    moveSpeed;
    extra;
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }
    move() {
        console.log(`${this.moveSpeed}속도로 이동!`);
    }
}
const person = {
    name: 'als',
    age: 30
};
const admin = {
    name: '관리자',
    click: 33,
    price: 3030
};
export {};
