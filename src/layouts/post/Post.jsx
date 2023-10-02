import React from "react";
import "./post.css";
import { BsFillPersonCheckFill, BsThreeDots, BsX } from "react-icons/bs";

export default function Post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-user">
            <img
              className="avatar"
              src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
              alt=""
            />
            <span className="leftbarList-item-text text">Marry</span>
          </div>
          <div className="post-control">
           <div className="post-control-options">
            <BsThreeDots size={25}/>
          </div>
          <div className="post-control-hidden">
            <BsX size={25}/>
          </div>
          </div>
        </div>
        <div className="post-body">
            <div className="post-info">
                <span className="post-timer">
                    1 minue ago
                </span>
                <span className="post-permission">
                    <BsFillPersonCheckFill/>
                </span>
            </div>
        </div>
      </div>
    </div>
  );
}
