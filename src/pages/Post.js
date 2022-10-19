/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import NotFound from '../pages/NotFound';
import { postsContent } from '../utils/postsContent';

const Post = () => {
  let { postId } = useParams();
  const [postData, setPostData] = useState({});
  const [notFound, setNotFound] = useState(false);

  // GET PROFILE DATA
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `posts`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val()[postId - 1];
          if (!data) setNotFound(true);
          setPostData(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // content styles
  const mkdown = css`
    h1,
    h2,
    h3 {
      border-bottom: 1px solid #eee;
      padding-bottom: 0.5rem;
      margin-top: 0.8rem;
      margin-bottom: 0.8rem;
      font-weight: bold;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 20px;
    }
    a {
      display: block;
      color: #0969da;
    }
    p {
      padding: 0.5rem 0 1rem;
    }
  `;

  // No post Lead to 404 page
  if (notFound) return <NotFound />;
  // Loading icon
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!postData.id)
    return <Spin indicator={antIcon} className="absolute top-1/2 left-1/2" />;

  return (
    <div className="max-w-main mx-auto px-8 py-6 text-mainContent flex flex-col gap-2">
      {/* Post author & date */}
      <div className="flex items-center gap-2">
        <figure className="w-10">
          <img
            src="https://www.pokemon.co.jp/common/images/favi_official.ico"
            alt="avator"
            className="object-contain"
          />
        </figure>
        <div className="flex flex-col">
          <span>Aaron Yu</span>
          <span className="text-subContent">{postData.date}</span>
        </div>
      </div>
      {/* Post title & tag */}
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold text-mainClr">{postData.title}</h1>
        {postData.tag.map((t, i) => (
          <span
            key={i}
            className="rounded-full bg-accentClr text-white px-2 text-xs select-none cursor-pointer mt-3"
          >
            {t}
          </span>
        ))}
      </div>
      {/* Post content */}
      <div className="text-base" css={mkdown}>
        {postsContent[postData.id - 1]}
      </div>
    </div>
  );
};

export default Post;
