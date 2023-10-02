import React from "react";
import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="avatar"
            src="https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg"
            alt=""
          />
          <input
            placeholder="what are you thinking about ?"
            type="text"
            className="share-input"
          />
        </div>
        <hr />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <MdPermMedia size={25} color="#ff0c0c" />
              <span>Video or Photo</span>
            </div>

            <div className="share-option">
              <FaUserTag size={25} color="#4285f4" />
              <span>Tag</span>
            </div>

            <div className="share-option">
              <BsEmojiSmile size={25} color="#ffd600"/>
              <span>Feelings</span>
            </div>
          </div>
          <div className="share-btn">
            <button className="btn">share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
