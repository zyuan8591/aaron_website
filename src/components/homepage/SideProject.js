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

const SideProject = () => {
  return (
    <div className="border border-lightGray rounded p-6 flex flex-col gap-2">
      <div className="text-2xl font-bold relative pl-3" css={title}>
        專案 Side Projects
      </div>
      <div className="border border-lightGray rounded p-6">
        <figure className="max-w-sideProject shadow-md">
          <img
            src="https://i.imgur.com/ZkR0f9J.jpg"
            alt="life"
            className="object-contain"
          />
        </figure>
      </div>
    </div>
  );
};

export default SideProject;
