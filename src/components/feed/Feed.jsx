import React from 'react'
import './feed.css'
import Share from '../../layouts/share/Share'
import Post from '../../layouts/post/Post'
export default function Feed() {
  return (
    <div className='feed'>
      <Share/>
      <Post/>
    </div>
  )
}
