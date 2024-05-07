// type alias (타입별칭) - 공통적으로 사용함!
type User = {
  id: number,
  name: string,
  birth: string
}

let user: User = {
  id: 1,
  name: 'min',
  birth: '19921011'
}


// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  Japan: 'jp',
  China: 'ch'
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
