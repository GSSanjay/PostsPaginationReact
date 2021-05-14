import React from "react";
import "./Posts.css";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className="posts">
        <ul className="">
          {posts.map((post) => {
            return (
              <>
                <li className="post">
                  <h4 key={post.id}>{post.title}</h4>
                  <hr />
                  <p>{post.body}</p>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Posts;
