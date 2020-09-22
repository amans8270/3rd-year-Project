import React from 'react';
import './CSS/tweetbox.css';
import {Avatar,Button} from "@material-ui/core";

function Tweetbox() {
    return (
        <div className="tweetbox">
            
            <form>
                <div className="tweetbox_input">
                    <Avatar/>
                    <input placeholder="Whats Happening" type="text"/>
                </div>
                <input className="tweetBox_imageInput" placeholder="Enter Image url" type="text"/>
                <Button className="tweetbox_button">Tweet</Button>
            </form>
            
        </div>
    )
}

export default Tweetbox
