import React, { useState } from 'react';
import Profile from '../components/homepage/Profile';
import Skill from '../components/homepage/Skill';
import SideProject from '../components/homepage/SideProject';
import {
  AiOutlineProfile,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';

const Homepage = () => {
  const [tabNow, setTabNow] = useState(0);

  const tabs = [
    { id: 1, name: '個人簡介', icon: <AiOutlineProfile /> },
    { id: 2, name: '專業技能', icon: <AiOutlineBulb /> },
    { id: 3, name: '專案', icon: <AiOutlineFundProjectionScreen /> },
  ];
  const tab_page = [<Profile />, <Skill />, <SideProject />];

  return (
    <div className="">
      <div className="border-b border-lightGray mb-6">
        <ul className="flex gap-4 max-w-main mx-auto px-8 pt-6 mb-b1 h-main">
          {tabs.map((tab) => (
            <li
              className={`${
                tabNow === tab.id - 1
                  ? ` border-accentClr text-mainClr`
                  : 'text-subContent border-transparent'
              } border-b-2 px-1 pb-2 cursor-pointer flex items-center gap-2`}
              key={tab.id}
              onClick={() => setTabNow(tab.id - 1)}
            >
              {tab.icon}
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-main mx-auto px-8 text-mainContent">
        {tab_page[tabNow]}
      </div>
    </div>
  );
};

export default Homepage;
