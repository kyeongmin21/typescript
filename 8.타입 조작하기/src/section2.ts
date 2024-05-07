/**
 * keyof 연산자 (객체타입)
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
