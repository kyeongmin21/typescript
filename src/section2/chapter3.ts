/**
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합칩합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 *  | 를 사용
 */

let a: string | number
a = 'hi'
a = 1
let arr: (string | number | boolean)[] = [a, '1', true]

// 타입별칭으로 유니언 타입을 만들 수 있다
type Dog = {
  name: string,
  color: string
}

type Person = {
  name: string,
  language: string
}

type Union1 = Dog | Person
let union1 : Union1 = {
  name: '',
  color: ''
}

let unoin2 : Union1 = {
  name: '',
  language: ''
}

let union3 : Union1 = {
  name: '',
  color: '',
  language: ''
}

// let union4 : Union1 = {
//   name: ''
// }

/**
 * 2. 교집합 타입 - intersection 타입
 *  & 을 사용
 */

let variable: number & string  // never 타입: 겹치는게 없음! {} 공집합임

type Intersection = Dog & Person
let intersection1 : Intersection = {
  name: '',
  color: '',
  language: ''
}
