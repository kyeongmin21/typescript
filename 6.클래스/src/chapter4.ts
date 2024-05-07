/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed}속도로 이동!`)
  }
}


type Person = {
  name: string;
  age: number
}

const person: Person = {
  name: 'als',
  age: 30
}

interface Media {
  name: string,
  click: number
}

interface Admin extends Media {
  price: number
}

const admin: Admin = {
  name: '관리자',
  click: 33,
  price: 3030
}
