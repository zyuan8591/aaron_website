/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
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

const SideProject = () => {
  const [projData, setProjData] = useState([]);

  // GET PROFILE DATA
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `sideProject`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          console.log(data);
          setProjData(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // Loading Icon
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!projData.length)
    return <Spin indicator={antIcon} className="absolute top-1/2 left-1/2" />;

  return (
    <div className="border border-lightGray rounded p-6 flex flex-col gap-2 text-mainContent">
      <div className="text-2xl font-bold relative pl-3" css={title}>
        專案 Side Projects
      </div>
      {projData.map((p) => (
        <div key={p.id}>
          <div className="border border-lightGray rounded p-6">
            <h2 className="text-xl font-bold text-mainContent">{p.name}</h2>
            {/* main section */}
            <div className="flex gap-3 mb-2">
              {/* left section : image */}
              <figure className="max-w-sideProject shadow-md">
                <img src={p.img} alt="life" className="object-contain" />
              </figure>
              {/* right sectioin : content / tech / job */}
              <div>
                <p className="mb-1">{p.content}</p>
                <ul className="list-disc list-inside">
                  {p.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                <h3 className="text-mainContent my-2">負責功能：</h3>
                <ul className="list-decimal list-inside">
                  {p.myJob.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* link section */}
            <div>
              <span>專案前端 repository ：</span>
              <a
                href={p.link.frontEndRepo}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                {p.link.frontEndRepo}
              </a>
            </div>
            <div>
              <span>專案後端 repository ：</span>
              <a
                href={p.link.backEndRepo}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                {p.link.backEndRepo}
              </a>
            </div>
            <div>
              <span>專案 Demo 影片：</span>
              <a
                href={p.link.demo}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                {p.link.demo}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideProject;
