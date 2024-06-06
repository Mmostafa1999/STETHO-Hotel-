import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogCard = ({
  item: { id, data, catgeory, title, cover, para, desc },
}) => {
  return (
    <div>
      <div className="items">
        <div className="img">
          <img src={cover} alt="" />
        </div>

        <div className="category flex-space">
          <span>{data}</span>
          <label>{catgeory}</label>
        </div>

        <div className="details">
          <h3>{title}</h3>
          <p>{para}</p>
        </div>

        <Link to={`/blogsingle/ ${id}`} className="blogItem-link">
          READ MORE ... <i className="fa-solid fa-right-long"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
