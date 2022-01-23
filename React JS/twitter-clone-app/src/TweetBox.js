import { React, useState,forwardRef } from "react";
import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImageUrl, setTweetImageUrl] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    try {
      const docRef =  addDoc(collection(db, "Posts"), {
        avatar:
          "https://images.unsplash.com/photo-1642882857575-d5745c9887f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        displayName: "Bharti Patel",
        image:tweetImageUrl,
        text: tweetMessage,
        userName: "Bhartipatel",
        verified: true,
      });
      console.log("Document written with ID: ", docRef.id);
      setTweetMessage("");
      setTweetImageUrl("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="TweetBox">
      <form>
        <div className="tweetBox_input">
          {/* <Avatar sx={{ bgcolor: "#50b7f5" }}>T</Avatar> */}
          <Avatar src="https://images.unsplash.com/photo-1642882857575-d5745c9887f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <input
            placeholder="What's happening ?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetImageUrl}
          onChange={(e) => setTweetImageUrl(e.target.value)}
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox_tweetBtn">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
