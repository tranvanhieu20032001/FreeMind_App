import React, { useContext } from 'react'
import './topbar.css'
import '../root.css'
import { BsBellFill, BsFillChatTextFill, BsHouseHeartFill, BsPersonFillAdd, BsSearch } from 'react-icons/bs';
import DarkMode from '../../layouts/darkmode/DarkMode';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdFormatListBulleted } from 'react-icons/md';
import { ShowlbContext } from '../../App';

export default function Topbar() {
  const context = useContext(ShowlbContext)
  const icons = [
    {
      id: 1,
      name: "Home",
      icon:<><BsHouseHeartFill className='icon' /></>,
      href: "https://www.facebook.com/profile.php?id=100037458979961",
    },
    {
      id: 2,
      name: "Friends",
      icon: <><BsPersonFillAdd className='icon' /></>,
      href: "https://www.facebook.com/profile.php?id=100037458979961",
    },
    {
      id: 3,
      name: "Message",
      icon: <><BsFillChatTextFill className='icon' /></>,
      href: "https://www.facebook.com/profile.php?id=100037458979961",
    },
    {
      id: 4,
      name: "Notification",
      icon:<><BsBellFill className='icon' /></>,
      href: "https://www.facebook.com/profile.php?id=100037458979961",
    },
  ]

  return (
    <div className="topbar background container">
      <div className="wrapper-topbar-lc">
        <div className="topbarLeft">
         <h1 className='logo'>FREEMIND</h1>
         <h1 className='logo-mb'>FM</h1>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <input type="text" placeholder='Search on Freemind...' className='search-input' />
            <Tippy content='Tìm kiếm'>
              <div className='btn-search'>
                <BsSearch className='icon' />
              </div>
            </Tippy>
          </div>
        </div>
        <div className="leftbar-menu" onClick={context._showLeftbar}>
        <MdFormatListBulleted size={25} className='icon' />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          {icons.map(({ id, name, icon }) => (
            <Tippy content={name} key={id}>
              <div className="icon-item">
                {icon}
                <span className="notify">1</span>
              </div>
            </Tippy>
          ))}
          <Tippy content='Darkmode'>
            <div className="icon-item darktheme">
              <DarkMode />
            </div>
          </Tippy>
        </div>
        <Tippy content='Account'>
        <div className="avatar-mini">
          <img className='avatar' src="https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg" alt="" />
        </div>
        </Tippy>
      </div>
    </div>
  )
}
