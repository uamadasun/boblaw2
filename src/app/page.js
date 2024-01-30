"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const reqUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts`;

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const res = await axios.get(reqUrl);
      console.log("results from call", res.data); // Access the response data
      setPosts(res.data); // Update the posts state with fetched data
    } catch (error) {
      console.log("this is the error message", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    console.log("I am in useEffect");
  }, []);
  console.log("finally i have posts: ", posts)

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        posts.map((post) => (
          <p key={post.id} className="text-red font-black text-lg">
            {post.title.rendered}
          </p>
        ))
      )}
    </div>
  );
};

export default Home;