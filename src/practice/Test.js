import React from 'react';
import { getDatabase, ref, child, get, set } from 'firebase/database';

const data = {
  name: '余梓源 Aaron',
  email: 'kaven22314567@gmail.com',
  phone: '0910-774-822',
  github: 'https://github.com/zyuan8591',
  school: [
    {
      name: '國立台北商業大學 財政稅務系',
      start: '2016/09/01',
      end: '2020/06/01',
    },
    { name: '資策會 前端工程師班', start: '2022/05/16', end: '2022/10/06' },
  ],
  slogan: [
    '勇於挑戰，抗壓性強，樂於與團隊溝通協作',
    '喜歡獨立思考，並培養自主解決問題的能力，享受工作及提升能力帶來的成就感',
    '持續精進學習新技術使開發更具效率，保持自我學習的熱情',
  ],
  work: [
    {
      name: '鼎新電腦股份有限公司',
      title: '會計/出納',
      start: '2021/03/23',
      end: '2022/04/15',
      job: [
        '1. 銀行帳務處理',
        '2. 擔任公司與銀行的溝通窗口',
        '3. 協助會計師查帳',
      ],
    },
  ],
  autobiohgraphy: [
    '　　畢業於國立臺北商業大學財政稅務系，第一份工作為會計人員，因考量未來職涯發展及興趣，而轉向前端工程師的領域，在職中曾於 Udemy 自學前端基礎語言，而後進入資策會前端工程師班打好基礎。',
    '　　受訓中學習團隊開發專案，第一份專案為使用 HTML、CSS、JS 搭配 PHP、MySQL 開發電商後台網站，包含資料 CRUD 及篩選、排序、搜尋。第二份專案是為期近一個月的開發，前端使用 React、SASS、Bootstrap 開發，後端使用 Node.js、Express、MySQL 開發，使用 RESTful API 串接前後端，擔任團隊內的技術長，也負責團隊 Git Flow、進度規劃及協助組員 debug。',
    '　　熱愛在網路上尋找資源學習新技術，並與團隊討論後實踐於專案中增加開發效率，期望未來能夠使用自身技術協助開發團隊完成各項專案。',
  ],
};

const Test = () => {
  // GET DATA
  const dbRef = ref(getDatabase());
  get(child(dbRef, `profile`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((e) => {
      console.error(e);
    });

  // SET DATA
  const db = getDatabase();
  set(ref(db, 'profile'), data);

  return <div className="ml-10">123</div>;
};

export default Test;
