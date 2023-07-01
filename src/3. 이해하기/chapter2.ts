/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 * 객체의 속성이 더 작은 타입이 업!
 */

type Animal = {
  name: string,
  color: string
}

type Dog = {
  name: string
  color: string
  breed: string
}

let animal: Animal = {
  name: '기린',
  color: 'yellow'
}
let dog: Dog = {
  name: '하몽',
  color: 'white',
  breed: '비숑'
}

animal = dog // 업캐스팅
// dog = animal 다운캐스팅
