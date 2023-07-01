/**
 * 함수 타입
 * 어떤 [타입의] 매개변수를 받고 어떤 [타입의] 결과값을 반환하는지 이야기
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
 * 필수 & 선택적 두가지가 있는데 필수는 선택적 뒤에 올수 없다
 */
function introduce(name: string = '김경민', tall?: number) {
  console.log(`name: ${name}`)
  console.log(`tall: ${tall}`)
  if (typeof tall === 'number') {
    console.log(`tall: ${tall + 10}`)
  }
}

introduce('김경민', 160)
introduce('김경민') // ? 물음표에 의해 선택적 매개변수로 생략가능

/**
 * 예제
 */
function getSum(...rest: number[]) {
  let sum = 0
  rest.forEach(i => sum += i)
  return sum
}

getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5)
