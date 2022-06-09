//  주소에 종속 되어서 데이터를 저장하는 방법
// setItme()

const color = {
  title:'red',
  sample:'apple',
  no:[
    'no01','no02'
  ]
}

//  검색 -> 프로젝트 

localStorage.setItem('book','photoshop');
// 문자데이터
//  객체 ->json-> string
// localStorage.setItme('color',color);
const str = JSON.stringify(color);
localStorage.setItem('color',str);
// getItem();