/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Timeline } from 'antd';

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

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  // GET PROFILE DATA
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `profile`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          setProfileData(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // Loading Icon
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!profileData.name)
    return <Spin indicator={antIcon} className="absolute top-1/2 left-1/2" />;

  return (
    <div className="border border-lightGray rounded p-6 flex flex-col gap-2">
      <div className="text-2xl font-bold relative pl-3" css={title}>
        {profileData.name}
      </div>
      {/* about me ==================================================*/}
      <h2 className="text-lg underline underline-offset-4">About me</h2>
      {/* slogan */}
      <ul className="list-disc list-inside ml-1">
        {profileData.slogan.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      {/* mail */}
      <div className="flex items-center gap-1">
        <AiOutlinePhone />
        {profileData.phone}
      </div>
      {/* phone */}
      <div className="flex items-center gap-1">
        <AiOutlineMail />
        <a href={`mailto:${profileData.email}`}>
          <span className="text-link">{profileData.email}</span>
        </a>
      </div>
      {/* github */}
      <div className="flex items-center gap-1">
        <AiOutlineGithub />
        <a href={profileData.github} target="_blank" rel="noreferrer">
          <span className="text-link">{profileData.github}</span>
        </a>
      </div>
      {/* school history */}
      <Timeline className="mt-3 mb-b32" reverse>
        {profileData.school.map((s) => (
          <Timeline.Item
            key={s.name}
          >{`${s.start} - ${s.end} ${s.name}`}</Timeline.Item>
        ))}
      </Timeline>
      {/* about job ==================================================*/}
      <h2 className="text-lg underline underline-offset-4">About Job</h2>
      <div>期望工作：前端工程師</div>
      <div>期望工作地：台北市、新北市、桃園市{profileData.workLocation}</div>
      {/* job history */}
      <Timeline className="mt-3 mb-b32" reverse>
        {profileData.work.map((w) => (
          <Timeline.Item key={w.name}>
            {`${w.start} - ${w.end} ${w.name} ${w.title} `} <br />
            {w.job.map((j) => (
              <div key={j}>
                {j} <br />
              </div>
            ))}
          </Timeline.Item>
        ))}
      </Timeline>
      {/* Autobiohgraphy =============================================*/}
      <h2 className="text-lg underline underline-offset-4 mt-4">自傳</h2>
      {profileData.autobiohgraphy.map((a, i) => (
        <p key={i}>{a}</p>
      ))}
    </div>
  );
};

export default Profile;
