import React, { useState } from "react";
import "./post.css";
import { BsFillPersonCheckFill, BsThreeDots, BsX } from "react-icons/bs";
import { TfiComment } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { Users } from "../../data/data";

export default function Post({ post }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  console.log("PF",PF);

  const Emojis = [
    {
      id: 1,
      name: "like",
    },
    {
      id: 2,
      name: "love",
    },
    {
      id: 3,
      name: "haha",
    },
    {
      id: 4,
      name: "sad",
    },
    {
      id: 5,
      name: "wow",
    },
    {
      id: 6,
      name: "angry",
    },
  ];

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [emojis, setEmojis] = useState("");

  const likeHandle = () => {
    console.log("like");
    if(!isLiked){
      setEmojis('like')
      setLike(like+1)
      setIsLiked(true)
    }
    else{
      setEmojis('')
      setLike(like-1)
      setIsLiked(false)
    }

  };


  const handleEmojis = (event,id) => {
    event.stopPropagation();
    if(!emojis){
      setEmojis(id)
      setLike(like+1)
      setIsLiked(true)
    }
    else{
      setEmojis(id)
    }
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-user">
            <img
              className="avatar"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <div className="post-info">
              <span className="username text">
                {Users.filter((u) => u.id === post?.userId)[0].username}
              </span>
              <div className="info-wrapper">
                <span className="post-timer">{post.date}</span>
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
          <p className="post-content">{post?.desc}</p>
          <img
            className="post-image"
            // src="assets/VF8_dealerTracker.png"
            src={post.photo}
            alt=""
          />
          <div className="post-interact">
            <div className="post-like-counter">
              <img src='assets/heart.png' alt="" />
              <img src='assets/like.png'alt="" />
              <span>{like}</span>
            </div>

            <div className="post-cmt-share">
              <div className="post-cmt">
                <span>9</span>
                <TfiComment size={18} />
              </div>
              <div className="post-shareshow">
                <span>5</span>
                <PiShareFatLight size={18} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="post-footer">
          <div className="post-feeling" onClick={likeHandle}>
            {emojis===''?(
              <BiLike
              size={20}
            />
            ):(<div className={emojis}></div>)}
            <span>{emojis||'Like'}</span>
            <ul className="emojis">
              {Emojis.map((e) => (
                <li
                  key={e.id}
                  className={e.name}
                  onClick={(event) => handleEmojis(event,e.name)}
                ></li>
              ))}
            </ul>
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
