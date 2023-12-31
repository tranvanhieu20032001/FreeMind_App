import React, { useState } from "react";
import "./rightbar.css";
import { MdCake, MdLocationOn, MdSchool } from "react-icons/md";
import { BsFillHouseHeartFill, BsPersonHeart } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Md_editprofile from "../../layouts/modal/Md_editprofile";
import { Users } from "../../data/data";

export default function Rightbar({ profile }) {
  const [openMd, setOpenMd] = useState(false);
  const onOpenModal = () => setOpenMd(true);


  const HomeRightBar = () => (
    <>
      <div className="birthday-box">
        <img src="assets/gift.png" alt="" />
        <span>
          <b>Dani Johson</b> and <b>2 other people</b> have a birthday today
        </span>
      </div>
      {/* <div className="event-box">
          <img src={event} alt="" className="img-event" />
        </div> */}
      <hr />
      <div className="online-friends">
        <h4 className="title-onlfriend">Online Friends</h4>
        <ul className="list-onlfriend">
          {Users.map((user) => (
            <li key={user.id} className="onlfriend">
              <div className="onl-state">
                <img className="avatar" src={user.profilePicture} alt="" />
                <span className="online"></span>
              </div>
              <span className="username">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const RightbarProfile = () => (
    <>
      <div className="wrapper-item">
        <h4 className="user-info">User Information</h4>
        <div className="edit-infor" onClick={onOpenModal}>
          <BiEdit />
        </div>
      </div>
      <Md_editprofile openMd={openMd} setOpenMd={setOpenMd}  />
      <div className="info">
        <div className="info-item">
          <MdCake />
          <span>20-03-2001</span>
        </div>
        <div className="info-item">
          <MdLocationOn />
          <span>From Quang Nam</span>
        </div>

        <div className="info-item">
          <BsFillHouseHeartFill />
          <span>Live in Da Nang</span>
        </div>

        <div className="info-item">
          <MdSchool />
          <span>Duy Tan University</span>
        </div>

        <div className="info-item">
          <BsPersonHeart />
          <span>Single</span>
        </div>
      </div>
      <hr />
      <div className="friends">
        <h4 className="user-info">Friend</h4>
        <div className="friends-wrapper">
          {Users.map((u) => (
            <div className="friend-items">
              <img src={u.profilePicture} alt="" className="friend-img" />
              <span className="friend-name">{u.username}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  return (
    <div className="rightbar">
      <div className="rightbar-container">
        <RightbarProfile />
        {/* {profile?<RightbarProfile />: <HomeRightBar/>} */}
      </div>
    </div>
  );
}
