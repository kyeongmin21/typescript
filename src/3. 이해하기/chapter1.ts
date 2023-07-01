/**
 *  Unknown 타입
 */
function unknownExam() {
  let a: unknown = 1
  let b: unknown = 'hello'
  let c: unknown = true
  let d: unknown = null
  let e: unknown = undefined
}

let unknownVar: unknown;
// let num: number = unknownVar   다운캐스팅 error
// let str: string = unknownVar


/**
 * Never 타입
 */
function neverExam() {
  function neverFunc():never {
    while(true) {}
  }

  let num: number = neverFunc()
  let str:string = neverFunc()
  let bool:boolean = neverFunc()

  // let never1: never = 10
  // let never2: never = 'hello'
}


/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log('hi')
  }

  let voidVar: void = undefined
}


/**
 * any 타입
 */
function anyExam(): any {
  let unknownVar: unknown
  let anyVar: any;
  let undefinedVar: undefined
  let neverVar: never

  // 타입계층도를 무시하지만 에러가 안남
  anyVar = unknownVar
  undefinedVar = anyVar

  // any > never 다운캐스팅 하는데 never타입은 공집합 {} 이라 안됨
  // neverVar = anyVar     error
}
