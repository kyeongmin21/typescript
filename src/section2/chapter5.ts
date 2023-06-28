/**
 * 타입단언
 */

type Person = {
  name: string,
  age: number
}

let person = {} as Person
person.name = 'min'
person.age = 30


type Dog = {
  name: string
  color: string
}

let dog = {
  name: '하몽',
  color: 'white',
  breed: '비숑'
} as Dog

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never
let num2 = 10 as unknown
// let num3 = 10 as string              => error
// let num3 = 10 as unknown as string   => error 안남


/**
 * const 단언
 */

let num4 = 10 as const
let cat =  {
  name: '야옹',
  color: 'yellow'
} as const

// cat.name = '' readonly 읽기 전용으로 됨

/**
 * Non Null 단언
 * ! 를 사용
 */

type Post = {
  title: string
  author?: string
}

let post: Post =  {
  title: '게시글',
  author: 'min'
}

const len: number = post.author!.length
