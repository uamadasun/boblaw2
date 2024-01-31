import axios from "axios";
import React from "react";

async function getPosts() {
  const query = `
    {
      posts {
        edges {
          node {
            id
            title
            excerpt
            slug
          }
        }
      }
    }
  `;
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

      next: {
        revalidate: 0,
      },
    }
  );
  const { data } = await res.json();
  console.log("result data: ", data);
  return data;
}
console.log("api url: ", process.env.WORDPRESS_API_URL)
export default async function Home() {
    const fetchedPosts = await getPosts();
    
    await console.log("fetched posts:", fetchedPosts);

    return (
      <div>
        <div className="w-full h-20 mt-40 bg-blue-400">
          <p>hello</p>
          {fetchedPosts.posts.edges.map((post) => (
            <div key={post.id} className="font-black text-red">
              <h2 className="font-black text-red">{post.node.title}</h2>
              {post.node.excerpt}
              <p>Slug: {post.node.slug}</p>
            </div>
          ))}
        </div>
      </div>
    );

  
}
