/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */


type Person = {
  name: string,
  age: number
}

// value => number : toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Person: name은 age살입니다

function func(value: number | string | Date | null | Person) {
  if (typeof value === 'number') {
    console.log('숫자', value.toFixed())
  } else if (typeof value === 'string') {
    console.log('문자', value.toUpperCase())
  } else if (value instanceof Date) {
    console.log('시간', value.getTime)
  } else if (value && 'age' in value) {
    console.log('Person', `${value.name}은 ${value.age}살 입니다.`)
  }
}
