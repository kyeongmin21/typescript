/**
 * 함수 타입 표현식
 * 중복되는 코드를 줄일 수 있다.
 */

// const add = (a: number, b: number): number => a + b
// const sub = (a: number, b: number): number => a - b
// const multiply = (a: number, b: number): number => a - b

type Operation = (a: number, b: number) => number
const add: Operation = (a, b) => a + b
const sub: Operation = (a, b) => a - b

// 이렇게 정의 해도 됨.
const sub2: (a: number, b: number) => number = (a, b) => a - b

/**
 * 호출 시그니처
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string
}

const add2: Operation2 = (a, b) => a + b
const sub3: Operation2 = (a, b) => a - b

add2(1, 2)
add2.name;
