// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 이넘이 컴파일되면 값이 사라지지 않음!

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2
}

enum Language {
  korean = 'ko',
  english = 'en'
}

const user1 = {
  name: '관리자',
  role: Role.ADMIN,
  language: Language.korean
}


const user2 = {
  name: '일반유저',
  role: Role.USER,
  language: Language.korean
}

const user3 = {
  name: '게스트',
  role: Role.GUEST,
  language: Language.english
}



