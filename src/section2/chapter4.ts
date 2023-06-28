/**
 * 타입추론
 */

let a = 10
let b = 'hello'
let c = {
  id: 1,
  name: 'min',
  profile: { nickname: 'minvly'},
  url: ["https://winterlood.com"]
}

let {id, name, profile} = c
let [one, two, three] = [1, 'hi', true]

function func(msg = 'hi') {
  return 'hi'
}

/**
 * any 타입의 진화
 */
let d

d = 10
d.toFixed()

d = 'hello'
d.toUpperCase()





