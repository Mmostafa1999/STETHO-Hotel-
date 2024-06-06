import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BlogData from "../BlogData";
import HeadTitle from "../../../common/HeadTitle/HeadTitle";
import EmptyFile from "../../../common/EmptyFile/EmptyFile";

const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />
      {item ? (
        <section className="single-page">
          <div className="container">
            <Link to="/blog" className="primary-btn back">
              <i className="fa-solid fa-long-arrow-alt-left"> Go back</i>
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.cover} alt="" />

                <div className="category flex-space">
                  <span>{item.data}</span>
                  <label>{item.catgeory}</label>
                </div>

                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <h2>Two Column Text Sample</h2>
                <div className="para flex-space">
                  <p>{item.para}</p>
                  <p>{item.para}</p>
                </div>
              </div>

              <div className="side-content">
                <div className="category-list">
                  <h2>Category</h2>

                  <ul>
                    {BlogData.map((item) => {
                      return (
                        <li>
                          <i className="fa-solid fa-circle-play"></i>
                          {item.catgeory}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default BlogSingle;
