import React from "react";

const Article = ({ img, author, title, desc }) => {
  return (
    <div className="article">
      <img src={img} alt="" className="article__image" />
      <div className="article__content | flow">
        <p className="fs-300">By {author}</p>
        <h3 className="article__title | fs-600 text-primary-400">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Article;
