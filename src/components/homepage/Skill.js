/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

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
  const [skillData, setSkillData] = useState({});
  // GET PROFILE DATA
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `skill`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          setSkillData(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // Loading Icon
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!skillData.frontEnd)
    return <Spin indicator={antIcon} className="absolute top-1/2 left-1/2" />;

  return (
    <div className="border border-lightGray rounded p-6 flex flex-col gap-2">
      <div className="text-2xl font-bold relative pl-3" css={title}>
        專業技能 Skills
      </div>
      <ul>
        <li>
          <span className="font-bold">前端技能：</span>
          {skillData.frontEnd.join('、')}
        </li>
        <li>
          <span className="font-bold">後端技能：</span>
          {skillData.backEnd.join('、')}
        </li>
        <li>
          <span className="font-bold">版本控制：</span>
          {skillData.git.join('、')}
        </li>
        <li>
          <span className="font-bold">IDE：</span>
          {skillData.IDE.join('、')}
        </li>
        <li>
          <span className="font-bold">其他技能：</span>
          {skillData.other.join('、')}
        </li>
      </ul>
    </div>
  );
};

export default Skill;
