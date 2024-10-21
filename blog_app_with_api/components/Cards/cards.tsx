"use client";
import React from "react";

// Define the type for postData
interface PostData {
  title: string;
  body: string;
}

interface CardsProps {
  postData: PostData;
}

export default function Cards(props: CardsProps) {
  const { postData } = props;

  console.log("postData", postData);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-700 opacity-75"></div>
        <img
          className="w-full h-full object-cover"
          src="/assets/download.png"
          alt="Placeholder"
        />
      </div>

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {postData.title}
        </h2>

        <p className="text-gray-700 text-base">{postData.body}</p>
      </div>
    </div>
  );
}
