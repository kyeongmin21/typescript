// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['a', 'b', 'c'];
let boolArr: boolean[] = [true, true, false];

let boolArr2: Array<boolean> = [true, true, false];

// 유니온 타입 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'min'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5]
]



// 튜플
// 배열과 길이가 고정된 배열
let tup1:[number, number] = [1, 2];
let tup2:[number, string, boolean] = [1, 'min', true];

const users: [string, number][] = [
  ['min', 1],
  ['jin', 2],
  ['han', 3],
  // [4, 'kim'] error
]
