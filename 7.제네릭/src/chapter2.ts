/**
 * 변수타입 응용하기
 * 두 개 이상의 Generic 사용하기
 */
function swap<T, U>(a: T, b: U) {
  return [b, a]
}
const [a, b] = swap('1', 2)


/**
 * 다양한 배열 타입을 인수로 받는 제네릭 함수
 */
function returnFirstValue<T>(data: T[]) {
  return data[0]
}

let num = returnFirstValue([0, 1, 2])
let str = returnFirstValue([1, 'a', 'b'])


/**
 * extends: 타입을 제한
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length
}
let var1 = getLength([1, 2, 3]) // 3
let var2 = getLength('12345') // 5
let var3 = getLength({ length: 10 }) // 10
// let var4 = getLength(10)
