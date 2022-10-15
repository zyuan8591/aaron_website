/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

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
  return (
    <div className="max-w-main mx-auto px-8 py-6 text-mainContent flex flex-col gap-2">
      <h2 className="text-2xl font-bold relative pl-3" css={title}>
        所有文章
      </h2>
    </div>
  );
};

export default Posts;
