/**
 * 재네릭
 * 꺾쇠 괄호와 대문자 T 변수로서 지정함으로서,
 * 제네릭을 통해 코드에 선언한 타입을 변수화 하고,
 * 나중에 타입을 정하는 식으로 유연하게 사용이 가능하다.
 */

// 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.
// Generic 기본적 사용
function func<T>(value: T): T {
  return value
}

let num = func(10)
let bool = func(true)
let str = func('str')
let arr = func([1,2,3])
// 튜플타입으로 반환
let arr2 = func<[number, number, number]>([1,2,3])
