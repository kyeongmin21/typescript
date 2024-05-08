/**
 * 맵드 타입 기반 유틸리티 타입
 * Partial<T>
 * 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string
}
// 파셜타입을 직접 구현해봄
type Partial<T> = {
  [key in keyof T]?: T[key]
}

const draft: Partial<Post>= {
  title: '나중에',
  content: '초안,,,,'
}

/**
 * Required<T>
 * 필수적인, 필수의
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key]
}

const widthThumbnailPost: Required<Post> = {
  title: '한입타스후기',
  tags: ['ts'],
  content: '',
  thumbnailURL: ''
}

/**
 * Readonly<T>
 * 읽기 전용
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key]
}

const readonlyPost: Readonly<Post> = {
  title: '한입타스후기',
  tags: ['ts'],
  content: '',
  thumbnailURL: ''
}
