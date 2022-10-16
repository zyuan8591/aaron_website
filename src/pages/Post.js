import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Post = () => {
  let { postId } = useParams();
  const [postData, setPostData] = useState({});

  // GET PROFILE DATA
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `posts`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          console.log(data);
          setPostData(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // Loading Icon
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!postData.id)
    return <Spin indicator={antIcon} className="absolute top-1/2 left-1/2" />;

  return (
    <div className="max-w-main mx-auto px-8 py-6 text-mainContent flex flex-col gap-2">
      {postId}
    </div>
  );
};

export default Post;
