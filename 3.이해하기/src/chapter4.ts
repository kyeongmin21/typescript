/**
 * 타입 추론
 */

let d; // 암묵적 any 타입,, any 가 진화함!
d = 10;
d.toFixed()

d = 'hi'
d.toUpperCase()
// d.toFixed()


let numb = 10;
const num = 10; // 상수이기 때문에 literal 타입으로 추론

let arr = [1, 'string']
