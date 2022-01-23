import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from '@mui/material/Button';
function Sidebar() {
  return (
    <div className="sidebar">
      {/* Icon */}
      <TwitterIcon className="twitter_Icon" />
      {/* HomeIcon */}
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      {/* # HashTag */}
      <SidebarOptions Icon={TagIcon} text="Explore" />
      {/* Notifications */}
      <SidebarOptions
        Icon={NotificationsNoneOutlinedIcon}
        text="Notifications"
      />
      {/* Messages */}
      <SidebarOptions Icon={EmailIcon} text="Messages" />
      {/* Bookmarks */}
      <SidebarOptions Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
      {/* Lists */}
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      {/* Profile */}
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      {/* More */}
      <SidebarOptions Icon={MoreHorizIcon} text="More" />

      {/* Tweet Button */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth> Tweet</Button>

    </div>
  );
}

export default Sidebar;
