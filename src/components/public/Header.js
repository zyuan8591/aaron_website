import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const nav = [
    { name: 'Home', link: '/' },
    { name: 'Posts', link: '/posts' },
  ];

  return (
    <div className="font-bold flex h-main bg-mainClr text-white">
      <div className=" py-3 px-8 flex items-center">
        <h1 className="rounded-full border-solid border-2 border-white inline-block px-2 py-0.5">
          AaronWebsite
        </h1>
      </div>
      <ul className="flex gap-3 items-center">
        {nav.map((d) => (
          <li className="hover:text-subContent select-none ">
            <Link to={d.link}>{d.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
