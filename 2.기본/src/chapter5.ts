// enum 타입 : 상수의 집합
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 타입스트립트의 enum 은 컴파일 결과가 사라지지 않고, js 객체로 변환

// 이넘사용 지양하고, 유니온타입을 권장..

enum Role {
  ADMIN ,
  USER,
  GUEST
}

enum Language {
  korean = 'ko',
  english = 'en'
}

const user1 = {
  name: 'min',
  role: Role.ADMIN, // 관리자
  language: Language.korean
}
const user2 = {
  name: 'jin',
  role: Role.USER // 일반유저
}
const user3 = {
  name: 'han',
  role: Role.GUEST // 게스트
}

console.log(user1, user2, user3)


// 유니온 타입으로 변경
type Role2 = 'ADMIN' | 'MEDIA' | 'CLIENT'

let admin: { name: string, role: Role2 } = {
  name: '관리자',
  role: 'ADMIN'
}

let media: { name: string, role: Role2 } = {
  name: '매체',
  role: 'MEDIA'
}

let client: { name: string, role: Role2 } = {
  name: '광고주',
  role: 'CLIENT'
}
