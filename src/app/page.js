"use client";
import Image from "next/image";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

export default function Home() {
  const reqUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts`;
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("URL:", reqUrl);

  const fetchPosts = async () => {
    setLoading(true);
    console.log("hello");
    try {
      const response = await fetch(reqUrl);
      const responseData = await response.json();
      setPosts(responseData);
      console.log("posts: ", posts);
      setLoading(false);
    } catch (error) {
      console.error(Error);
    }
  };

  useEffect(  () => {
     fetchPosts()
     console.log("in use effect")
  }, []);
  console.log("posts:", posts);

  if (loading) {
    return(
      <p>Loading...</p>
    )
  }
  return <main>
    <p>{JSON.stringify(posts)}</p>
  </main>;
}
