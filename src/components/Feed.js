import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
    const [posts, setPosts] = useState([]);

    //console.log(posts)

    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />
        </div>
    )
}
export default Feed