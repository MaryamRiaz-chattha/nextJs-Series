import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div >
      
    <nav className="bg-zinc-900 flex justify-around text-white p-10 ">
    
        <Link href="/home">Home</Link>
        <Link href="/blogs">blogs</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
  
    </nav>
    </div>
  )
}
