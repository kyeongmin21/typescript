/**
 * infer : 추론하다
 * 조건부 타입 extends 절에서만 사용 가능하다
 */

type FuncA = () => string
type FuncB = () => number

type ReturnType<T> = T extends () => infer R ? R : never

type A = ReturnType<FuncA>
type B = ReturnType<FuncB>
type C = ReturnType<number>

/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never
// 1. T는 프로미스 타입이여야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야한다.

type PromiseA = PromiseUnpack<Promise<number>> // number
type PromiseB = PromiseUnpack<Promise<string>> // string
type NotPromise = PromiseUnpack<number> // never
