interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school
  console.log(`${school} 등교 완료!`)
}

const developer: User<Developer> = {
  name: 'min',
  profile: {
    type: 'developer',
    skill: 'ts'
  }
}

const student: User<Student> = {
  name: 'jin',
  profile: {
    type: 'student',
    school: '건국대'
  }
}
