/**
 * Unknown 타입
 */
function unknownExam() {
  // 업캐스팅 o
  let a: unknown = 1
  let b: unknown = 'hi'
  let c: unknown = true
  let d: unknown = null
  let e: unknown = undefined

  let unknownVar: unknown

  // 다운캐스팅 x
  // let num: number = unknownVar
  // let str: string = unknownVar
  // let bool: boolean = unknownVar
}


/**
 * Never 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc()
  let str: string = neverFunc()

  // 그 어떤 값도 저장되어서 안될 값으로 지정하기 좋음!!
  // let never1: never = 10
}


/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log('hi')
    return undefined
  }

  let voidVar: void = undefined
}


/**
 * any 타입
 */
function anyExam() {
  let unknownVar: unknown
  let anyVar: any
  let undefinedVar: undefined
  let neverVar: never

  anyVar = unknownVar
  undefinedVar = anyVar
  // neverVar = anyVar
}
