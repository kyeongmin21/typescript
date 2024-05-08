/**
 * Pick<T, K>
 * 객체 타입으로 부터 특정 프로퍼티만 딱 골라내는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string
}
type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'tags' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key]
}
const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날제목',
  content: '옛날 컨텐츠'
}


/**
 * Omit<T, K>
 * 생략하다, 빼다
 * 객체 타입으로 부터 특정 프로퍼티를 제거하는 타입
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbnailURL'>>

const noTitlePos: Omit<Post, 'title'> = {
  tags: [],
  content: '',
  thumbnailURL: ''
}



/**
 * Record<K, V>
 * 동일한 패턴을 가진 객체 타입을 쉽게 정의할 수 있다.
 */

type ThumbnailLegacy =  {
  large: {
    url: string
  };
  medium: {
    url: string
  };
  small: {
    url: string
  };
  watch: {}
}

type Recode<K extends keyof any, V> = {
  [key in K]: V
}
type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string, size: number }>
