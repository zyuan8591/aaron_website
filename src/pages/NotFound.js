import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-main mx-auto px-8 py-6 text-mainContent flex flex-col gap-5 justify-center items-center absolute top-1/3 left-1/2 -translate-x-1/2  font-mono">
      <div className="flex items-center gap-2 text-6xl">
        <div className="">404</div>
        <img
          src="https://www.pokemon.co.jp/common/images/favi_official.ico"
          alt="0"
          className="mt-2"
        />
        <span>Page Not Found</span>
      </div>
      <Link
        to="/"
        className="rounded-full bg-accentClr text-white px-10 py-2 border-2 border-accentClr mt-3 text-xl hover:bg-white hover:text-accentClr font-bold ease-linear duration-150"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
