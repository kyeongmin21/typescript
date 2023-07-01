// object 객체 리터럴 타입
let user: {
  id: number,
  name: string
} = {
  id: 1,
  name: '김경민'
}


// O X 선택적이라면 ? 물음표 붙여주기
let dog: {
  name: string,
  color?: string
} = {
  name: '하몽',
  color: 'white'
}


// 읽기 전용
let confing: {
  readonly apiKey: string
} = {
  apiKey: 'MY API KEY'
}
// confing.apiKey = 'hacked'
