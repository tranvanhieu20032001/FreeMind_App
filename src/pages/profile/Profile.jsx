import React from "react";

import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./../home/home.css";
import "./profile.css";
import { useContext } from "react";
import { ShowlbContext } from "../../App";
import "./../home/home.css";

export default function Profile() {
  const context = useContext(ShowlbContext);
  return (
    <div className="profile">
      <Topbar />
      <div className="container home-wrap">
        <Leftbar />
        <div className="profile-wrapper">
          <div className="profile-top">
            <div className="profile-img">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/28/11/27/gannet-8281303_640.jpg"
                alt=""
                className="profile-coverimg"
              />
              <img
                src="assets/VF8_dealerTracker.png"
                alt=""
                className="profile-avatar"
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-username">
                Tran Van Hieu
              </h4>
              <span className="profile-desc">
                Hello my friends !
              </span>
            </div>
          </div>

          <div className="profile-bottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
