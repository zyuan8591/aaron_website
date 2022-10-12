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

const Skill = () => {
  return (
    <div className="border border-lightGray rounded p-6 flex flex-col gap-2">
      <div className="text-2xl font-bold relative pl-3" css={title}>
        專業技能
      </div>
      Skill
    </div>
  );
};

export default Skill;
