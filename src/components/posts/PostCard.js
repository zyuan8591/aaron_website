import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div
      key={post.id}
      className="text-mainContent py-4 border-b border-lightGray last:border-0"
    >
      <div className="flex items-center gap-1">
        <figue className="w-4">
          <img
            src="https://www.pokemon.co.jp/common/images/favi_official.ico"
            alt="avator"
            className="object-contain"
          />
        </figue>
        <span className="text-mainClr">Aaron Yu</span>
        <span className="text-subContent">．{post.date}</span>
      </div>
      <h3 className="text-mainClr font-bold text-xl cursor-pointer">
        {post.title}
      </h3>
      <p className="mb-2">{post.content}</p>
      {post.tag.map((t, i) => (
        <span
          key={i}
          className="rounded-full bg-accentClr text-white px-2 text-xs select-none cursor-pointer"
        >
          {t}
        </span>
      ))}
    </div>
  );
};

export default PostCard;
