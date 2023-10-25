import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { MdLocationOn, MdSchool } from "react-icons/md";
import { BsFillHouseHeartFill, BsPersonHeart } from "react-icons/bs";
import "./modal.css";
import Share from "../share/Share";

export default function Md_editprofile({ openMd, setOpenMd }) {
 
  return (
    <div>
      <Modal
        open={openMd}
        onClose={() => setOpenMd(!openMd)}
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        center
      >
        <form className="form-modal">
          <h1 className="gradient-text">personal information</h1>
          <div className="wrapper-item">
            <div className="form-group">
              <input type="text" required />
              <p className="gradient-text">First Name</p>
              <span>
                <i />
              </span>
            </div>
            <div className="form-group">
              <input type="text" required />
              <p className="gradient-text">Last Name</p>
              <span><i /></span>
            </div>
          </div>

          <div className="wrapper-item">
            <div className="form-group">
              <input type="date" required />
              <span>
                <i />
              </span>
            </div>
          </div>
          
          <div className="wrapper-item">
            <div className="form-group">
              <input type="text" required />
              <p className="gradient-text">Country</p>
              <span>
                <i />
              </span>
            </div>
            <div className="form-group">
              <input type="text" required />
              <p className="gradient-text">Live in</p>
              <span><i /></span>
            </div>
          </div>

          <div className="wrapper-item">
            <div className="form-group">
              <input type="text" required />
              <p className="gradient-text">Education</p>
              <span>
                <i />
              </span>
            </div>
            <div className="form-group">
              <input type="text" required />
              <p className="gradient-text">Relationship</p>
              <span><i /></span>
            </div>
          </div>
          
          <button className="btn btn-update">Update</button>
        </form>
      </Modal>
    </div>
  );
}
