/**
 * 맵드 타입
 * 객체의 속성들을 순회해서 속성의 타입을 다른 타입으로 바꿔주는 역할
 */

interface User {
  id: number;
  name: string;
  age: number
}

type PartialUser = {
  // key: value
  [key in 'id' | 'name' | 'age']?: User[key]
}

type BooleanUser = {
  [key in keyof User]: boolean
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key]
}
// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: '김경민',
    age: 30
  }
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}

updateUser({
  // id: 1,
  // name: '김경민',
  age: 20
})
