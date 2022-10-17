/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import PostCard from '../components/posts/PostCard';

const title = css`
  &::before {
    content: '';
    width: 5px;
    height: 24px;
    background: #e60012;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`;

const Posts = () => {
  const [postData, setPostData] = useState([]);

  // GET POSTS DATA
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `posts`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          setPostData(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // Loading Icon
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!postData.length)
    return <Spin indicator={antIcon} className="absolute top-1/2 left-1/2" />;

  return (
    <div className="max-w-main mx-auto px-8 py-6 text-mainContent flex flex-col gap-2">
      <h2 className="text-2xl font-bold relative pl-3" css={title}>
        所有文章
      </h2>
      {postData.map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
};

export default Posts;
