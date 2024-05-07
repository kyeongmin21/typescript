/**
 * 인터페이스
 */
interface Person {
  name: string;
  age: number;
  // sayHi: () => void; 함수 타입 표현식
  sayHi(): void; // 호출 시그니처로 변경
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: 'min',
  age: 30,
  sayHi: () => console.log('안녕!')
}


// 함수 오버로딩을 사용할려면
person.sayHi()
person.sayHi(1, 2)
