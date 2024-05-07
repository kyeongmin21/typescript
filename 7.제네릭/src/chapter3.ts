/**
 * map 메서드
 */

const arr = [1, 2, 3]
const str = ['a', 'b', 'c']
const newArr = arr.map((item) => item * 2)

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]))
  }

  return result
}

map(arr, (item) => item * 2)
map(str, (item) => item.toUpperCase())
// 인수를 받아서 넘버타입으로 바꾸는 함수
map(str, (item) => parseInt(item))


/**
 * forEach
 */

const arr2 = [1, 2, 3]
const str2 = ['a', 'b', 'c']
arr2.forEach((item) => console.log(item))

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

forEach(arr2, (item) => {
  console.log(item.toFixed())
})
forEach(str2, (item) => {
  console.log(item)
})
