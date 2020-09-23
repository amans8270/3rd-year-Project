import React, {useState} from 'react';
import './CSS/tweetbox.css';
import {Avatar,Button} from "@material-ui/core";
import db from "./firebase";

function Tweetbox() {
    const[tweetMessage,setTweetMessage]=useState("");
    const[tweetImage,setTweetImage]=useState("");
    
    
   

const sendTweet=e=>{
    e.preventDefault();
    db.collection('posts').add({
        displayName:'Rahul',
        username:"rahul999",
        verified:true,
        text:tweetMessage,
        image:tweetImage,
        avatar:""
    });
    setTweetImage("");
    setTweetMessage("");
}

    return (
        <div className="tweetbox">
            
            <form>
                <div className="tweetbox_input">
                    <Avatar  />
                    <input placeholder="Whats Happening"
                    onChange={e=>setTweetMessage(e.target.value)} 
                    value={tweetMessage} 
                    type="text"/>
                </div>
                <input className="tweetBox_imageInput"
                value={tweetImage}
                onChange={e=>setTweetImage(e.target.value)} 
                placeholder="Enter Image url" type="text"/>
                <Button type="submit" onClick={sendTweet} className="tweetbox_button">Tweet</Button>
            </form>
            
        </div>
    )
}

export default Tweetbox
