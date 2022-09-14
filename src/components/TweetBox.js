import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();


        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                    <Avatar
                        src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F73%2F60%2F8f%2F73608ffc5b6e0c3f20058185986bdbad.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fb4th--1085297210175358801%2F&tbnid=KfSR9eO3sr7oCM&vet=12ahUKEwic_5a--ZP6AhX4lNgFHeYmCsUQMygEegUIARDJAQ..i&docid=8F9GsUVMTnu82M&w=720&h=1280&q=ronaldo%20funny%20face&ved=2ahUKEwic_5a--ZP6AhX4lNgFHeYmCsUQMygEegUIARDJAQ"
                    />
                    <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening" 
                        type = "text" 
                    />
                </div>
                <input 
                    onChange = { (e) => setTweetImage(e.target.value) }
                    value = {tweetImage}
                    className = "tweetBox__imageInput"
                    placeholder = "Optional : Enter Image URL"
                    type = "text"
                />
                <Button 
                onClick = { sendTweet }
                className = "tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox