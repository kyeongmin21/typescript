/**
 * 분산적인 조건부 타입
 */
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>

// 1단계
// Exclude<number, string>   => number
// Exclude<string, string>   => never
// Exclude<boolean, string>  => boolean

// 결과 ** never 는 공집합이라 없어짐
// number | boolean


type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>

// 1단계
// Extract<number, string>   => never
// Extract<string, string>   => string
// Extract<boolean, string>  => never

// 결과
// string


/**
 * 분산적 타입으로 안하고 싶을 때
 */
type Switch<T> = [T] extends [number] ?  number : string
let a: Switch<number>
let c: Switch<number | string> // 결과: string
