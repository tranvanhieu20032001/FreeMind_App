import React from 'react'
import './topbar.css'
import '../root.css'
import { BsBellFill, BsFillChatTextFill, BsHouseHeartFill, BsPersonFillAdd, BsSearch } from 'react-icons/bs';
import DarkMode from '../darkmode/DarkMode';
export default function Topbar() {
  return (
    <div className="topbar background container">
      <div className="wrapper-topbar-lc">
        <div className="topbarLeft">
          <img className='logo' src="https://freemind.vn/uploads/logofreemind.svg" alt="" />
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <input type="text" placeholder='Search on Freemind...' className='search-input' />
            <BsSearch className='btn-search' />
          </div>
        </div>

      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="icon-item">
            <BsHouseHeartFill className='icon' />
          </div>
          <div className="icon-item">
            <BsPersonFillAdd className='icon' />
            <span className="notify">1</span>
          </div>
          <div className="icon-item">
            <BsFillChatTextFill className='icon' />
            <span className="notify">1</span>
          </div>
          <div className="icon-item">
            <BsBellFill className='icon' />
            <span className="notify">1</span>
          </div>
          <div className="icon-item darktheme">
            <DarkMode />
          </div>
        </div>
        <div className="avatar-mini">
          <img className='avatar-mini' src="https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
