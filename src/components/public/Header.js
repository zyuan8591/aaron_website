import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const nav = [
    { id: '1', name: 'Home', link: '/aaron_website/' },
    { id: '2', name: 'Posts', link: '/aaron_website/posts' },
    { id: '3', name: 'TodoList', link: '/aaron_website/todo' },
  ];

  return (
    <div className="font-bold flex h-main bg-mainClr text-white">
      <div className=" py-3 px-8 flex items-center">
        <h1 className="rounded-full border-solid border-2 border-white inline-block px-2 py-0.5 text-white select-none">
          AaronWebsite
        </h1>
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
