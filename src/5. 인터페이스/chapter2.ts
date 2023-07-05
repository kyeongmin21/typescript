/**
 * 인터페이스 확장: extends
 * 부모타입 > 자식타입 상속받는 것
 */

interface Animal {
  name: string
  age: number
}

interface Dog extends Animal {
  isBark: boolean
}

interface Cat extends Animal {
  isScratch: boolean
}

/**
 * 다중 확장
 */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  age: 1,
  isBark: true,
  isScratch: false
}
