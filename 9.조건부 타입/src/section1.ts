/**
 * 조건부 타입
 * extends 와 삼항 연산자를 이용해
 * 조건에 따라 각각 다른 타입을 정의하도록 돕는 문법
 */
// 넘버는 스트링타입을 확장하지 않는다! 그래서 A는 number 타입이다
type A = number extends string ? string : number

type ObjA = {
  a: number
}
type ObjB= {
  a: number;
  b: number;
}

// type B는 number 타입 = true
type B = ObjB extends ObjA ? number: string


/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>
let varB: StringNumberSwitch<string>


function removeSpaces<T>(text: T): T extends string ? string : undefined
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '')
  } else {
    return undefined
  }
}
let result = removeSpaces('hi my name is min')
result.toUpperCase()
let result2 = removeSpaces(undefined)
