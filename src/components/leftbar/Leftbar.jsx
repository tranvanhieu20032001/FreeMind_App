import React, { useContext, useState } from 'react'
import './leftbar.css'
import { MdGroup, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdRssFeed, MdStorefront, MdVideoLibrary } from 'react-icons/md'
import { BsFacebook, BsFillBookmarkHeartFill, BsFillBriefcaseFill, BsFillCalendarDayFill, BsFillPersonCheckFill, BsInstagram, BsYoutube } from 'react-icons/bs'
import { ShowlbContext } from '../../App'

export default function Leftbar() {
    const context = useContext(ShowlbContext)
    const listItems = [
        {
            id: 1,
            icon: <><MdRssFeed size={25} className='icon' /></>,
            text: 'Feed'
        },
        {
            id: 2,
            icon: <><BsFillPersonCheckFill size={25} className='icon'/></>,
            text: 'Add Friend'
        },
        {
            id: 3,
            icon: <><MdVideoLibrary size={25} className='icon' /></>,
            text: 'Video'
        },
        {
            id: 4,
            icon: <><BsFillCalendarDayFill size={25} className='icon' /></>,
            text: 'Memory'
        },
        {
            id: 5,
            icon: <><MdGroup size={25} className='icon' /></>,
            text: 'Group'
        },
        {
            id: 6,
            icon: <><MdStorefront size={25} className='icon' /></>,
            text: 'Shoping'
        },
        {
            id: 7,
            icon: <><BsFillBriefcaseFill size={25} className='icon' /></>,
            text: 'Jobs'
        },
        {
            id: 8,
            icon: <><BsFillBookmarkHeartFill size={25} className='icon' /></>,
            text: 'Bookmark'
        },

    ]

    const shortcut = [
    {
        id: 1,
        icon: <><BsFacebook size={25} color='#395693' className='icon' /></>,
        text: 'Facebook'
    },
    {
        id: 2,
        icon: <><BsInstagram size={25} color='#e64d55' className='icon' /></>,
        text: 'Instagram'
    },
    {
        id: 3,
        icon: <><BsYoutube size={25} color='#f70000' className='icon' /></>,
        text: 'Youtube'
    },
    
]

    const [showmore,setShowmore] = useState(false)
    const _showMore = ()=>{
            setShowmore(!showmore)
    }
    return (
        <div className={`leftbar ${context.showleftbar?'show':''}`}>
            <div className="leftbar-wrapper">
                    <div className="leftbarList-item">
                        <img className='avatar' src="https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg" alt="" />
                        <span className="leftbarList-item-text text">Văn Hiếu</span>
                    </div>
                <ul className={`leftbarList ${showmore?'fullheight':''}`}>
                    {listItems.map(({ id, icon, text }) => (
                        <li key={id} className="leftbarList-item">
                            {icon}
                            <span className="leftbarList-item-text text">{text}</span>
                        </li>
                    ))}
                </ul>
                <div className="show-more">
                    <div className="btn-show text sub-bg" onClick={_showMore}>
                        {showmore?<><span>Show less</span><MdOutlineKeyboardArrowUp/></>:<><span>Show more</span><MdOutlineKeyboardArrowDown /></>}
                    </div>
                </div>

                <div className="shortcut">
                    <h1 className='sub-title text'>Short Cut</h1>
                    <ul className='list_shortcut'>
                    {shortcut.map(({ id, icon, text }) => (
                        <li key={id} className="leftbarList-item">
                            {icon}
                            <span className="leftbarList-item-text text">{text}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
