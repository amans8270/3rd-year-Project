import React from 'react';
import "./CSS/widgets.css";
import SearchIcon from "@material-ui/icons/Search";

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
function Widget() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
                </div>
                <div className="widgets_container">
                    <h2>Whats Hapenning</h2>
                    <TwitterTweetEmbed tweetId={"1308769687270907905"} />

                    <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="PMOI Modi"
                    options={{ height: 400 }}
                    />
                     <TwitterShareButton
          url={"http://amans8270.netlify.app"}
          options={{ text: "#reactjs is awesome", via: "Amans82702" }}
        />
                </div>
            </div>
    )
}

export default Widget
