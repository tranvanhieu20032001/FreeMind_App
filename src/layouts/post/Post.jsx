import React from "react";
import "./post.css";
import { BsFillPersonCheckFill, BsThreeDots, BsX } from "react-icons/bs";
import { TfiComment } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import heart from "../../assets/images/heart.png";
import like from "../../assets/images/like.png";

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
            <div className="post-info">
              <span className="username text">Marry Curi</span>
              <div className="info-wrapper">
                <span className="post-timer">1 minue ago</span>
                <span>-</span>
                <span className="post-permission">
                  <BsFillPersonCheckFill />
                </span>
              </div>
            </div>
          </div>
          <div className="post-control">
            <div className="post-control-options">
              <BsThreeDots size={25} />
            </div>
            <div className="post-control-hidden">
              <BsX size={25} />
            </div>
          </div>
        </div>
        <div className="post-body">
          <p className="post-content">this is my post</p>
          <img
            className="post-image"
            // src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
            alt=""
          />
          <div className="post-interact">
            <div className="post-like-counter">
              <img src={heart} alt="" />
              <img src={like} alt="" />
              <span>100</span>
            </div>

            <div className="post-cmt-share">
              <div className="post-cmt">
                <span>9</span>
                <TfiComment size={18} />
              </div>
              <div className="post-share">
                <span>5</span>
                <PiShareFatLight size={18} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="post-footer">
          <div className="post-feeling">
            <BiLike size={20} />
            <span>Like</span>
          </div>
          <div className="post-comment">
            <TfiComment size={20} />
            <span>Comment</span>
          </div>
          <div className="post-share">
            <PiShareFatLight size={20} />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}
