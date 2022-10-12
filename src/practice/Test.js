import React from 'react';
import { getDatabase, ref, child, get, set } from 'firebase/database';
// import { db } from '../utils/config';

const Test = () => {
  // GET DATA
  const dbRef = ref(getDatabase());
  get(child(dbRef, `name`))
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
  set(ref(db, 'user/1'), {
    username: 'aaron',
    email: 'aaron@test.com',
  });

  return <div>Test</div>;
};

export default Test;
