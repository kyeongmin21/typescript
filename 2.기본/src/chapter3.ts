// 객체 리터럴 타입
let dog: {
  name: string;
  color: string;
} = {
  name: '하몽',
  color: 'white'
}

// 선택적 프로퍼티
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: 'min'
}

user = {
  name: 'jin'
}

// 읽기 전용
let config: {
  readonly apiKey: string
} = {
  apiKey: 'MIN1011'
}
