// void
// 변수에는 undefined, null만 할당이 가능하고,
// 함수에는 return 값이 없을 때, 설정하는 타입입니다.

const data: void = undefined;

function notReturnValue(): void {
  console.log(1)
}

// never -> 존재하지 않는
// 불가능한 타입
function neverEnd(): never {
  while (true) {}
  // 여기는 도달하지 않아요
}

function errorThrow(): never {
  //에러 발생한 경우 중지하지 않고 throw 함수 실행
  throw new Error("error");
}
