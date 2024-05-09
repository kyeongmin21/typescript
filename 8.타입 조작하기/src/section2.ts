/**
 * keyof 연산자
 * 객체 타입으로부터 프로퍼티의 모든 key 들을
 * String Literal Union 타입으로 추출하는 연산자
 */

interface Person {
  name: string;
  age: number
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key]
}

const person: Person = {
  name: '민',
  age: 30
}

getPropertyKey(person, 'name') // 민


const obj = { red: 'apple', yellow: 'banana' }
type Key = typeof obj[keyof typeof obj] // 객체의 value 들만 가져와 상수 타입으로


/**
 * keyof typeof 같이 사용한 예시
 */

// bmw 객체를 타입으로 사용하는 것이 아니라,해당 객체의 타입을 추출하는 것입니다.
// 이를 위해 typeof 연산자를 사용하여 변수의 타입을 추출해야 합니다.
const bmw = { name: 'BMW', power: '1000hp' }
type CarLiteralType = keyof typeof bmw
let carLiteralType: CarLiteralType
carLiteralType = 'name'
// carLiteralType = 'age'  error!!
