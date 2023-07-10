/**
 * 자바스크립트의 클래스
 */
let studentA = {
  name: '민',
  grade: 'A',
  age: 20,
  study() {
    console.log('열심히 공부하자')
  },
  introduce() {
    console.log('안녕')
  }
}


class Student {
  // 필드
  name
  grade
  age

  // 생성자
  constructor(name: string, grade: string, age: number) {
    this.name = name
    this.grade = grade
    this.age = age
  }

  // 메서드 , 콤마 사용X
  study() {
    console.log('열심히 공부하자')
  }
  introduce() {
    console.log(`안녕하세요. ${this.name}입니다.`)
  }

}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let student = new Student('민', 'A', 20) // 생성자가 호출됨
console.log(student)
student.study()
student.introduce()


/**
 * extends 상속
 */
class StudentDeveloper extends Student {
  // 필드
  favoriteSkill

  // 생성자
  constructor(name: string, grade: string, age: number, favoriteSkill: string) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`)
  }
}
const studentDeveloper = new StudentDeveloper('민', 'A', 20, 'vue')
console.log(StudentDeveloper)
studentDeveloper.programming()
