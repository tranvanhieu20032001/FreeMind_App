import React from 'react'
import './rightbar.css'
import birthdaycake from '../../assets/images/cake.png'
import event from '../../assets/images/ad.png'
import { Users } from '../../data/data'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbar-container">
        <div className="birthday-box">
          <img src={birthdaycake} alt="" />
          <span><b>Dani Johson</b> and <b>2 other people</b> have a birthday today</span>
        </div>
        {/* <div className="event-box">
          <img src={event} alt="" className="img-event" />
        </div> */}
        <hr/>
        <div className="online-friends">
            <h4 className='title-onlfriend'>Online Friends</h4>
            <ul className='list-onlfriend'>
              {Users.map((user)=>(
                  <li key={user.id} className='onlfriend'>
                  <div className="onl-state">
                    <img className='avatar' src={user.profilePicture} alt="" />
                  <span className="online"></span>
                  </div>
                    <span className='username'>{user.username}</span>
                </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}
