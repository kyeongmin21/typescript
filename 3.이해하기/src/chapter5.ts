/**
 * 타입 단언 (assertion)
 *  타입 단언은 컴파일러에게 변수나 표현식의 타입을
 *  개발자가 미리 정의한 타입으로 강제로 캐스팅하도록 지시하는 것
 */

type Person = {
  name: string;
  age: number;
}

let person = {} as Person
person.name = 'min'
person.age = 20


type Dog = {
  name: string;
  color: string;
}

let dog = {
  name: '하몽',
  color: 'white',
  breed: '비숑' // TypeScript 가 컴파일 시에만 타입을 체크하고 실행 시에는 해당 객체의 속성을 자유롭게 사용할 수 있도록 하는 유연성을 제공
} as Dog


/**
 * 타입 단언의 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never
let num2 = 10 as unknown
// let num3 = 10 as string
// let num3 = 10 as unknown as string  다중 단언: 안좋안 방법


/**
 * const 단언 => readonly 로 바껴짐
 */
let num4 = 10 as const;

let cat = {
  name: '야옹',
  color: 'black'
} as const


/**
 * Non Null 단언
 * ! 느낌표 사용
 */

type Post = {
  title: string;
  author?: string;
}

let post: Post = {
  title: '게시글1',
  author: '김경민'
}

// 넘버 타입인데, undefined 가 못들어가서 에러남
// const len: number = post.author?.length
const len: number = post.author!.length
