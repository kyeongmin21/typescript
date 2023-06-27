// 타입 별칭
type User = {
  id: number,
  name: string,
  nickname: string,
  birth: string
}

let user: User = {
  id: 1,
  name: 'min',
  nickname: 'min',
  birth: '921011'
}

let user2: User = {
  id: 2,
  name: 'jin',
  nickname: 'handsome',
  birth: '921204'
}


// 인덱스 시그니처
type countryCodes = {
  [key: string] : string
}
let countryCodes: countryCodes= {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk'
}

type countryNumberCodes = {
  [key: string]: number
  Korea: number // 반드시 필요한 타입은 적어주면 된다.
}
let countryNumberCodes: countryNumberCodes = {
  Korea:  410,
  UnitedState: 840,
  UnitedKingdom: 826
}
