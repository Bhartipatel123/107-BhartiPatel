import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  //   TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="Widgets">
      <div className="widget_input">
        <SearchIcon className="widget_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget_container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1469007036675465218"} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="TwitterDev"
        options={{ height: 400 }}
      />
      </div>

      
    </div>
  );
}

export default Widgets;
