/**
 * 인터페이스 합치기
 * 반드시 동일한 타입으로 선언해야함 (서브타입도 X)
 * 두개의 interface Person 이지만 합쳐지기 때문에 에러가 안남
 */

interface Person {
  name: string
}

interface Person {
  name: string
  age: number
}

const person: Person = {
  name: '',
  age: 24
}
