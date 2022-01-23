import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/IosShare";
import RepeatIcon from "@mui/icons-material/Repeat";
const Post= forwardRef(
  ({ displayName, userName, verified, text, image, avatar },ref)=> {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar}>T</Avatar>
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_header_text">
              <h3>
               {displayName}
                <span className="post_header_userName">
                  {verified && <VerifiedIcon className="post_badge"/>}
                 {" @"+userName}
                </span>
              </h3>
            </div>
            <div className="post_header_description">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
        
      </div>
    );
  }

);

export default Post;
