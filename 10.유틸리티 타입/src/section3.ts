/**
 * Exclude<T, U>
 * T에서 U를 제거하는 타입
 */
type T0 = Exclude<'a' | 'b' | 'c', 'a'>       // type T0 = 'b' | 'c'
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // type T1 = 'c'

type Exclude<T, U> = T extends U ? never : T
type A = Exclude<string | boolean, boolean>
// Exclude<string, boolean> => string
// Exclude<boolean, boolean> => never
// 결과 string


/**
 * Extract<T, K>
 * T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never
type B = Extract<string | boolean, boolean>
// 결과 boolean

/**
 * ReturnType
 * 함수의 반환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...arg:any) => any> = T extends (
  ...arg: any
) => infer R
  ? R
  : never
function funcA() {
  return 'hello'
}

function funcB() {
  return 10
}

type ReturnA = ReturnType<typeof funcA>
type ReturnB = ReturnType<typeof funcB>
