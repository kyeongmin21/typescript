/**
 * 대수타입
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * 합집합 타입과 교집합 타입이 존재
 */

/**
 * 합집합 타입 - Union
 */

let a: string | number | boolean
a = 1
a = 'min'
a = true

let arr: (number | string | boolean)[] = [1, '민', true]

type Dog = {
  name: string;
  color: string
}

type Person =  {
  name: string,
  language: string
}

type Union1 = Dog | Person

let union1: Union1 =  {
  name: '',
  color: ''
}
let union2: Union1 = {
  name: '',
  language: ''
}
let union3: Union1 = {
  name: '',
  color: '',
  language: ''
}
// let union4: Union1 = {
//   name: ''
// }


/**
 * 교집합 - Intersection
 */

let variable: number & string

type Intersection = Dog & Person

let interSection1: Intersection = {
  name: '',
  color: '',
  language: ''
}
