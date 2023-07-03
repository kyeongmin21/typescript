/**
 * 인터페이스 : 타입에 이름을 지어주는 또 다른 문법
 * 객체의 구조를 정의하는데 특화된 문법
 */

interface Person {
  readonly name: string
  age?: number
  sayHi(): void // 호출 시그니처 (메서드의 오버로딩을 구현하고 싶을 때 사용)
  sayHi(a: number, b: number): void
  // sayHi: () => void            함수 표현식
  // sayHi: (a: number, b: number) => void
}
// 인터섹션 &

const person: Person = {
  name: 'min',
  sayHi: () => console.log('안뇽')
}

person.sayHi()
person.sayHi(1, 2)
