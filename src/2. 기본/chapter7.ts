// void -> 공허 -> 아무것도 없음을 의미하는 타입

function func1():string {
  return 'hello'
}

// 반환값을 null, undefined 로 정의하면 진짜로 그 값을 반환해야함
// 리턴문을 반환하고 싶지 않을 때 사용
function func2():void {
  console.log('hello')
}



// never -> 존재하지 않는 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error()
}
