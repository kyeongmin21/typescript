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
