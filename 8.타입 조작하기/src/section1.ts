/**
 * 인덱스드 엑세스 타입
 * 객체
 */
type ObjList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}

function printList(title: ObjList['title'], author: ObjList['author']) {
  console.log(`${title} / ${author.id}`)
}
const objList: ObjList = {
  title: '제목',
  content: '내용입니다',
  author: {
    id: 100,
    name: 'min'
  }
}
printList(objList.title, objList.author)


/**
 * 배열
 */
type ArrList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}[]

function printAuthorInfo(author: ArrList[number]['author']) {
  console.log(`${author.name}-${author.id}`)
}

const arrList: ArrList[number] = {
  title: '제목',
  content: '내용',
  author: {
    id: 1,
    name: '민'
  }
}

printAuthorInfo(arrList.author)


function arrayPrintList(list: ArrList[number]) {
  console.log(`${list.title}`)
}

const list: ArrList[number] = {
  title: '제목',
  content: '내용',
  author: {
    id: 1,
    name: '민'
  }
}

arrayPrintList(list)


/**
 * 튜플 타입
 */

type Tup = [number, string, boolean]
type Tup0 = Tup[0]
type Tup1 = Tup[1]
type Tup2 = Tup[2]
// type Tup3 = Tup[3] error!
// 유니온 타입으로 가져옴 number| string| boolean
type TupNum = Tup[number]
