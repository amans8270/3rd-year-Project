import React from 'react';
import './CSS/post.css';
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
})
 {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar/>

            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>Aman<span className="post_headerSpecial">
                        <VerifiedUserIcon className="post_badge" />
                            </span>
                            </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>I challenge you to build twitter clone</p>
                    </div>
                </div>
            <img src="https://urlme.me/1/2/3.jpg" alt="image" />
       <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
       </div>
        </div>
        </div>
    )
}

export default Post
