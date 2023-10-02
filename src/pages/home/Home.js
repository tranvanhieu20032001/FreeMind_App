import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'

export default function Home() {

  const [showleftbar, setShowleftbar] = useState(false)
  const _showLeftbar = ()=>{
    setShowleftbar(!showleftbar)
}

  return (
    <>
      <Topbar _showLeftbar={_showLeftbar}/>
      <div className='container wrap'>
        <Leftbar showleftbar={showleftbar}/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}
