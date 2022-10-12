import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get, set } from 'firebase/database';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    // GET PROFILE DATA
    const dbRef = ref(getDatabase());
    get(child(dbRef, `profile`))
      .then((snapshot) => {
        console.log('snapshot', snapshot);
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setProfileData(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // Loading Icon
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!profileData.name) return <Spin indicator={antIcon} />;

  return <div>Profile</div>;
};

export default Profile;
