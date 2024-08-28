import React from 'react';
import Link from "next/link"
function blogspage()
 {
  return (
    <div className="p-5 flex flex-col items-center max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">My Blog</h2>
      
      <div className="flex flex-wrap justify-between gap-5 ">
        {/* Blog Post 1 */}
        <div className="flex-1 border border-gray-300 p-5 rounded-lg ">
          <h3 className="text-xl mb-2">Blog category 1</h3>
          <p className="text-stone-950">This is a brief description of the first blog post .</p>
          <Link href="/blogs/category" className="text-blue-600 hover:underline">Learn More</Link>{/*dynamic route */}
        </div>

        {/* Blog Post 2 */}
        <div className="flex-1 border border-gray-300 p-5 rounded-lg ">
          <h3 className="text-xl mb-2">Blog category 2</h3>
          <p className="text-stone-950">This is a brief description of the second blog post .</p>
          <Link href="/blogs/category" className="text-blue-600 hover:underline">Learn More</Link>
        </div>

        {/* Blog Post 3 */}
        <div className="flex-1 border border-gray-300 p-5 rounded-lg ">
          <h3 className="text-xl mb-2">Blog category 3</h3>
          
          <p className="text-stone-950">This is a brief description of the third blog post for Mcoder.</p>
       <Link href="/blogs/category" className="text-blue-600 hover:underline">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default blogspage;
