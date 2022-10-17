import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const nav = [
    { id: '1', name: 'Home', link: '/' },
    { id: '2', name: 'Posts', link: '/posts' },
    { id: '3', name: 'TodoList', link: '/todo' },
  ];

  return (
    <div className="font-bold flex h-main bg-mainClr text-white">
      <div className=" py-3 px-8 flex items-center">
        <Link
          to="/"
          className="hover:text-white rounded-full border-solid border-2 border-white inline-block px-2 py-0.5 text-white select-none"
        >
          AaronWebsite
        </Link>
      </div>
      <ul className="flex gap-3 items-center">
        {nav.map((d) => (
          <li key={d.id} className="select-none">
            <Link to={d.link} className="hover:text-subContent">
              {d.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
