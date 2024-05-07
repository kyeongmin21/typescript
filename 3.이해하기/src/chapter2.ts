/**
 * 객체타입 호환성
 */
type Animal = {
  name: string
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

animal = dog
// dog = animal


type Book = {
  name: string,
  price: number
}

type ProgramingBook = {
  name: string,
  price: number,
  skill: string
}

let book: Book
let proBook: ProgramingBook =  {
  name: '타스',
  price: 30000,
  skill: 'typescript'
}

book = proBook
// proBook = book

/**
 * 초과 프로퍼티 검사란
 * 객체 리터럴을 다른 타입으로 할당할 때
 * 해당 타입에 정의되지 않은 속성을 포함하는지를 검사하는 TypeScript의 기능
 */
let book2: Book = {
  name: '타스',
  price: 30000,
  // skill: 'typescript'
}

// ProgramingBook 타입이 book 의 서브타입이라 가능?
let book3: Book = proBook;
