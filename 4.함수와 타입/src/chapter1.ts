/**
 * 함수 타입
 */

function func(a: number, b: number) {
  return a + b
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b

/**
 * 함수의 매개변수
 */

// 필수 매개변수는 선택적 매개변수보다 항상 앞에 있어야한다!
function introduce(name= '민', tall?: number) {
  console.log(`${name}`)
  if (typeof tall === 'number') {
    console.log(`${tall + 10}`)
  }
}

introduce('경민', 160)

function getSum(...rest: number[]) {
  let sum = 0
  rest.forEach((item) => sum += item)
  return sum
}
getSum(1, 2, 3) // 6
getSum(1, 2, 3, 4, 5) // 15
