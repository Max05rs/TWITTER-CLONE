import React from 'react'; 
import TweetBox from './TweetBox';
import './Feed.css'
import post from './Post'


function Feed() {
    return(
        <div className = "feed">
            {/*Home*/}
            <div className="feed_header">
                <h2>Home</h2>     
            </div> 
            {/*Tweetbox*/}
            <TweetBox />
            {/*Post*/}
            
        </div>
    )
}

export default Feed;
