"use client";
import Comments from "@/components/Comments/Comments";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Params {
  params: {
    blogId: string;
  };
}

export default function Page({ params }: Params) {
  const [postData, setPostData] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]); // Correctly typed array

  useEffect(() => {
    getSpecificPost();
  }, []);

  const getSpecificPost = async () => {
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
    );
    if (postResponse.ok) {
      const specificData = await postResponse.json();
      setPostData(specificData);

      const commentsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`
      );
      const commentsData = await commentsResponse.json();
      setComments(commentsData);
    }
  };

  return (
    <div className="min-h-screen bg-white py-10">
      {/* Post Section */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-slate-700 p-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            {postData?.title || "Loading..."}
          </h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {postData?.body || "Loading content..."}
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Comments ({comments.length})
        </h3>
        <div className="space-y-4">
          {comments.map((com) => (
            <div
              key={com.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <Comments commentData={com} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
