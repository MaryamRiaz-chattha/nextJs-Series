/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Cards from "@/components/Cards/cards";
import Link from "next/link";

export default function Blog() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPostData(data);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {postData.map((eachpost: any) => (
        <Link href={`/blogs/${eachpost.id}`} key={eachpost.id}>
          <Cards postData={eachpost} />
        </Link>
      ))}
    </div>
  );
}
