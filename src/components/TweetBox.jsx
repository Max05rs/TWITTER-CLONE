import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'


function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className = "tweetBox_input">
          <Avatar 
            src ="src\assets\roro.jpeg"/>
            <input type = "text"placeholder = "what's happening" />
        </div>
        <imput className = "tweetBox_imageInput" placeholder = "optional: Enter image URL" />
        <Button className = "tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
