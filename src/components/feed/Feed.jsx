import React from 'react'
import './feed.css'
import Share from '../../layouts/share/Share'
import Post from '../../layouts/post/Post'
import { Posts } from '../../data/data'
export default function Feed() {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
      <Share/>
      {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
