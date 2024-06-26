/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮을가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number
type B = () => 10

let a: A = () =>  10
let b: B = () => 10

a = b
// b = a 다운캐스팅이라서 에러남

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
// 2-2. 매개변수의 개수가 다를 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// number 리터럴 타입이 number 타입의 자식이기 때문에 d 함수는 c 함수로 취급될 수 없음
// c = d; 매개변수일 때는 업캐스팅이 안됨
d = c;

// 객체타입으로 이해하면 쉽다
type Animal = {
  name: string
}

type Dog = {
  name: string,
  color: string
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name)
}
let dogFunc = (dog: Dog) => {
  console.log(dog.name)
  console.log(dog.color)
}

// animalFunc = dogFunc
dogFunc = animalFunc
let testFunc = (animal: Animal) => {
  console.log(animal.name)
  // console.log(animal.color) 컬러 속성이 없으니깐
}
let testFunc2 = (dog: Dog) => {
  console.log(dog.name)
}



// 2-2. 매개변수의 개수가 다를 때
// 매개변수의 타입이 같고, 더 적은 매개변수에 할당은 가능
// 매개변수가 더 많은 쪽으로 호환성을 판단하게 됩니다.
type Func1 = (a: number, b: number) => void
type Func2 = (a: number) => void

let func1: Func1 = (a, b) => {}
let func2: Func2 = (a) => {}

func1 = func2
// func2 = func1
