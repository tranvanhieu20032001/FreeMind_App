import React, { useState } from "react";
import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import Md_editprofile from "../modal/Md_editprofile";
import Md_sharepost from "../modal/Md_sharepost";
// import Md_sharepost from "../modal/Md_sharepost";

export default function Share() {
  const [openMd, setOpenMd] = useState(false);
  const onOpenModal = () => setOpenMd(true);

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
              <MdPermMedia color="#ff0c0c" />
              <span>Video/Photo</span>
            </div>

            <div className="share-option">
              <FaUserTag color="#4285f4" />
              <span>Tag</span>
            </div>

            <div className="share-option">
              <BsEmojiSmile color="#ffd600"/>
              <span>Feelings</span>
            </div>
          </div>
          <div className="share-btn">
            <button className="btn" onClick={onOpenModal}>share</button>
          </div>
        </div>
      </div>
      <Md_sharepost openMd={openMd} setOpenMd={setOpenMd}  />
    </div>
  );
}
