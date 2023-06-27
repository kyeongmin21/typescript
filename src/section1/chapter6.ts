// any (가능한 사용하지 않아야함)
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = 'hi';
anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();


// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// unknownVar.toUpperCase()

if (typeof unknownVar === 'number') {
  // num = unknownVar;
}
