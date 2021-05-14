import React, { useEffect, useState } from "react";
import "./PostsSection.css";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="posts-section">
        <div className="container mt-5">
          <h1>Posts</h1>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </section>
    </>
  );
};

export default PostsSection;
